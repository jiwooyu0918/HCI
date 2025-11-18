import React from 'react';
import { SettingsIcon } from './icons/SettingsIcon';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-md mx-auto px-4 py-3 grid grid-cols-3 items-center">
        {/* Placeholder for alignment. Can be used for a back button in the future. */}
        <div className="w-6 h-6" />

        <h1 className="text-2xl font-bold text-gray-800 text-center">
          MY
        </h1>

        <button aria-label="설정" className="justify-self-end">
          <SettingsIcon className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </header>
  );
};

export default Header;
