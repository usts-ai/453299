import React from 'react';
import { motion } from 'framer-motion';

const Process: React.FC = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const steps = [
    {
      id: 1,
      title: "Définissez votre projet",
      description: "Précisez vos besoins en matière de transition énergétique : panneaux solaires, isolation thermique ou pompe à chaleur.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Recevez des devis personnalisés",
      description: "Nos partenaires qualifiés étudient votre demande et vous proposent des solutions adaptées à votre situation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Comparez les offres",
      description: "Analysez les différentes propositions et choisissez celle qui correspond le mieux à vos attentes et à votre budget.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Concrétisez votre projet",
      description: "Lancez votre projet de transition énergétique avec le professionnel sélectionné et bénéficiez d'un suivi personnalisé.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-[#f8fafc] to-[#e0f2fe]">
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
            Comment ça marche
          </motion.span>
          <motion.h2 
            className="text-4xl font-bold mt-2 mb-4 text-gray-900"
            variants={itemVariants}
          >
            Un processus simple et efficace
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-gray-600"
            variants={itemVariants}
          >
            Nous vous accompagnons à chaque étape de votre projet de transition énergétique, de la définition de vos besoins à la réalisation des travaux.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Ligne de connexion */}
          <motion.div 
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 hidden md:block"
            style={{ marginLeft: "-0.5px" }}
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          />

          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
              >
                <motion.div 
                  className="md:w-1/2 text-center md:text-left"
                  variants={itemVariants}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    <span className="text-[#007BFF] mr-2">{step.id}.</span> {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>

                <div className="md:w-1/2 flex justify-center relative">
                  <motion.div 
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white shadow-lg flex items-center justify-center text-[#007BFF] z-10 border-4 border-white"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.1, 
                      boxShadow: "0px 0px 20px rgba(0, 123, 255, 0.4)",
                      backgroundColor: "#007BFF",
                      color: "white"
                    }}
                  >
                    {step.icon}
                  </motion.div>
                  
                  {/* Cercles d'arrière-plan */}
                  <motion.div 
                    className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-dashed border-[#007BFF]/30"
                    initial={{ scale: 0, opacity: 0, rotate: 0 }}
                    whileInView={{ scale: 1, opacity: 1, rotate: 45 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-[#007BFF] to-[#40E0D0] rounded-full text-white font-bold text-lg shadow-lg"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 10px 25px rgba(0, 123, 255, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Démarrer mon projet
          </motion.button>
          <p className="text-gray-500 mt-4">Plus de 3 200 projets déjà réalisés avec succès</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
