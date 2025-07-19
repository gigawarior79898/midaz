import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Heart, ShoppingCart } from 'lucide-react';

const ProductSliders = () => {
  const [activeTopIndex, setActiveTopIndex] = useState(0);
  const [activeBottomIndex, setActiveBottomIndex] = useState(0);
  const topSliderRef = useRef<HTMLDivElement>(null);
  const bottomSliderRef = useRef<HTMLDivElement>(null);

  const tops = [
    {
      id: 1,
      name: "Midnight Oversized T-Shirt",
      price: "$45",
      image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400",
      color: "Black"
    },
    {
      id: 2,
      name: "Urban Graphic T-Shirt",
      price: "$75",
      image: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=400",
      color: "Charcoal"
    },
    {
      id: 3,
      name: "Minimalist T-Shirt",
      price: "$35",
      image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400",
      color: "White"
    },
    {
      id: 4,
      name: "Streetwear T-Shirt",
      price: "$40",
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400",
      color: "Gray"
    },
    {
      id: 5,
      name: "Designer T-Shirt",
      price: "$60",
      image: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=400",
      color: "Navy"
    }
  ];

  const bottoms = [
    {
      id: 1,
      name: "Classic Black Shorts",
      price: "$85",
      image: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=400",
      color: "Black"
    },
    {
      id: 2,
      name: "Cargo Shorts",
      price: "$65",
      image: "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=400",
      color: "Olive"
    },
    {
      id: 3,
      name: "Athletic Shorts",
      price: "$50",
      image: "https://images.pexels.com/photos/1006991/pexels-photo-1006991.jpeg?auto=compress&cs=tinysrgb&w=400",
      color: "Black"
    },
    {
      id: 4,
      name: "Casual Shorts",
      price: "$70",
      image: "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=400",
      color: "Beige"
    },
    {
      id: 5,
      name: "Premium Denim Shorts",
      price: "$45",
      image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400",
      color: "Blue"
    }
  ];

  const scrollSlider = (direction: 'left' | 'right', type: 'tops' | 'bottoms') => {
    const slider = type === 'tops' ? topSliderRef.current : bottomSliderRef.current;
    const items = type === 'tops' ? tops : bottoms;
    const currentIndex = type === 'tops' ? activeTopIndex : activeBottomIndex;
    const setIndex = type === 'tops' ? setActiveTopIndex : setActiveBottomIndex;
    
    if (slider) {
      const itemWidth = slider.children[0]?.clientWidth || 0;
      let newIndex;
      
      if (direction === 'left') {
        newIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
      } else {
        newIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
      }
      
      setIndex(newIndex);
      slider.scrollTo({
        left: newIndex * itemWidth,
        behavior: 'smooth'
      });
    }
  };

  const ProductCard = ({ product, onLike, onAddToCart }: any) => (
    <div className="flex-none w-80 bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
      <div className="relative group">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 flex gap-2">
          <button 
            onClick={onLike}
            className="p-2 bg-black/50 rounded-full hover:bg-red-500 transition-colors"
          >
            <Heart size={20} className="text-white" />
          </button>
        </div>
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            onClick={onAddToCart}
            className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingCart size={16} />
            Quick Add
          </button>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-purple-400">{product.price}</span>
          <span className="text-sm text-gray-400">{product.color}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="py-20 bg-black">
      {/* T-Shirts Section */}
      <section id="tshirts" className="mb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                T-Shirts Collection
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Elevate your style with our curated selection of premium t-shirts designed for the modern individual
            </p>
          </div>

          <div className="relative">
            {/* Navigation Buttons */}
            <button 
              onClick={() => scrollSlider('left', 'tops')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-black/50 rounded-full hover:bg-purple-600 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scrollSlider('right', 'tops')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-black/50 rounded-full hover:bg-purple-600 transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            {/* Slider */}
            <div 
              ref={topSliderRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide px-4"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {tops.map((product, index) => (
                <div key={product.id} style={{ scrollSnapAlign: 'start' }}>
                  <ProductCard 
                    product={product} 
                    onLike={() => console.log('Liked:', product.name)}
                    onAddToCart={() => console.log('Added to cart:', product.name)}
                  />
                </div>
              ))}
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {tops.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTopIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeTopIndex ? 'bg-purple-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Shorts Section */}
      <section id="shorts">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Shorts Collection
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Complete your look with our expertly crafted shorts that blend comfort with cutting-edge style
            </p>
          </div>

          <div className="relative">
            {/* Navigation Buttons */}
            <button 
              onClick={() => scrollSlider('left', 'bottoms')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-black/50 rounded-full hover:bg-cyan-600 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scrollSlider('right', 'bottoms')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-black/50 rounded-full hover:bg-cyan-600 transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            {/* Slider */}
            <div 
              ref={bottomSliderRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide px-4"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {bottoms.map((product, index) => (
                <div key={product.id} style={{ scrollSnapAlign: 'start' }}>
                  <ProductCard 
                    product={product} 
                    onLike={() => console.log('Liked:', product.name)}
                    onAddToCart={() => console.log('Added to cart:', product.name)}
                  />
                </div>
              ))}
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {bottoms.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveBottomIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeBottomIndex ? 'bg-cyan-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductSliders;