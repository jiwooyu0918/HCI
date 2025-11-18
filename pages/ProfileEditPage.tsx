import React, { useState } from 'react';
import { ArrowLeftIcon } from '../components/icons/ArrowLeftIcon';
import { CameraIcon } from '../components/icons/CameraIcon';

interface ProfileEditPageProps {
  onGoBack: () => void;
}

const ProfileEditPage: React.FC<ProfileEditPageProps> = ({ onGoBack }) => {
  const [nickname, setNickname] = useState('AILight_User');
  const [favoriteIdol, setFavoriteIdol] = useState('');
  const [email, setEmail] = useState('ailight@example.com');
  const [address, setAddress] = useState('');


  return (
    <div className="h-screen flex flex-col max-w-md mx-auto bg-white">
      {/* Header */}
      <header className="bg-white sticky top-0 z-10 border-b">
        <div className="px-4 py-3 flex items-center">
          <button onClick={onGoBack} aria-label="뒤로가기">
            <ArrowLeftIcon className="w-6 h-6 text-gray-600" />
          </button>
          <h1 className="text-xl font-bold text-gray-800 text-center flex-grow">
            프로필 편집
          </h1>
          <div className="w-6 h-6" /> {/* Placeholder for alignment */}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-gray-50 p-6 overflow-y-auto">
        <div className="flex flex-col items-center mt-8">
          <div className="relative w-28 h-28">
            <div className="w-full h-full rounded-full bg-pink-200 flex items-center justify-center overflow-hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <button className="absolute bottom-0 right-0 bg-gray-700 text-white p-2 rounded-full border-2 border-white" aria-label="프로필 사진 변경">
              <CameraIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="mt-10 space-y-6">
            <div>
                <label htmlFor="nickname" className="block text-sm font-medium text-gray-700 mb-1">닉네임</label>
                <input
                type="text"
                id="nickname"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition-colors"
                />
            </div>
            <div>
                <label htmlFor="favoriteIdol" className="block text-sm font-medium text-gray-700 mb-1">선호 아이돌</label>
                <input
                type="text"
                id="favoriteIdol"
                placeholder="최애 아이돌을 알려주세요"
                value={favoriteIdol}
                onChange={(e) => setFavoriteIdol(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition-colors"
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">이메일</label>
                <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition-colors"
                />
            </div>
            <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">주소</label>
                <input
                type="text"
                id="address"
                placeholder="주소를 입력해주세요"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition-colors"
                />
            </div>
        </div>
      </main>

      {/* Fixed Save Button */}
      <div className="p-4 bg-white border-t">
        <button className="w-full bg-pink-400 text-white font-semibold py-3 rounded-lg hover:bg-pink-500 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2">
            저장하기
        </button>
      </div>

    </div>
  );
};

export default ProfileEditPage;