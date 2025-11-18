
import React from 'react';

export const AILightLogo: React.FC = () => {
  return (
    <span className="relative">
      <span className="relative z-10 font-bold">
        <span className="text-pink-400">AI</span>
        <span className="text-gray-800">Light</span>
      </span>
      <span 
        className="absolute bottom-0.5 left-2.5 w-1.5 h-1.5 bg-cyan-300 rounded-full"
        style={{ filter: 'blur(1px)' }}
      ></span>
    </span>
  );
};
