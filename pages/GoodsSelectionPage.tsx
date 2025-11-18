import React from 'react';
import { Idol } from './HomePage';
import { ArrowLeftIcon } from '../components/icons/ArrowLeftIcon';
import { DollIcon } from '../components/icons/DollIcon';
import { LightstickIcon } from '../components/icons/LightstickIcon';

interface GoodsSelectionPageProps {
  idol: Idol;
  onGoBack: () => void;
}

const GoodsSelectionPage: React.FC<GoodsSelectionPageProps> = ({ idol, onGoBack }) => {
  return (
    <div className="h-screen flex flex-col max-w-md mx-auto bg-white">
      {/* Header */}
      <header className="bg-white sticky top-0 z-10 border-b">
        <div className="px-4 py-3 flex items-center">
          <button onClick={onGoBack} aria-label="뒤로가기">
            <ArrowLeftIcon className="w-6 h-6 text-gray-600" />
          </button>
          <h1 className="text-xl font-bold text-gray-800 text-center flex-grow">
            굿즈 종류 선택
          </h1>
          <div className="w-6 h-6" /> {/* Placeholder for alignment */}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-gray-50 p-6 flex flex-col items-center">
        {/* Selected Idol Info */}
        <div className="flex flex-col items-center mb-8">
            <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-white mb-4">
                <img src={idol.imageUrl} alt={idol.name} className="w-full h-full object-cover" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">{idol.name}</h2>
            <p className="text-md text-gray-500">{idol.group}</p>
        </div>

        {/* Goods Options */}
        <div className="w-full space-y-4">
            {/* Doll Option */}
            <button className="w-full flex items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-pink-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mr-6">
                    <DollIcon className="w-8 h-8 text-pink-500" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-gray-800 text-left">인형 만들기</h3>
                    <p className="text-sm text-gray-500 text-left">나만의 아이돌 인형을 만들어보세요.</p>
                </div>
            </button>

            {/* Lightstick Option */}
            <button className="w-full flex items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-cyan-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mr-6">
                    <LightstickIcon className="w-8 h-8 text-cyan-500" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-gray-800 text-left">응원봉 만들기</h3>
                    <p className="text-sm text-gray-500 text-left">커스텀 응원봉으로 아이돌을 응원해요.</p>
                </div>
            </button>
        </div>
      </main>
    </div>
  );
};

export default GoodsSelectionPage;