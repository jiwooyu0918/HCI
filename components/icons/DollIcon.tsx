import React from 'react';

interface IconProps {
  className?: string;
}

export const DollIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    className={className}
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <circle cx="12" cy="6" r="3" />
    <path d="M12 9v4" />
    <path d="M10 13h4" />
    <path d="M12 17v4" />
    <path d="M9 21h6" />
    <path d="M9 11l-3 2" />
    <path d="M15 11l3 2" />
  </svg>
);