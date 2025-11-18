import React from 'react';

interface IconProps {
  className?: string;
}

export const WandIcon: React.FC<IconProps> = ({ className }) => (
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
    <path d="M15 4V2m0 18v-2m-7.5-13.5L6 6m12 12l-1.5-1.5M2 15h2m16 0h2M6.34 17.66 5 19m14-14-1.34-1.34M12 4v2m0 12v2m0-8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
  </svg>
);
