import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className={`${sizeClasses[size]} ${className} rounded-full bg-gradient-to-br from-lazarini-green to-lazarini-teal flex items-center justify-center shadow-lg`}>
      <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        className="w-2/3 h-2/3 text-white"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Cruz médica */}
        <path 
          d="M19 8h-2V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z" 
          fill="currentColor" 
          fillOpacity="0.3"
        />
        <path 
          d="M15 13h-2v2h-2v-2H9v-2h2V9h2v2h2v2z" 
          fill="currentColor"
        />
        {/* Círculo decorativo */}
        <circle 
          cx="12" 
          cy="6" 
          r="1" 
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default Logo;
