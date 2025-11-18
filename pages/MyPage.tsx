import React from 'react';
import Header from '../components/Header';
import BottomNavBar from '../components/BottomNavBar';
import { PlusIcon } from '../components/icons/PlusIcon';
import { NavItemKey } from '../App';

interface MyPageProps {
  onGoToProfileEdit: () => void;
  onNavigate: (page: NavItemKey) => void;
}

const MyPage: React.FC<MyPageProps> = ({ onGoToProfileEdit, onNavigate }) => {
  // Mock data for user's goods
  const myGoods = [
    { id: 1, imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=300&h=300&auto=format&fit=crop' },
    { id: 2, imageUrl: 'https://images.unsplash.com/photo-1557839238-028c5a4b415a?q=80&w=300&h=300&auto=format&fit=crop' },
    { id: 3, imageUrl: 'https://images.unsplash.com/photo-1543353071-849a49448536?q=80&w=300&h=300&auto=format&fit=crop' },
    { id: 4, imageUrl: 'https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=300&h=300&auto=format&fit=crop' },
    { id: 5, imageUrl: 'https://images.unsplash.com/photo-1525909002-15059b202149?q=80&w=300&h=300&auto=format&fit=crop' },
  ];

  const reorderItems = [
    { id: 1, name: '커스텀 머그컵', imageUrl: 'https://images.unsplash.com/photo-1588099768531-a72d4a198538?q=80&w=300&h=300&auto=format&fit=crop' },
    { id: 2, name: '그래픽 티셔츠', imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=300&h=300&auto=format&fit=crop' },
    { id: 3, name: 'AI 아트 폰케이스', imageUrl: 'https://images.unsplash.com/photo-1593511933595-5c1a3521255e?q=80&w=300&h=300&auto=format&fit=crop' },
    { id: 4, name: '여행 사진 캔버스', imageUrl: 'https://images.unsplash.com/photo-1543353071-849a49448536?q=80&w=300&h=300&auto=format&fit=crop' },
  ];

  const orderHistory = [
      { id: '20231026-001', name: 'AI 생성 커스텀 폰케이스', date: '2023.10.26', status: '배송완료' },
      { id: '20231015-003', name: '반려동물 사진 머그컵', date: '2023.10.15', status: '배송완료' },
      { id: '20230928-002', name: '여행 사진 캔버스 액자', date: '2023.09.28', status: '배송완료' },
  ];

  return (
    <div className="h-screen flex flex-col max-w-md mx-auto bg-white">
      <Header />
      <main className="flex-grow bg-gray-100 p-4 overflow-y-auto">
        {/* Profile Section */}
        <div className="flex flex-col items-center pb-6 border-b border-gray-200">
          <div className="w-24 h-24 rounded-full bg-pink-200 mb-4 flex items-center justify-center overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 a 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-800">AILight_User</h2>
          <p className="text-sm text-gray-500">ailight@example.com</p>
          <button
            onClick={onGoToProfileEdit}
            className="mt-6 w-full max-w-xs px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            프로필 편집
          </button>
        </div>

        {/* My Goods Section */}
        <div className="mt-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">내 굿즈</h3>
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {/* Add New Goods Button */}
            <button
              aria-label="새 굿즈 만들기"
              className="flex-shrink-0 w-28 h-28 bg-white border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-500 hover:bg-gray-50 hover:border-pink-400 hover:text-pink-400 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-300"
            >
              <PlusIcon className="w-8 h-8 mb-2" />
              <span className="text-sm font-semibold text-center">새 굿즈 만들기</span>
            </button>

            {/* User's Goods Items */}
            {myGoods.map(good => (
              <div key={good.id} className="flex-shrink-0 w-28 h-28 bg-gray-200 rounded-lg overflow-hidden shadow">
                <img src={good.imageUrl} alt={`내 굿즈 ${good.id}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Re-order Section */}
        <div className="mt-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">재주문</h3>
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {reorderItems.map(item => (
              <div key={item.id} className="flex-shrink-0 w-28 text-center">
                <div className="w-28 h-28 bg-gray-200 rounded-lg overflow-hidden shadow mb-2">
                    <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <p className="text-xs text-gray-600 truncate">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Order History Section */}
        <div className="mt-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">주문이력</h3>
            <div className="space-y-3">
                {orderHistory.map(order => (
                    <div key={order.id} className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center">
                        <div>
                            <p className="font-semibold text-gray-800 text-sm">{order.name}</p>
                            <p className="text-xs text-gray-500 mt-1">{order.date}</p>
                        </div>
                        <div className="text-right">
                            <span className="text-sm font-semibold text-pink-500">{order.status}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </main>
      <BottomNavBar activeItem="myPage" onNavigate={onNavigate} />
    </div>
  );
};

export default MyPage;