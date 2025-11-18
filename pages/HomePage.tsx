import React from 'react';
import BottomNavBar from '../components/BottomNavBar';
import { SearchIcon } from '../components/icons/SearchIcon';
import { NavItemKey } from '../App';
import { MenuIcon } from '../components/icons/MenuIcon';

export interface Idol {
  id: number;
  name: string;
  group: string;
  imageUrl: string;
}

interface HomePageProps {
  onNavigate: (page: NavItemKey) => void;
  onIdolSelect: (idol: Idol) => void;
}

// Mock data for idols
const idols: Idol[] = [
  { id: 1, name: 'RM', group: 'BTS', imageUrl: 'https://images.unsplash.com/photo-1548532928-b34e3862b5d3?q=80&w=400&h=600&auto=format&fit=crop' },
  { id: 2, name: '지수', group: '블랙핑크', imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&h=600&auto=format&fit=crop' },
  { id: 3, name: '차은우', group: '아스트로', imageUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=400&h=600&auto=format&fit=crop' },
  { id: 4, name: '아이유', group: '솔로', imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=600&auto=format&fit=crop' },
  { id: 5, name: '카리나', group: '에스파', imageUrl: 'https://images.unsplash.com/photo-1589156280159-276928395cbf?q=80&w=400&h=600&auto=format&fit=crop' },
  { id: 6, name: '강다니엘', group: '솔로', imageUrl: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=400&h=600&auto=format&fit=crop' },
];


const HomePage: React.FC<HomePageProps> = ({ onNavigate, onIdolSelect }) => {
  return (
    <div className="h-screen flex flex-col max-w-md mx-auto bg-gray-50">
      {/* Header */}
      <header className="bg-white sticky top-0 z-10 px-4 py-3 border-b">
        <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">랭킹</h1>
            <button aria-label="메뉴">
                <MenuIcon className="w-6 h-6 text-gray-600" />
            </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4 overflow-y-auto">
        {/* Search Bar */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="어떤 아이돌을 찾으시나요?"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition-colors"
            aria-label="아이돌 검색"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="w-5 h-5 text-gray-400" />
          </div>
        </div>
        
        {/* Idol List */}
        <div className="flex flex-col space-y-4">
            {idols.map(idol => (
                <div 
                  key={idol.id} 
                  className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
                  onClick={() => onIdolSelect(idol)}
                >
                    <img src={idol.imageUrl} alt={`${idol.group} - ${idol.name}`} className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                        <h3 className="text-white text-xl font-bold">{idol.name}</h3>
                        <p className="text-gray-200 text-md">{idol.group}</p>
                    </div>
                </div>
            ))}
        </div>
      </main>
      
      <BottomNavBar activeItem="home" onNavigate={onNavigate} />
    </div>
  );
};

export default HomePage;