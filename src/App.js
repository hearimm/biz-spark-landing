import logo from './logo.svg';
import './App.css';

import React from 'react';

const BizSparkLanding = () => {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Star-like background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 2 + 'px',
              height: Math.random() * 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5 + 0.5,
            }}
          />
        ))}
      </div>
      
      <div className="z-10 text-center">
        <p className="text-yellow-400 mb-4">⚡ 지원사업 검색에 시간 쓰지 마세요. AI가 다 해드립니다! 🌟</p>
        
        <h1 className="text-6xl font-bold mb-4">
          Biz Spark
          <span className="inline-block ml-2 transform rotate-45">💥</span>
        </h1>
        
        <p className="mb-2">맞춤형 지원사업 정보를 당신의 메일함으로.</p>
        <p className="mb-8">비즈니스 성장의 새로운 엔진, Biz Spark💥</p>
        
        <button 
          className="bg-white text-black font-bold py-2 px-4 rounded hover:bg-gray-200 transition duration-300"
          onClick={() => window.open('https://naver.me/GlJtyhVG', '_blank')}
        >
          대기명단 등록!
        </button>
      </div>
      
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-sm">
        <p>지금 가입하고 누구보다 먼저 서비스를 받아보세요!</p>
        <button className="underline">자세히 보기 ↗</button>
      </div>
    </div>
  );
};

export default BizSparkLanding;