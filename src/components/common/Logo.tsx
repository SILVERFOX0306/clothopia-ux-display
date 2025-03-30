
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`font-display font-extrabold tracking-tight ${className}`}>
      <h1 className="text-2xl hypeshow-gradient">HYPESHOW</h1>
    </div>
  );
};

export default Logo;
