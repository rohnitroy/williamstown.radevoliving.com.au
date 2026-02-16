import React from 'react';
import { motion } from 'framer-motion';

const Architecture: React.FC = () => {
  return (
    <section id="architecture" className="py-24 md:py-32 bg-[#0d1c2a] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">
            Engineered for Strength. <br/>Designed for Elegance.
          </h2>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-32 h-[2px] bg-gold mx-auto mb-12"
          ></motion.div>

          <div className="space-y-8 text-white/80 font-light text-lg leading-relaxed">
            <p>
              This development has been fully planned and approved, with structural engineering completed and all relevant permits secured.
            </p>
            <p>
              The residences are designed in accordance with the latest Victorian building regulations, energy efficiency standards, and structural engineering requirements — ensuring durability, compliance, and long-term performance.
            </p>
            <p>
              From foundations through to framing and finishing details, every stage of construction will be delivered with rigorous quality control and attention to detail.
            </p>
          </div>
        </motion.div>

        {/* Residence Floorplans */}
        <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
          {[1, 2].map((num) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/3] bg-white/5 border border-gold/30 flex flex-col items-center justify-center p-8 text-center group cursor-pointer rounded-[20px] hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-16 h-16 border border-gold rounded-full flex items-center justify-center mb-4 group-hover:bg-gold group-hover:text-[#0d1c2a] transition-colors duration-300">
                <span className="font-serif text-xl italic">{num}</span>
              </div>
              <h3 className="font-serif text-2xl text-white mb-2">Residence {num}</h3>
              <p className="text-white/60 font-light mb-6">4 Bed | 3 Bath | 2 Car</p>
              <span className="text-sm uppercase tracking-widest border-b border-gold pb-1 text-gold">View Floorplan</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Architecture;