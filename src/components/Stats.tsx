import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { stats } from '../data/mockData';

const Stats: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const iconMap = {
    leads: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="6" x2="21" y2="6" />
        <line x1="8" y1="12" x2="21" y2="12" />
        <line x1="8" y1="18" x2="21" y2="18" />
        <line x1="3" y1="6" x2="3.01" y2="6" />
        <line x1="3" y1="12" x2="3.01" y2="12" />
        <line x1="3" y1="18" x2="3.01" y2="18" />
      </svg>
    ),
    installation: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
        <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" />
      </svg>
    ),
    partners: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    savings: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    )
  };

  // Animation de progression pour les barres de pourcentage
  const ProgressBar = ({ percent }: { percent: number }) => {
    return (
      <div className="relative h-2 w-full bg-gray-200 rounded-full mt-2">
        <motion.div
          className="absolute h-2 bg-gradient-to-r from-[#007BFF] to-[#40E0D0] rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percent}%` } : { width: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        />
      </div>
    );
  };

  // Compteur d'animation pour les valeurs
  const Counter = ({ value, duration = 2 }: { value: string; duration?: number }) => {
    const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
    const isNonNumeric = isNaN(numericValue);
    const counterRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
      if (isInView && !isNonNumeric && counterRef.current) {
        let startTime: number;
        let frame: number;
        
        const count = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
          const currentCount = Math.floor(progress * numericValue);
          
          if (counterRef.current) {
            // Garder les symboles spéciaux et formater correctement
            const formattedValue = value.replace(/[0-9]+/, currentCount.toString());
            counterRef.current.textContent = formattedValue;
          }
          
          if (progress < 1) {
            frame = requestAnimationFrame(count);
          } else if (counterRef.current) {
            counterRef.current.textContent = value;
          }
        };
        
        frame = requestAnimationFrame(count);
        return () => cancelAnimationFrame(frame);
      }
    }, [isInView, numericValue, value, duration, isNonNumeric]);

    return <span ref={counterRef}>{isInView ? '0' : value}</span>;
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6" ref={containerRef}>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="w-16 h-16 rounded-full bg-[#007BFF]/10 flex items-center justify-center text-[#007BFF] mb-4">
                {iconMap[stat.icon as keyof typeof iconMap]}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                <Counter value={stat.value} />
              </h3>
              <p className="text-gray-600 mb-3">{stat.label}</p>
              {stat.percentage && <ProgressBar percent={stat.percentage} />}
              {stat.percentage && (
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-gray-500">Objectif atteint</span>
                  <span className="text-xs font-semibold text-[#007BFF]">{stat.percentage}%</span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
