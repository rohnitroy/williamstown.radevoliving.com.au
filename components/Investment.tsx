import React from 'react';
import { motion } from 'framer-motion';

const Investment: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold text-sm tracking-[0.2em] uppercase font-semibold mb-4 block">Opportunity</span>
          <h2 className="text-3xl md:text-5xl font-serif text-dark mb-10">A Rare Opportunity in a High-Value Market</h2>
          
          <div className="space-y-6 text-muted font-light text-lg leading-relaxed mb-12">
            <p>
              With limited premium new-build stock available in Williamstown and consistent demand for architecturally designed homes, this boutique development represents a rare acquisition opportunity.
            </p>
            <p>
              Whether for owner-occupation or strategic investment, these residences have been conceived with long-term value, structural integrity, and location strength at the forefront.
            </p>
            <p>
              Independent valuation assessments indicate strong market positioning within Williamstown's premium residential sector, reflecting the quality of design, location, and construction standards.
            </p>
            <p className="text-dark font-medium">
              With only two homes available, exclusivity is inherent.
            </p>
          </div>

          <a href="#register" className="inline-block border-b border-dark text-dark uppercase tracking-widest text-sm pb-1 hover:text-gold hover:border-gold transition-colors duration-300">
            Secure Your Interest
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Investment;