import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Accueil", link: "#accueil" },
    { name: "Services", link: "#services" },
    { name: "Comment ça marche", link: "#process" },
    { name: "Témoignages", link: "#testimonials" },
    { name: "Contact", link: "#contact" }
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      }
    }
  };

  const navLinkVariants = {
    hover: {
      scale: 1.05,
      color: "#40E0D0",
      transition: { duration: 0.3 }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05, 
      backgroundColor: "#00BFFF",
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  const mobileMenuVariants = {
    closed: { 
      opacity: 0,
      height: 0,
      transition: { 
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    open: { 
      opacity: 1,
      height: "auto",
      transition: { 
        duration: 0.5,
        ease: "easeInOut" 
      }
    }
  };

  return (
    <motion.header 
      className={`fixed w-full z-50 px-6 py-4 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className="w-10 h-10 rounded-full bg-gradient-to-r from-[#007BFF] to-[#40E0D0] flex items-center justify-center"
              animate={{ 
                rotate: [0, 10, 0, -10, 0],
                scale: [1, 1.05, 1, 1.05, 1]
              }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </motion.div>
            <div>
              <h1 className={`font-bold text-xl ${scrolled ? 'text-[#007BFF]' : 'text-white'} transition-colors duration-300`}>ÉnergieLeads</h1>
              <motion.span 
                className={`text-xs ${scrolled ? 'text-gray-600' : 'text-gray-200'} transition-colors duration-300`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Solutions durables
              </motion.span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                className={`font-medium ${scrolled ? 'text-gray-700' : 'text-white'} hover:text-[#40E0D0] transition-colors duration-300`}
                variants={navLinkVariants}
                whileHover="hover"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              className="px-5 py-2 rounded-full bg-gradient-to-r from-[#007BFF] to-[#40E0D0] text-white font-semibold shadow-md"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              Devenir partenaire
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`outline-none ${scrolled ? 'text-gray-700' : 'text-white'} transition-colors duration-300`}
              whileTap={{ scale: 0.9 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden overflow-hidden"
          initial="closed"
          animate={mobileMenuOpen ? "open" : "closed"}
          variants={mobileMenuVariants}
        >
          <div className={`mt-4 py-4 rounded-lg ${scrolled ? 'bg-white' : 'bg-gray-900 bg-opacity-90'} backdrop-blur-sm transition-colors duration-300`}>
            <div className="flex flex-col space-y-4 px-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  className={`font-medium py-2 ${scrolled ? 'text-gray-700' : 'text-white'} hover:text-[#40E0D0] transition-colors duration-300`}
                  whileHover={{ x: 5, color: "#40E0D0" }}
                  onClick={() => setMobileMenuOpen(false)}
                  custom={index}
                  variants={{
                    open: {
                      opacity: 1,
                      x: 0,
                      transition: { delay: 0.1 * index }
                    },
                    closed: {
                      opacity: 0,
                      x: -20,
                      transition: { delay: 0.05 * index }
                    }
                  }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.button
                className="px-5 py-3 rounded-full bg-gradient-to-r from-[#007BFF] to-[#40E0D0] text-white font-semibold shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={{
                  open: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.5 }
                  },
                  closed: {
                    opacity: 0,
                    y: 20,
                    transition: { delay: 0 }
                  }
                }}
              >
                Devenir partenaire
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
