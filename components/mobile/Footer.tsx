import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0d1c2a] text-white/60 py-12 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-sm font-light">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="text-white font-serif text-lg mb-2">189 Melbourne Road</p>
          <p>Williamstown, Victoria, Australia</p>
        </div>
        
        <div className="flex space-x-8 mb-4 md:mb-0">
          <a href="https://radevoliving.com.au/privacy-policy/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Privacy Policy</a>
          <a href="https://radevoliving.com.au/contact-us/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Contact</a>
        </div>

        <div className="text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Ravedo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;