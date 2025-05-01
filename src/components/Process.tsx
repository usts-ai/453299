import React from 'react';
import { motion } from 'framer-motion';

const Process: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Remplir le formulaire",
      description: "Détaillez votre projet énergétique en quelques clics",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Analyse & Vérification",
      description: "Notre système qualifie votre demande pour garantir la pertinence",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
          <path d="M16 13H8" />
          <path d="M16 17H8" />
          <path d="M10 9H8" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Mise en relation",
      description: "Connexion avec des professionnels qualifiés près de chez vous",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="8.5" cy="7" r="4" />
          <line x1="20" y1="8" x2="20" y2="14" />
          <line x1="23" y1="11" x2="17" y2="11" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Évaluation & Devis",
      description: "Recevez des devis personnalisés pour votre projet",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M7 15h0M7 11h0" />
          <path d="M11.5 15h0M11.5 11h0" />
          <path d="M16 15h0M16 11h0" />
          <path d="M2 9h20" />
        </svg>
      )
    }
  ];

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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="process" className="py-20 bg-gray-50">
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
            Notre processus
          </motion.span>
          <motion.h2 
            className="text-4xl font-bold mt-2 mb-4 text-gray-900"
            variants={itemVariants}
          >
            Comment ça fonctionne
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-gray-600"
            variants={itemVariants}
          >
            En quelques étapes simples, trouvez les professionnels adaptés à votre projet de transition énergétique.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Ligne de connexion entre les étapes */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#007BFF] to-[#40E0D0] transform -translate-y-1/2 z-0" />

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {steps.map((step) => (
              <motion.div
                key={step.id}
                className="bg-white rounded-xl p-8 text-center relative shadow-sm border border-gray-100"
                variants={cardVariants}
                whileHover="hover"
              >
                {/* Bulle numérotée */}
                <motion.div 
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-[#007BFF] to-[#40E0D0] text-white font-bold text-lg flex items-center justify-center absolute -top-6 left-1/2 transform -translate-x-1/2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1, rotate: [0, 10, -10, 0] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + step.id * 0.1 }}
                >
                  {step.id}
                </motion.div>

                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[#007BFF]/10 flex items-center justify-center text-[#007BFF]">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-[#007BFF] to-[#40E0D0] rounded-full text-white font-bold text-lg shadow-lg hover:shadow-xl transform transition"
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(0, 123, 255, 0.4)" }}
            whileTap={{ scale: 0.98 }}
          >
            Démarrer mon projet
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
