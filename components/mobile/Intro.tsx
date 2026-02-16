import React from 'react';
import { motion } from 'framer-motion';

const Intro: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-primary">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.2em] uppercase font-semibold mb-4 block">The Vision</span>
          <h2 className="text-3xl md:text-5xl font-serif text-dark mb-6">An Exclusive Dual-Townhouse Development</h2>
          <div className="w-24 h-[1px] bg-dark/20 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-muted leading-relaxed font-light text-lg max-w-4xl mx-auto"
        >
          <p className="mb-6">
            Set within a premium pocket of Williamstown, this boutique development comprises just two architecturally designed luxury townhouses.
          </p>
          <p className="mb-6">
            With demolition scheduled for February 2026 and construction to follow immediately, these residences have been thoughtfully designed to blend contemporary architectural expression with timeless coastal character.
          </p>
          <p>
            Every detail has been considered — from spatial flow and natural light to high-end finishes and structural engineering integrity — delivering homes that combine sophistication, lifestyle functionality, and enduring value.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;