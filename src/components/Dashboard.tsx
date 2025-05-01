import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { stats, recentLeads, leadsByMonth } from '../data/mockData';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('aperçu');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
      y: -5,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3
      }
    }
  };

  const tabVariants = {
    inactive: { color: "#6B7280", borderColor: "transparent" },
    active: { 
      color: "#007BFF", 
      borderColor: "#007BFF",
      transition: { duration: 0.3 }
    }
  };

  // Fonction pour générer les données du graphique
  const generateChartData = () => {
    const maxValue = Math.max(...leadsByMonth.map(item => item.value));
    return leadsByMonth.map(item => ({
      ...item,
      height: (item.value / maxValue) * 100
    }));
  };

  const chartData = generateChartData();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.span 
            className="text-[#007BFF] font-semibold text-lg"
            variants={itemVariants}
          >
            Tableau de bord
          </motion.span>
          <motion.h2 
            className="text-4xl font-bold mt-2 mb-4 text-gray-900"
            variants={itemVariants}
          >
            Pilotez votre activité
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-gray-600"
            variants={itemVariants}
          >
            Suivez en temps réel vos performances et l'activité de votre plateforme de génération de leads en transition énergétique.
          </motion.p>
        </motion.div>

        {/* Onglets de navigation */}
        <motion.div 
          className="flex flex-wrap justify-center mb-8 border-b border-gray-200"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {['aperçu', 'leads', 'partenaires', 'performances'].map((tab) => (
            <motion.button
              key={tab}
              className={`px-6 py-3 font-medium text-base capitalize border-b-2 ${activeTab === tab ? 'border-[#007BFF] text-[#007BFF]' : 'border-transparent text-gray-500'}`}
              onClick={() => setActiveTab(tab)}
              variants={tabVariants}
              initial="inactive"
              animate={activeTab === tab ? "active" : "inactive"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>

        {/* Statistiques */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="bg-white rounded-xl p-6 shadow-sm"
              variants={cardVariants}
              whileHover="hover"
              custom={index}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-full bg-[#007BFF]/10 flex items-center justify-center text-[#007BFF]`}>
                  {stat.icon === 'leads' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )}
                  {stat.icon === 'installation' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  )}
                  {stat.icon === 'partners' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )}
                  {stat.icon === 'savings' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
                {stat.percentage && (
                  <div className="flex items-center text-sm font-medium text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    +{stat.percentage}%
                  </div>
                )}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-500">{stat.label}</p>
              
              <motion.div 
                className="w-full h-1 bg-gray-100 mt-4 rounded-full overflow-hidden"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="h-full bg-gradient-to-r from-[#007BFF] to-[#40E0D0]"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${stat.percentage || 50}%` }}
                  transition={{ duration: 1, delay: 0.4 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Graphique et Leads récents */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Graphique */}
          <motion.div 
            className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Évolution des leads</h3>
              <div className="flex space-x-2">
                <motion.button 
                  className="px-3 py-1 text-sm font-medium text-[#007BFF] bg-[#007BFF]/10 rounded-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Mensuel
                </motion.button>
                <motion.button 
                  className="px-3 py-1 text-sm font-medium text-gray-500 hover:bg-gray-100 rounded-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Annuel
                </motion.button>
              </div>
            </div>
            
            <div className="h-64 flex items-end space-x-2">
              {chartData.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex-1 flex flex-col items-center"
                  initial={{ height: 0, opacity: 0 }}
                  whileInView={{ height: "auto", opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="w-full bg-gradient-to-t from-[#007BFF] to-[#40E0D0] rounded-t-md relative group"
                    style={{ height: `${item.height}%` }}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${item.height}%` }}
                    transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      backgroundColor: "#40E0D0",
                      boxShadow: "0px 0px 10px rgba(0, 123, 255, 0.5)"
                    }}
                  >
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {item.value} leads
                    </div>
                  </motion.div>
                  <div className="text-xs text-gray-500 mt-2">{item.month}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Leads récents */}
          <motion.div 
            className="bg-white rounded-xl p-6 shadow-sm"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Leads récents</h3>
              <motion.button 
                className="text-sm font-medium text-[#007BFF]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Voir tout
              </motion.button>
            </div>
            
            <div className="space-y-4">
              {recentLeads.slice(0, 4).map((lead, index) => (
                <motion.div 
                  key={lead.id}
                  className="border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-900">{lead.type}</h4>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {lead.location}
                      </div>
                    </div>
                    <div>
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                        lead.status === 'Nouveau' ? 'bg-blue-100 text-blue-700' :
                        lead.status === 'Contacté' ? 'bg-yellow-100 text-yellow-700' :
                        lead.status === 'Qualifié' ? 'bg-purple-100 text-purple-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {lead.status}
                      </span>
                      <div className="text-right text-sm font-medium text-gray-900 mt-2">
                        {lead.potentialValue}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.button
              className="w-full mt-6 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-gray-600 font-medium text-sm transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Charger plus de leads
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
