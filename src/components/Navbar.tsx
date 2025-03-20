
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img 
              src="/lovable-uploads/2ee75ed5-bc8c-4432-9065-2bb83454db6f.png" 
              alt="TitleMine Logo"
              className="h-10 md:h-12"
            />
          </a>
        </div>
        
        <div className="hidden md:flex items-center space-x-2">
          <a href="#features" className="nav-link">Features</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#about" className="nav-link">About Us</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
        
        <div className="flex items-center space-x-4">
          <a 
            href="#login" 
            className="text-sm font-medium text-mineral-dark hover:text-mineral-brown transition-colors duration-300"
          >
            Login
          </a>
          <a 
            href="#signup" 
            className="bg-mineral-brown text-white px-4 py-2 rounded-md text-sm font-medium shadow-button transform transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
