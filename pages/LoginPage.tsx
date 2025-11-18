import React, { useState } from 'react';
import { GoogleIcon } from '../components/icons/GoogleIcon';
import { FacebookIcon } from '../components/icons/FacebookIcon';
import { NaverIcon } from '../components/icons/NaverIcon';
import { AppleIcon } from '../components/icons/AppleIcon';
import { AILightLogo } from '../components/AILightLogo';
import { ChatBubbleIcon } from '../components/icons/ChatBubbleIcon';

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="relative min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white p-8 rounded-lg">
        <div className="text-left mb-6">
          <h1 className="text-2xl font-bold text-gray-800">안녕하세요:)</h1>
          <div className="flex items-center text-2xl font-bold text-gray-800">
            <AILightLogo />
            <span className="ml-2">입니다.</span>
          </div>
          <p className="text-gray-500 mt-2 text-sm">간편 로그인으로 더 다양한 서비스를 이용하세요.</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="아이디 입력"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 transition-colors"
              aria-label="아이디"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="비밀번호 입력"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 transition-colors"
              aria-label="비밀번호"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-100 text-gray-700 font-semibold py-3 rounded-lg hover:bg-pink-200 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2"
          >
            로그인
          </button>
        </form>

        <div className="text-center text-sm text-gray-500 mt-4">
          <a href="#" className="hover:underline">아이디 찾기</a>
          <span className="mx-2">|</span>
          <a href="#" className="hover:underline">비밀번호 찾기</a>
          <span className="mx-2">|</span>
          <a href="#" className="hover:underline">회원가입</a>
        </div>

        <div className="flex items-center my-8">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-4 text-xs text-gray-500">SNS 계정으로 로그인</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        <div className="flex justify-center space-x-4">
          <button aria-label="Login with Google" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <GoogleIcon className="w-8 h-8" />
          </button>
          <button aria-label="Login with Facebook" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <FacebookIcon className="w-8 h-8" />
          </button>
          <button aria-label="Login with Naver" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <NaverIcon className="w-8 h-8" />
          </button>
          <button aria-label="Login with Apple" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <AppleIcon className="w-8 h-8" />
          </button>
        </div>
      </div>
      
      <div className="fixed bottom-6 right-6">
        <ChatBubbleIcon />
      </div>
    </div>
  );
};

export default LoginPage;
