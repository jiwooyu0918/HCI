
import React from 'react';

interface IconProps {
  className?: string;
}

export const FacebookIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="#1877F2" />
    <path d="M15.5 12H13.5V17H10.5V12H9V9.5H10.5V8C10.5 6.62 11.62 5.5 13 5.5H15V8H13.5C13.22 8 13 8.22 13 8.5V9.5H15L14.5 12H13.5V12H15.5Z" fill="white" stroke="white" strokeWidth="0.5" strokeLinejoin="round" />
  </svg>
);
