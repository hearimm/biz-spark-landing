import React from 'react';

const DetailModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-700/[.95] text-white rounded-lg p-6 max-w-md w-full relative">
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:text-gray-300"
        >
          ✕
        </button>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span role="img" aria-label="gift">🎁</span>
            <span role="img" aria-label="sparkle">💥</span>
          </div>
          <h2 className="text-xl font-bold" >Biz Spark가 특별한 이벤트를 준비했어요!</h2>
          <p>지금 바로 대기자 명단에 가입하세요.</p>
          <p>가입하신 분들 중 추첨을 통해 10분께 프리미엄 플랜 3개월 무료 이용권을 드립니다.</p>
          <p>AI의 힘으로 당신의 비즈니스에 날개를 달아보세요!</p>
          <button 
            onClick={onClose}
            className="bg-white text-black font-bold py-2 px-4 rounded hover:bg-gray-200 transition duration-300 mt-4"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;