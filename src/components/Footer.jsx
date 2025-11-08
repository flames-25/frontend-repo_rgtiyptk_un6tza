import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#FFF9F8] border-t border-[#E8B7B7]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[#7f7473] text-sm">© 2025 Natasha Art</p>
        <nav className="text-sm text-[#7f7473] flex flex-wrap gap-4">
          <a href="#home" className="hover:text-[#A39897]">Home</a>
          <a href="#gallery" className="hover:text-[#A39897]">Gallery</a>
          <a href="#about" className="hover:text-[#A39897]">About</a>
          <a href="#commissions" className="hover:text-[#A39897]">Commissions</a>
          <a href="#contact" className="hover:text-[#A39897]">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
