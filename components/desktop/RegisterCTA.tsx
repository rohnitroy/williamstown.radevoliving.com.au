import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const RegisterCTA: React.FC = () => {
  const benefits = [
    'Receive exclusive updates',
    'Access floorplans and pricing first',
    'Be notified before public release',
    'Arrange a private consultation'
  ];

  useEffect(() => {
    // Load Paperform script
    const script = document.createElement('script');
    script.src = 'https://paperform.co/__embed.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="register" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif text-dark mb-6">
              Be Among the First to Secure One
            </h2>
            <p className="text-muted font-light text-lg mb-12">
              With only two residences available, early registration is essential.
            </p>

            <div className="bg-primary p-8 md:p-12 rounded-[20px] mb-10">
              <p className="text-dark font-medium text-lg mb-8">Register your interest to:</p>
              <ul className="space-y-4 text-left max-w-md mx-auto">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center text-dark font-light text-lg"
                  >
                    <div className="w-6 h-6 rounded-full bg-gold flex items-center justify-center mr-4 flex-shrink-0">
                      <Check size={16} className="text-[#0d1c2a]" />
                    </div>
                    {benefit}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Paperform Embed */}
            <div className="w-full paperform-wrapper">
              <div data-paperform-id="redevoliving-williamstown"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RegisterCTA;
