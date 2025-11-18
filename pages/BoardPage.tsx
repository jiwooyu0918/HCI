import React from 'react';
import BottomNavBar from '../components/BottomNavBar';
import { SearchIcon } from '../components/icons/SearchIcon';
import { NavItemKey } from '../App';

interface BoardPageProps {
  onNavigate: (page: NavItemKey) => void;
}

const BoardPage: React.FC<BoardPageProps> = ({ onNavigate }) => {
  return (
    <div className="h-screen flex flex-col max-w-md mx-auto bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-md mx-auto px-4 py-3">
          <h1 className="text-2xl font-bold text-gray-800 text-center">
            보드
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-gray-100 p-4 overflow-y-auto">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="검색어를 입력하세요..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition-colors"
            aria-label="검색어 입력"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="w-5 h-5 text-gray-400" />
          </div>
        </div>
        
        {/* Placeholder for search results */}
        <div className="mt-6 text-center text-gray-500">
            <p>검색 결과가 여기에 표시됩니다.</p>
        </div>
      </main>
      
      <BottomNavBar activeItem="board" onNavigate={onNavigate} />
    </div>
  );
};

export default BoardPage;