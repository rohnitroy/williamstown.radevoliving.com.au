import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FormData } from '../types';

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    type: 'Live',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', type: 'Live', message: '' });
    }, 1500);
  };

  return (
    <section id="register" className="py-24 md:py-32 bg-white relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto bg-primary p-8 md:p-16 shadow-2xl rounded-[20px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-dark mb-4">Be Among the First to Secure One</h2>
            <p className="text-muted font-light">With only two residences available, early registration is strongly encouraged.</p>
          </motion.div>

          {status === 'success' ? (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="text-center py-12"
            >
              <h3 className="text-2xl font-serif text-gold mb-4">Thank You</h3>
              <p className="text-dark">Your interest has been registered. We will be in touch shortly.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-6 text-sm text-muted underline hover:text-dark"
              >
                Register another interest
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 p-4 focus:outline-none focus:border-gold transition-colors rounded-[20px]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 p-4 focus:outline-none focus:border-gold transition-colors rounded-[20px]"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 p-4 focus:outline-none focus:border-gold transition-colors rounded-[20px]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted mb-2">Interest Type</label>
                  <div className="relative">
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 p-4 focus:outline-none focus:border-gold transition-colors rounded-[20px] appearance-none"
                    >
                      <option value="Live">Live In</option>
                      <option value="Invest">Investment</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-muted">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-muted mb-2">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-200 p-4 focus:outline-none focus:border-gold transition-colors rounded-[20px]"
                ></textarea>
              </div>

              <div className="text-center pt-6">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="bg-[#0d1c2a] text-white px-12 py-4 uppercase tracking-widest text-sm hover:bg-gold transition-all duration-300 w-full md:w-auto rounded-[200px] disabled:opacity-50"
                >
                  {status === 'submitting' ? 'Processing...' : 'Register Interest'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;