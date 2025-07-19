import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden">
      <div className="flex flex-col items-center">
        {/* Large Moon animation that takes most of the screen */}
        <div className="relative">
          {/* Moon animation - much larger */}
          <div className="w-96 h-96 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 rounded-full animate-spin-slow opacity-100 moon-morph shadow-2xl">
            {/* Moon craters - scaled up */}
            <div className="absolute top-8 left-12 w-8 h-8 bg-gray-400 rounded-full opacity-60"></div>
            <div className="absolute top-24 right-16 w-6 h-6 bg-gray-500 rounded-full opacity-40"></div>
            <div className="absolute bottom-16 left-24 w-4 h-4 bg-gray-400 rounded-full opacity-50"></div>
            <div className="absolute bottom-24 right-8 w-10 h-10 bg-gray-500 rounded-full opacity-30"></div>
            <div className="absolute top-32 left-32 w-5 h-5 bg-gray-500 rounded-full opacity-45"></div>
            <div className="absolute top-48 right-32 w-3 h-3 bg-gray-400 rounded-full opacity-35"></div>
            <div className="absolute bottom-32 left-16 w-7 h-7 bg-gray-500 rounded-full opacity-40"></div>
            <div className="absolute bottom-40 right-24 w-4 h-4 bg-gray-400 rounded-full opacity-50"></div>
          </div>
          
          {/* Morphing into T-shirt slider with visible products */}
          <div className="absolute top-0 left-0 w-96 h-48 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-0 tshirt-slider-appear overflow-hidden">
            <div className="flex items-center justify-between h-full px-4">
              <div className="flex space-x-4">
                {/* T-shirt PNG placeholders */}
                <div className="w-32 h-32 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 4h1.5c.83 0 1.5.67 1.5 1.5S17.83 7 17.5 7H16v1h4v12H4V8h4V7H6.5C5.67 7 5 6.33 5 5.5S5.67 4 6.5 4H8c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2zm-6 0h4v1h-4V4z"/>
                  </svg>
                </div>
                <div className="w-32 h-32 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 4h1.5c.83 0 1.5.67 1.5 1.5S17.83 7 17.5 7H16v1h4v12H4V8h4V7H6.5C5.67 7 5 6.33 5 5.5S5.67 4 6.5 4H8c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2zm-6 0h4v1h-4V4z"/>
                  </svg>
                </div>
                <div className="w-32 h-32 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 4h1.5c.83 0 1.5.67 1.5 1.5S17.83 7 17.5 7H16v1h4v12H4V8h4V7H6.5C5.67 7 5 6.33 5 5.5S5.67 4 6.5 4H8c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2zm-6 0h4v1h-4V4z"/>
                  </svg>
                </div>
              </div>
              <div className="text-white font-bold text-xl">T-SHIRTS</div>
            </div>
          </div>
          
          {/* Morphing into Shorts slider with visible products */}
          <div className="absolute top-56 left-0 w-96 h-48 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg opacity-0 shorts-slider-appear overflow-hidden">
            <div className="flex items-center justify-between h-full px-4">
              <div className="flex space-x-4">
                {/* Shorts PNG placeholders */}
                <div className="w-32 h-32 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.5 8H15V6c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v2H7.5C6.67 8 6 8.67 6 9.5v7c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5V12h2v4.5c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zM11 6h2v2h-2V6z"/>
                  </svg>
                </div>
                <div className="w-32 h-32 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.5 8H15V6c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v2H7.5C6.67 8 6 8.67 6 9.5v7c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5V12h2v4.5c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zM11 6h2v2h-2V6z"/>
                  </svg>
                </div>
                <div className="w-32 h-32 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.5 8H15V6c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v2H7.5C6.67 8 6 8.67 6 9.5v7c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5V12h2v4.5c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zM11 6h2v2h-2V6z"/>
                  </svg>
                </div>
              </div>
              <div className="text-white font-bold text-xl">SHORTS</div>
            </div>
          </div>
        </div>
        
        {/* Brand name */}
        <div className="mt-8 text-3xl font-bold tracking-wider text-white fade-in-text">
          MIDAZ
        </div>
        
        {/* Loading dots */}
        <div className="flex space-x-1 mt-6">
          <div className="w-3 h-3 bg-white rounded-full animate-bounce loading-dot-1"></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce loading-dot-2"></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce loading-dot-3"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;