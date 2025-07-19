import React, { useState } from 'react';
import { Menu, X, ShoppingBag, User, Info, Star, Mail, Settings } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-wider">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              MIDAZ
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-purple-400 transition-colors flex items-center gap-2">
              Home
            </a>
            <a href="#tshirts" className="hover:text-purple-400 transition-colors flex items-center gap-2">
              T-Shirts
            </a>
            <a href="#shorts" className="hover:text-purple-400 transition-colors flex items-center gap-2">
              Shorts
            </a>
            <a href="#about" className="hover:text-purple-400 transition-colors flex items-center gap-2">
              <Info size={16} />
              About Me
            </a>
            <a href="#featured" className="hover:text-purple-400 transition-colors flex items-center gap-2">
              <Star size={16} />
              Featured
            </a>
            <a href="#contact" className="hover:text-purple-400 transition-colors flex items-center gap-2">
              <Mail size={16} />
              Contact
            </a>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="hover:text-purple-400 transition-colors" title="Account">
              <User size={20} />
            </button>
            <button className="hover:text-purple-400 transition-colors" title="Settings">
              <Settings size={20} />
            </button>
            <button className="hover:text-purple-400 transition-colors relative" title="Shopping Cart">
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-gray-800">
            <nav className="flex flex-col space-y-4 p-4">
              <a href="#home" className="hover:text-purple-400 transition-colors">Home</a>
              <a href="#tshirts" className="hover:text-purple-400 transition-colors">T-Shirts</a>
              <a href="#shorts" className="hover:text-purple-400 transition-colors">Shorts</a>
              <a href="#about" className="hover:text-purple-400 transition-colors flex items-center gap-2">
                <Info size={16} />
                About Me
              </a>
              <a href="#featured" className="hover:text-purple-400 transition-colors flex items-center gap-2">
                <Star size={16} />
                Featured
              </a>
              <a href="#contact" className="hover:text-purple-400 transition-colors flex items-center gap-2">
                <Mail size={16} />
                Contact
              </a>
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-800">
                <button className="hover:text-purple-400 transition-colors" title="Account">
                  <User size={20} />
                </button>
                <button className="hover:text-purple-400 transition-colors" title="Settings">
                  <Settings size={20} />
                </button>
                <button className="hover:text-purple-400 transition-colors relative" title="Shopping Cart">
                  <ShoppingBag size={20} />
                  <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    0
                  </span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;