import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Location', href: '#location' },
    { name: 'Residences', href: '#residences' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Timeline', href: '#timeline' },
  ];

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0d1c2a] py-4"
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img 
            src="/Radevoliving-Logo.webp" 
            alt="Radevo Living" 
            className="h-6 transition-all duration-300"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-sm tracking-widest uppercase text-white hover:text-gold transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#register"
            className="px-6 py-2 border border-white text-white text-sm uppercase tracking-widest hover:bg-white hover:text-[#0d1c2a] transition-all duration-300 rounded-[200px]"
          >
            Enquire
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="text-white" />
          ) : (
            <Menu className="text-white" />
          )}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 w-full h-screen bg-[#0d1c2a] flex flex-col items-center justify-center space-y-8 md:hidden z-40"
            >
              {navLinks.map((link, index) => (
                <motion.a 
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-2xl font-serif text-white hover:text-gold transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.a
                href="#register"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 px-8 py-3 border-2 border-gold text-gold rounded-[200px] uppercase tracking-widest text-sm hover:bg-gold hover:text-[#0d1c2a] transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Enquire Now
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;