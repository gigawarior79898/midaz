import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden">
      <div className="flex flex-col items-center">
        {/* Large Moon animation that takes most of the screen */}
        <div className="relative">
          {/* Moon animation - enhanced with more glow */}
          <div className="w-96 h-96 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 rounded-full animate-spin-slow opacity-100 moon-morph shadow-2xl relative">
            {/* Enhanced glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full animate-pulse"></div>
            
            {/* Moon craters - scaled up with better positioning */}
            <div className="absolute top-8 left-12 w-8 h-8 bg-gray-400 rounded-full opacity-60 shadow-inner"></div>
            <div className="absolute top-24 right-16 w-6 h-6 bg-gray-500 rounded-full opacity-40 shadow-inner"></div>
            <div className="absolute bottom-16 left-24 w-4 h-4 bg-gray-400 rounded-full opacity-50 shadow-inner"></div>
            <div className="absolute bottom-24 right-8 w-10 h-10 bg-gray-500 rounded-full opacity-30 shadow-inner"></div>
            <div className="absolute top-32 left-32 w-5 h-5 bg-gray-500 rounded-full opacity-45 shadow-inner"></div>
            <div className="absolute top-48 right-32 w-3 h-3 bg-gray-400 rounded-full opacity-35 shadow-inner"></div>
            <div className="absolute bottom-32 left-16 w-7 h-7 bg-gray-500 rounded-full opacity-40 shadow-inner"></div>
            <div className="absolute bottom-40 right-24 w-4 h-4 bg-gray-400 rounded-full opacity-50 shadow-inner"></div>
            
            {/* Central brand logo on moon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent opacity-30">
                M
              </span>
            </div>
          </div>
          
          {/* Enhanced T-shirt slider preview */}
          <div className="absolute top-0 left-0 w-96 h-48 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 tshirt-slider-appear overflow-hidden shadow-2xl border border-purple-400/30">
            <div className="flex items-center justify-between h-full px-6">
              <div className="flex space-x-4">
                {/* Enhanced T-shirt previews */}
                <div className="w-32 h-32 bg-white/15 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20 hover:scale-105 transition-transform">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-white mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 4h1.5c.83 0 1.5.67 1.5 1.5S17.83 7 17.5 7H16v1h4v12H4V8h4V7H6.5C5.67 7 5 6.33 5 5.5S5.67 4 6.5 4H8c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2zm-6 0h4v1h-4V4z"/>
                    </svg>
                    <span className="text-xs text-white/80">$45</span>
                  </div>
                </div>
                <div className="w-32 h-32 bg-white/15 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20 hover:scale-105 transition-transform">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-white mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 4h1.5c.83 0 1.5.67 1.5 1.5S17.83 7 17.5 7H16v1h4v12H4V8h4V7H6.5C5.67 7 5 6.33 5 5.5S5.67 4 6.5 4H8c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2zm-6 0h4v1h-4V4z"/>
                    </svg>
                    <span className="text-xs text-white/80">$35</span>
                  </div>
                </div>
              </div>
              <div className="text-white font-bold text-xl tracking-wider">T-SHIRTS</div>
            </div>
          </div>
          
          {/* Enhanced Shorts slider preview */}
          <div className="absolute top-56 left-0 w-96 h-48 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl opacity-0 shorts-slider-appear overflow-hidden shadow-2xl border border-blue-400/30">
            <div className="flex items-center justify-between h-full px-6">
              <div className="flex space-x-4">
                {/* Enhanced Shorts previews */}
                <div className="w-32 h-32 bg-white/15 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20 hover:scale-105 transition-transform">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-white mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16.5 8H15V6c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v2H7.5C6.67 8 6 8.67 6 9.5v7c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5V12h2v4.5c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zM11 6h2v2h-2V6z"/>
                    </svg>
                    <span className="text-xs text-white/80">$65</span>
                  </div>
                </div>
                <div className="w-32 h-32 bg-white/15 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20 hover:scale-105 transition-transform">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-white mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16.5 8H15V6c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v2H7.5C6.67 8 6 8.67 6 9.5v7c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5V12h2v4.5c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zM11 6h2v2h-2V6z"/>
                    </svg>
                    <span className="text-xs text-white/80">$50</span>
                  </div>
                </div>
              </div>
              <div className="text-white font-bold text-xl tracking-wider">SHORTS</div>
            </div>
          </div>

          {/* Floating particles effect */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-10 w-2 h-2 bg-purple-400 rounded-full animate-bounce opacity-60"></div>
            <div className="absolute top-20 right-20 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce opacity-70" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute bottom-20 left-20 w-1 h-1 bg-blue-400 rounded-full animate-bounce opacity-50" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-10 right-10 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-bounce opacity-40" style={{animationDelay: '1.5s'}}></div>
          </div>
        </div>
        
        {/* Enhanced brand name with gradient animation */}
        <div className="mt-8 text-4xl font-bold tracking-wider text-white fade-in-text">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
            MIDAZ
          </span>
        </div>
        
        {/* Enhanced tagline */}
        <div className="mt-2 text-sm text-gray-400 fade-in-text tracking-wide" style={{animationDelay: '2s'}}>
          Premium Fashion • Modern Style
        </div>
        
        {/* Enhanced loading dots with colors */}
        <div className="flex space-x-2 mt-8">
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce loading-dot-1"></div>
          <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce loading-dot-2"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce loading-dot-3"></div>
        </div>

        {/* Progress bar */}
        <div className="mt-6 w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full progress-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;