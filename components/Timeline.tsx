import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle } from 'lucide-react';
import { TimelineItem } from '../types';

const Timeline: React.FC = () => {
  const timeline: TimelineItem[] = [
    { id: 1, status: 'completed', title: 'Plans & Permits Approved', date: 'Completed' },
    { id: 2, status: 'completed', title: 'Structural Engineering', date: 'Completed' },
    { id: 3, status: 'upcoming', title: 'Demolition', date: 'February 2026' },
    { id: 4, status: 'upcoming', title: 'Construction Commencement', date: 'Q1 2026' },
    { id: 5, status: 'upcoming', title: 'Estimated Completion', date: 'Q1–Q2 2027' },
  ];

  return (
    <section id="timeline" className="py-24 bg-primary border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-gold text-sm tracking-[0.2em] uppercase font-semibold mb-4 block">Schedule</span>
          <h2 className="text-3xl md:text-4xl font-serif text-dark">Project Timeline</h2>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:flex justify-between items-start relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute top-4 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>
          
          {timeline.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col items-center text-center w-48 group"
            >
              <div className={`bg-primary px-2 mb-4 ${item.status === 'completed' ? 'text-gold' : 'text-dark'}`}>
                {item.status === 'completed' ? (
                  <CheckCircle2 className="w-8 h-8 fill-primary" />
                ) : (
                  <Circle className="w-8 h-8 fill-primary text-gray-300 group-hover:text-gold transition-colors" />
                )}
              </div>
              <h4 className="font-serif font-medium text-dark text-lg mb-2">{item.title}</h4>
              <p className="text-sm text-muted uppercase tracking-wide">{item.date}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="md:hidden space-y-8 relative pl-8 border-l border-gray-200 ml-4">
          {timeline.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative"
            >
              <div className={`absolute -left-[41px] top-0 bg-primary p-1 ${item.status === 'completed' ? 'text-gold' : 'text-gray-300'}`}>
                {item.status === 'completed' ? <CheckCircle2 size={24} /> : <Circle size={24} />}
              </div>
              <h4 className="font-serif font-medium text-dark text-lg">{item.title}</h4>
              <p className="text-sm text-muted uppercase tracking-wide mt-1">{item.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;