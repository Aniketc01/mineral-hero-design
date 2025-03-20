
import React from 'react';
import { cn } from '@/lib/utils';

interface CTAButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

const CTAButton = ({ text, className, onClick }: CTAButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative group overflow-hidden bg-mineral-brown text-white font-medium py-3 px-8 rounded-md shadow-button transform transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg",
        className
      )}
    >
      <span className="relative z-10">{text}</span>
      <span className="absolute inset-0 bg-mineral-brown opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
      <span className="absolute inset-0 bg-gradient-to-r from-mineral-brown to-mineral-brown/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
    </button>
  );
};

export default CTAButton;
