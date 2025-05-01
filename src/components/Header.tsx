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
      className={`fixed w-full z-50 px-6 py-4 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}
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
              className="w-8 h-8 rounded-full bg-gradient-to-r from-[#007BFF] to-[#40E0D0] flex items-center justify-center"
              animate={{ rotate: [0, 10, 0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </motion.div>
            <h1 className={`font-bold text-xl ${scrolled ? 'text-[#007BFF]' : 'text-white'}`}>ÉnergieLeads</h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                className={`font-medium ${scrolled ? 'text-gray-700' : 'text-white'} hover:text-[#40E0D0]`}
                variants={navLinkVariants}
                whileHover="hover"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              className="px-5 py-2 rounded-full bg-gradient-to-r from-[#007BFF] to-[#40E0D0] text-white font-semibold"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Devenir partenaire
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`outline-none ${scrolled ? 'text-gray-700' : 'text-white'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden overflow-hidden"
          initial="closed"
          animate={mobileMenuOpen ? "open" : "closed"}
          variants={mobileMenuVariants}
        >
          <div className={`mt-4 py-4 rounded-lg ${scrolled ? 'bg-white' : 'bg-gray-900 bg-opacity-90'}`}>
            <div className="flex flex-col space-y-4 px-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  className={`font-medium py-2 ${scrolled ? 'text-gray-700' : 'text-white'} hover:text-[#40E0D0]`}
                  whileHover={{ x: 5, color: "#40E0D0" }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.button
                className="px-5 py-3 rounded-full bg-gradient-to-r from-[#007BFF] to-[#40E0D0] text-white font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
