import React from 'react';
import { HomeIcon } from './icons/HomeIcon';
import { WandIcon } from './icons/WandIcon';
import { GridIcon } from './icons/GridIcon';
import { UserIcon } from './icons/UserIcon';
import { NavItemKey } from '../App';

interface BottomNavBarProps {
  activeItem: NavItemKey;
  onNavigate: (page: NavItemKey) => void;
}

const BottomNavBar: React.FC<BottomNavBarProps> = ({ activeItem, onNavigate }) => {
  const navItems = [
    { key: 'home', name: '홈', icon: <HomeIcon className="w-6 h-6" /> },
    { key: 'myDesign', name: '내 디자인', icon: <WandIcon className="w-6 h-6" /> },
    { key: 'board', name: '보드', icon: <GridIcon className="w-6 h-6" /> },
    { key: 'myPage', name: '내 정보', icon: <UserIcon className="w-6 h-6" /> },
  ] as const;

  return (
    <nav className="bg-white shadow-t sticky bottom-0 z-10">
      <div className="max-w-md mx-auto px-2 pt-2 pb-1 flex justify-around">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => onNavigate(item.key)}
            className={`flex flex-col items-center w-1/4 ${
              activeItem === item.key ? 'text-pink-500' : 'text-gray-500'
            } hover:text-pink-500 transition-colors`}
            aria-label={item.name}
            aria-current={activeItem === item.key ? 'page' : undefined}
          >
            {item.icon}
            <span className="text-xs mt-1">{item.name}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavBar;
