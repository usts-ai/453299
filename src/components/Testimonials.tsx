import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../data/mockData';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  const testimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-[#007BFF] to-[#40E0D0] text-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.span 
            className="text-white/80 font-semibold text-lg"
            variants={itemVariants}
          >
            Témoignages
          </motion.span>
          <motion.h2 
            className="text-4xl font-bold mt-2 mb-4 text-white"
            variants={itemVariants}
          >
            Ce que disent nos clients
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-white/80"
            variants={itemVariants}
          >
            Découvrez l'expérience de ceux qui ont déjà franchi le pas vers la transition énergétique grâce à notre plateforme.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Témoignage actuel avec animation */}
          <div className="relative h-[400px] md:h-[300px]">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-lg p-8 shadow-lg border border-white/20"
              >
                <div className="flex flex-col md:flex-row items-center h-full">
                  <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                    <motion.div 
                      className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/30"
                      whileHover={{ scale: 1.05 }}
                    >
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>
                  <div className="flex-1">
                    <svg className="w-12 h-12 text-white/30 mb-4" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M10 8v12h12v-12h-12zM0 18l5-10v10l-5 10v-10zM16 18l5-10v10l-5 10v-10z" />
                    </svg>
                    <p className="text-lg md:text-xl italic text-white mb-6">{testimonial.testimonial}</p>
                    <div>
                      <p className="font-bold text-white">{testimonial.name}</p>
                      <p className="text-white/70">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <motion.button
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 border border-white/30"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-white/30'}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
            
            <motion.button
              onClick={handleNext}
              className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 border border-white/30"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
