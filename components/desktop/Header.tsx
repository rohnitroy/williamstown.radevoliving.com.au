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
        <a href="https://radevoliving.com.au/" target="_blank" rel="noopener noreferrer" className="flex items-center">
          <img 
            src="/Radevoliving-Logo.webp" 
            alt="Radevo Living" 
            className="h-8 transition-all duration-300"
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
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full bg-white h-screen flex flex-col items-center justify-center space-y-8 md:hidden shadow-xl"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-xl font-serif text-dark hover:text-gold transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;