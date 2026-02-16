import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Google Map */}
          <div className="relative overflow-hidden rounded-[20px] h-[500px] bg-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.8947891234567!2d144.89876!3d-37.86234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad668d5e5e5e5e5%3A0x5045675044616446!2s189%20Melbourne%20Rd%2C%20Williamstown%20VIC%203016%2C%20Australia!5e0!3m2!1sen!2sau!4v1234567890123!5m2!1sen!2sau"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="189 Melbourne Road, Williamstown VIC"
            ></iframe>
          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-semibold mb-4 block">Location</span>
            <h2 className="text-4xl md:text-5xl font-serif text-dark mb-8">Williamstown. <br/>Prestige by the Bay.</h2>
            
            <ul className="space-y-4 mb-8">
              {[
                'Williamstown Beach',
                'Nelson Place cafés and restaurants',
                'Williamstown Train Station',
                'Local schools and parklands',
                'Hobsons Bay coastal walking trails'
              ].map((item, i) => (
                <li key={i} className="flex items-center text-muted font-light text-lg">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mr-4"></span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="p-6 bg-primary border-l-2 border-gold rounded-[20px]">
              <p className="text-dark font-medium italic font-serif text-lg">
                "Enjoy seaside tranquillity while remaining within easy reach of Melbourne’s CBD."
              </p>
            </div>
            
            <div className="mt-8 flex items-center text-dark font-medium">
              <MapPin size={20} className="mr-2 text-gold" />
              <span>189 Melbourne Road, Williamstown VIC</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Location;