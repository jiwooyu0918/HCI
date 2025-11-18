import React, { useState } from 'react';
import LoginPage from './pages/LoginPage';
import MyPage from './pages/MyPage';
import ProfileEditPage from './pages/ProfileEditPage';
import BoardPage from './pages/BoardPage';
import HomePage, { Idol } from './pages/HomePage';
import GoodsSelectionPage from './pages/GoodsSelectionPage';

type Page = 'login' | 'myPage' | 'profileEdit' | 'board' | 'home' | 'goodsSelection';
export type NavItemKey = 'home' | 'myDesign' | 'board' | 'myPage';


const App: React.FC = () => {
  const [page, setPage] = useState<Page>('login');
  const [selectedIdol, setSelectedIdol] = useState<Idol | null>(null);

  const handleLogin = () => {
    setPage('home');
  };

  const goToProfileEdit = () => {
    setPage('profileEdit');
  };
  
  const goToMyPage = () => {
    setPage('myPage');
  }

  const goHome = () => {
    setPage('home');
  };

  const handleIdolSelect = (idol: Idol) => {
    setSelectedIdol(idol);
    setPage('goodsSelection');
  };

  const handleNavigation = (targetPage: NavItemKey) => {
    if (targetPage === 'home') {
      setPage('home');
    } else if (targetPage === 'board') {
      setPage('board');
    } else if (targetPage === 'myPage') {
      setPage('myPage');
    }
    // Other pages are not implemented yet.
  };

  const renderPage = () => {
    switch (page) {
      case 'login':
        return <LoginPage onLogin={handleLogin} />;
      case 'home':
        return <HomePage onNavigate={handleNavigation} onIdolSelect={handleIdolSelect} />;
      case 'myPage':
        return <MyPage onGoToProfileEdit={goToProfileEdit} onNavigate={handleNavigation} />;
      case 'profileEdit':
        return <ProfileEditPage onGoBack={goToMyPage} />;
      case 'board':
        return <BoardPage onNavigate={handleNavigation} />;
      case 'goodsSelection':
        return selectedIdol ? <GoodsSelectionPage idol={selectedIdol} onGoBack={goHome} /> : <HomePage onNavigate={handleNavigation} onIdolSelect={handleIdolSelect} />;
      default:
        return <LoginPage onLogin={handleLogin} />;
    }
  };

  return (
    <div className="w-full h-full font-sans bg-gray-50">
      {renderPage()}
    </div>
  );
};

export default App;
