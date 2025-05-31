import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-20 h-20 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin animation-delay-150"></div>
        <div className="absolute inset-0 w-20 h-20 border-4 border-purple-500 border-t-transparent rounded-full animate-spin animation-delay-300"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;