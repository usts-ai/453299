import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    nom: '',
    email: '',
    telephone: '',
    projet: '',
    codePostal: '',
    message: '',
    consentement: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormState(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simuler l'envoi du formulaire
    console.log('Formulaire soumis:', formState);
    alert('Merci pour votre demande ! Un conseiller vous contactera prochainement.');
    // Réinitialiser le formulaire
    setFormState({
      nom: '',
      email: '',
      telephone: '',
      projet: '',
      codePostal: '',
      message: '',
      consentement: false
    });
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

  const buttonVariants = {
    hover: { 
      scale: 1.05, 
      boxShadow: "0px 5px 15px rgba(0, 123, 255, 0.3)" 
    },
    tap: { scale: 0.95 }
  };

  const inputVariants = {
    focus: { 
      scale: 1.02,
      boxShadow: "0px 0px 8px rgba(0, 123, 255, 0.3)",
      borderColor: "#007BFF",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
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
            Contactez-nous
          </motion.span>
          <motion.h2 
            className="text-4xl font-bold mt-2 mb-4 text-gray-900"
            variants={itemVariants}
          >
            Prêt à démarrer votre projet écologique ?
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-gray-600"
            variants={itemVariants}
          >
            Remplissez ce formulaire pour être mis en relation avec des professionnels qualifiés dans votre région.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid md:grid-cols-5">
              {/* Information de contact */}
              <div className="md:col-span-2 bg-gradient-to-br from-[#007BFF] to-[#40E0D0] p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Informations de contact</h3>
                <p className="mb-8">
                  Nous sommes là pour vous aider dans votre transition vers des solutions énergétiques durables et économiques.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Téléphone</h4>
                      <p>+33 (0)1 23 45 67 89</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p>contact@energieleads.fr</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Adresse</h4>
                      <p>123 Avenue de l'Énergie, 75000 Paris</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex space-x-4">
                  <motion.a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                    </svg>
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </motion.a>
                </div>
              </div>

              {/* Formulaire */}
              <div className="md:col-span-3 p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Parlez-nous de votre projet</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div whileHover="focus" variants={inputVariants}>
                      <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        value={formState.nom}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007BFF] focus:border-[#007BFF] outline-none transition-all"
                        placeholder="Votre nom"
                        required
                      />
                    </motion.div>

                    <motion.div whileHover="focus" variants={inputVariants}>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007BFF] focus:border-[#007BFF] outline-none transition-all"
                        placeholder="votre.email@exemple.com"
                        required
                      />
                    </motion.div>

                    <motion.div whileHover="focus" variants={inputVariants}>
                      <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        value={formState.telephone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007BFF] focus:border-[#007BFF] outline-none transition-all"
                        placeholder="06 12 34 56 78"
                        required
                      />
                    </motion.div>

                    <motion.div whileHover="focus" variants={inputVariants}>
                      <label htmlFor="codePostal" className="block text-sm font-medium text-gray-700 mb-1">Code postal</label>
                      <input
                        type="text"
                        id="codePostal"
                        name="codePostal"
                        value={formState.codePostal}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007BFF] focus:border-[#007BFF] outline-none transition-all"
                        placeholder="75000"
                        required
                      />
                    </motion.div>
                  </div>

                  <motion.div whileHover="focus" variants={inputVariants}>
                    <label htmlFor="projet" className="block text-sm font-medium text-gray-700 mb-1">Type de projet</label>
                    <select
                      id="projet"
                      name="projet"
                      value={formState.projet}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007BFF] focus:border-[#007BFF] outline-none transition-all"
                      required
                    >
                      <option value="">Sélectionnez votre projet</option>
                      <option value="panneaux">Panneaux photovoltaïques</option>
                      <option value="isolation">Isolation thermique</option>
                      <option value="pompe">Pompe à chaleur</option>
                      <option value="multiple">Plusieurs projets</option>
                    </select>
                  </motion.div>

                  <motion.div whileHover="focus" variants={inputVariants}>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Détails du projet</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007BFF] focus:border-[#007BFF] outline-none transition-all"
                      placeholder="Décrivez votre projet en quelques mots..."
                    ></textarea>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.01 }}>
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="consentement"
                        name="consentement"
                        checked={formState.consentement}
                        onChange={handleCheckboxChange}
                        className="mt-1 h-4 w-4 text-[#007BFF] border-gray-300 rounded focus:ring-[#007BFF]"
                        required
                      />
                      <label htmlFor="consentement" className="ml-2 text-sm text-gray-600">
                        J'accepte que mes informations soient traitées dans le but de me mettre en relation avec des professionnels. En soumettant ce formulaire, j'accepte la politique de confidentialité.
                      </label>
                    </div>
                  </motion.div>

                  <motion.button
                    type="submit"
                    className="w-full px-6 py-4 bg-gradient-to-r from-[#007BFF] to-[#40E0D0] text-white font-bold rounded-lg shadow-md"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Envoyer ma demande
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
