import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize, ChefHat, BedDouble, Bath, Car, Trees, ShieldCheck, Zap, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ResidenceFeature } from '../types';

const Residences: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const images = [
    "/Client File/Images/Copy of Image10.png",
    "/Client File/Images/Copy of Image11.png",
    "/Client File/Images/Copy of Image15.png",
    "/Client File/Images/Copy of Image16.png",
    "/Client File/Images/Copy of Image17.png",
    "/Client File/Images/Copy of Image18.png",
    "/Client File/Images/Copy of Image19.png",
    "/Client File/Images/Copy of Image20.png",
    "/Client File/Images/Copy of Image21.png",
    "/Client File/Images/Copy of Image24.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const nextImage = () => {
    setLightboxIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setLightboxIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const features: ResidenceFeature[] = [
    { icon: <Maximize size={24} />, text: 'Expansive open-plan living and dining zones' },
    { icon: <ChefHat size={24} />, text: 'Premium kitchen with high-end appliances' },
    { icon: <BedDouble size={24} />, text: 'Generous bedrooms with built-in robes' },
    { icon: <Bath size={24} />, text: 'Designer bathrooms with premium finishes' },
    { icon: <Car size={24} />, text: 'Secure garage accommodation' },
    { icon: <Trees size={24} />, text: 'Landscaped outdoor entertaining spaces' },
    { icon: <ShieldCheck size={24} />, text: 'Carefully engineered structural framework' },
    { icon: <Zap size={24} />, text: 'Energy-efficient design aligned with regulations' },
  ];

  return (
    <section id="residences" className="py-24 md:py-32 bg-primary">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-gold text-sm tracking-[0.2em] uppercase font-semibold mb-4 block">Interiors</span>
          <h2 className="text-4xl md:text-5xl font-serif text-dark">Designed for Modern Luxury Living</h2>
        </motion.div>

        {/* Image Slider */}
        <div className="mb-20">
          <div className="relative overflow-hidden rounded-[20px] h-[500px] bg-gray-100 cursor-pointer" onClick={() => openLightbox(currentIndex)}>
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`Interior ${currentIndex + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </AnimatePresence>
            
            {/* Slider indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-gold w-8' : 'bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {isLightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
              onClick={closeLightbox}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 text-white hover:text-gold transition-colors z-[101]"
                aria-label="Close"
              >
                <X size={32} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-6 text-white hover:text-gold transition-colors z-[101]"
                aria-label="Previous"
              >
                <ChevronLeft size={48} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-6 text-white hover:text-gold transition-colors z-[101]"
                aria-label="Next"
              >
                <ChevronRight size={48} />
              </button>

              <motion.img
                key={lightboxIndex}
                src={images[lightboxIndex]}
                alt={`Interior ${lightboxIndex + 1}`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="max-w-[90vw] max-h-[90vh] object-contain"
                onClick={(e) => e.stopPropagation()}
                loading="lazy"
              />

              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-sm">
                {lightboxIndex + 1} / {images.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 bg-white rounded-[20px] shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-gold mb-4 p-3 bg-primary rounded-full">
                {feature.icon}
              </div>
              <p className="text-dark font-light leading-relaxed">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Residences;