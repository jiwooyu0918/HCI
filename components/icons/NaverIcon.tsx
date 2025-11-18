
import React from 'react';

interface IconProps {
  className?: string;
}

export const NaverIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="black" />
    <path d="M8.5 7.5H11.5L9.5 12H12.5V16.5H9.5L11.5 12H8.5V7.5Z" fill="white" />
  </svg>
);
