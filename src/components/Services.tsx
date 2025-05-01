import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/mockData';

const Services: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      y: -10,
      boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.15)",
      transition: {
        duration: 0.3
      }
    }
  };

  const iconMap = {
    solar: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    ),
    isolation: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="3" y1="15" x2="21" y2="15" />
        <line x1="9" y1="3" x2="9" y2="21" />
        <line x1="15" y1="3" x2="15" y2="21" />
      </svg>
    ),
    heatpump: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 16.3c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4S3 3.8 3 6v6.3c0 2.2 1.8 4 4 4z" />
        <path d="M20.4 9.6c-1.3 1.3-3.4 1.3-4.7 0l-4.4-4.4c-1.3-1.3-1.3-3.4 0-4.7s3.4-1.3 4.7 0l4.4 4.4c1.3 1.3 1.3 3.4 0 4.7z" />
        <circle cx="17" cy="17" r="3" />
        <path d="M13 17h4" />
      </svg>
    )
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.span 
            className="text-[#007BFF] font-semibold text-lg"
            variants={itemVariants}
          >
            Nos solutions énergétiques
          </motion.span>
          <motion.h2 
            className="text-4xl font-bold mt-2 mb-4 text-gray-900"
            variants={itemVariants}
          >
            Services pour la transition énergétique
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-gray-600"
            variants={itemVariants}
          >
            Nous proposons des solutions adaptées à chaque besoin pour réduire votre empreinte écologique et réaliser des économies significatives.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 h-full"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white text-xl font-bold">{service.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 rounded-full bg-[#007BFF]/10 flex items-center justify-center text-[#007BFF] mb-4">
                  {iconMap[service.icon as keyof typeof iconMap]}
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <motion.button 
                  className="flex items-center font-medium text-[#007BFF] group"
                  whileHover={{ x: 5 }}
                >
                  En savoir plus
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
