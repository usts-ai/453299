import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const controls = useAnimation();
  
  const slides = [
    {
      title: "Générez des leads qualifiés pour la transition énergétique",
      subtitle: "Connectez propriétaires et entreprises spécialisées en solutions durables",
      image: "https://images.unsplash.com/photo-1611302109890-a5d4a0accadb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Réduisez votre empreinte carbone",
      subtitle: "Adoptez des solutions énergétiques performantes et économiques",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Valorisez votre patrimoine immobilier",
      subtitle: "Investissez dans des équipements qui augmentent la valeur de votre bien",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    controls.start({
      opacity: [0, 1],
      y: [50, 0],
      transition: { duration: 1 }
    });
  }, [currentSlide, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 25px rgba(0, 191, 255, 0.4)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  const slideVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 1.5, ease: "easeOut" }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-16 pb-12 overflow-hidden">
      {/* Fond avec effet de parallaxe */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#001d3d] via-[#003566] to-[#0353a4] opacity-90"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 2 }}
        />
        <motion.img
          key={currentSlide}
          src={slides[currentSlide].image}
          alt="Transition énergétique"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.6 }}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={slideVariants}
        />
      </div>

      {/* Particules flottantes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 md:w-8 md:h-8 rounded-full bg-white opacity-40 shadow-glow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50, 0],
              x: [0, Math.random() * 100 - 50, 0],
              scale: [1, Math.random() + 0.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 z-10">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-white mb-4"
            key={`title-${currentSlide}`}
            animate={controls}
          >
            {slides[currentSlide].title.split(' ').map((word, index) => (
              <motion.span 
                key={index}
                className="inline-block mr-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {index === slides[currentSlide].title.split(' ').length - 2 ? (
                  <span className="text-[#40E0D0]">{word}</span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </motion.h2>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-100 mb-8"
            key={`subtitle-${currentSlide}`}
            animate={controls}
          >
            {slides[currentSlide].subtitle}
            <span className="font-semibold"> : panneaux solaires, isolation thermique et pompes à chaleur</span>.
          </motion.p>
          
          <motion.div
            className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4"
            variants={itemVariants}
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-[#00BFFF] to-[#40E0D0] rounded-full text-white font-bold text-lg md:text-xl shadow-lg"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Trouver un professionnel
            </motion.button>
            
            <motion.button
              className="px-8 py-4 bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 rounded-full text-white font-bold text-lg md:text-xl hover:bg-opacity-30"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              En savoir plus
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="mt-12 bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-5 border border-white border-opacity-20"
            variants={itemVariants}
          >
            <p className="text-white font-medium mb-3">Trouvez rapidement la solution adaptée à votre projet :</p>
            <div className="flex flex-wrap gap-3">
              {['Panneaux photovoltaïques', 'Isolation thermique', 'Pompes à chaleur'].map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-white text-sm font-medium border border-white border-opacity-30 hover:bg-opacity-30 transition duration-300 cursor-pointer"
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)" 
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + (index * 0.2) }}
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Indicateurs de slide */}
          <div className="flex justify-center mt-8 space-x-2">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-[#40E0D0]' : 'bg-white bg-opacity-30'}`}
                onClick={() => setCurrentSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 + (index * 0.1) }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Vague animée en bas de la section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <motion.svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.path
            d="M0,0 C150,120 350,0 500,100 C650,200 750,0 900,100 C1050,200 1150,80 1200,0 V120 H0 V0 Z"
            className="fill-white"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.svg>
      </div>
    </section>
  );
};

export default Hero;
