import React from 'react';
import { Target, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">MIDAZ</span>
          </h2>
          <p className="text-xl text-gray-300 mb-16 leading-relaxed">
            Born from the vision of creating fashion that speaks to the individual, 
            MIDAZ represents the perfect fusion of contemporary design and personal expression.
          </p>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Individual Focus</h3>
              <p className="text-gray-400">
                Every piece is designed with the individual in mind, celebrating uniqueness and personal style.
              </p>
            </div>

            <div className="p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
              <p className="text-gray-400">
                We use only the finest materials and craftsmanship to ensure lasting comfort and style.
              </p>
            </div>

            <div className="p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-gray-400">
                Join a community of individuals who aren't afraid to stand out and express themselves.
              </p>
            </div>
          </div>

          {/* Story */}
          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl p-8 border border-gray-800">
            <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              MIDAZ was founded on the belief that fashion should be as unique as the person wearing it. 
              In a world of mass production and conformity, we saw the need for clothing that celebrates 
              individuality and personal expression.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our curated collections are designed for those who dare to be different, who understand 
              that true style comes from within, and who aren't afraid to let their personality shine 
              through their clothing choices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;