import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/Client File/Images/Copy of Image9.png" 
          alt="Luxury Architecture Render" 
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight mb-6">
            Two Luxury Residences <br /> in the Heart of Williamstown
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-2xl mx-auto mb-10"
        >
          <p className="text-lg md:text-xl font-light tracking-wide text-white/90 leading-relaxed">
            A rare boutique development designed for refined coastal living in one of Melbourne’s most prestigious waterfront suburbs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <div className="text-sm tracking-widest uppercase border-l-2 border-gold pl-4 text-left">
            <p className="font-semibold">189 Melbourne Road, Williamstown VIC</p>
            <p className="text-xs opacity-80 mt-1">Construction Commencing Feb 2026 | Completion Q2 2027</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a 
            href="#register"
            className="bg-[#0d1c2a] text-white px-8 py-4 rounded-[200px] uppercase tracking-widest text-sm hover:bg-gold transition-colors duration-300 min-w-[200px]"
          >
            Register Your Interest
          </a>
          <button 
            className="bg-transparent border border-white text-white px-8 py-4 rounded-[200px] uppercase tracking-widest text-sm hover:bg-white hover:text-dark transition-colors duration-300 min-w-[200px]"
          >
            Download Brochure
          </button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ArrowDown size={24} strokeWidth={1} />
      </motion.div>
    </section>
  );
};

export default Hero;