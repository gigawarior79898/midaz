# MIDAZ - Premium Fashion Store

![MIDAZ](https://img.shields.io/badge/MIDAZ-Premium%20Fashion-purple?style=for-the-badge&logo=fashion&logoColor=white)
![React](https://img.shields.io/badge/React-18.x-blue?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)

A modern, elegant fashion e-commerce platform featuring stunning animations and a streamlined shopping experience.

## ✨ Features

### 🌙 **Enhanced Loading Animation**
- **Spectacular moon-to-sliders transformation** with realistic physics
- **Product preview cards** showing T-shirts and Shorts with pricing
- **Floating particle effects** for visual appeal
- **Gradient brand animation** with smooth transitions
- **Progress bar** indicating loading status
- **Premium tagline display**: "Premium Fashion • Modern Style"

### 🧭 **Modern Navigation**
- **Enhanced header** with intuitive navigation
- **About Me** section with info icon
- **Featured** products with star icon
- **Contact** integration with mail icon
- **Settings** panel for user preferences
- **Shopping cart** with real-time item counter
- **Responsive mobile menu** with smooth animations
- **Consistent purple/pink gradient theme**

### 🛍️ **Streamlined Product Experience**
- **Dual slider layout**: T-Shirts & Shorts collections
- **Glass morphism design** with backdrop blur effects
- **Interactive product cards** with hover animations
- **Gradient pricing displays** for premium feel
- **Quick-add functionality** with smooth transitions
- **Color-coded navigation dots** matching product categories
- **Snap-to-grid scrolling** for better UX

### 🎨 **Visual Excellence**
- **Gradient backgrounds** creating depth and atmosphere
- **Smooth transitions** throughout the interface
- **Enhanced hover effects** with scale transformations
- **Modern button interactions** with active states
- **Consistent color theming** across all components
- **Responsive design** for all device sizes

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/gigawarior79898/midaz.git
   cd midaz
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application

### Build for Production

```bash
npm run build
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Linting**: ESLint

## 📁 Project Structure

```
src/
├── components/
│   ├── LoadingScreen.tsx     # Enhanced loading animation
│   ├── Header.tsx           # Navigation with enhanced features
│   ├── ProductSliders.tsx   # Main product display
│   ├── About.tsx           # About section component
│   ├── Contact.tsx         # Contact form component
│   └── Footer.tsx          # Footer component
├── App.tsx                 # Main application component
├── index.css              # Global styles and animations
└── main.tsx               # Application entry point
```

## 🎯 Key Enhancements

### Animation System
- **Custom CSS animations** for loading screen transformations
- **Progress bar animation** with easing functions
- **Particle system** for ambient effects
- **Gradient text animations** for brand presentation

### User Experience
- **Streamlined navigation** with clear visual hierarchy
- **Intuitive product browsing** with smooth scrolling
- **Responsive design** adapting to all screen sizes
- **Accessibility features** with proper ARIA labels

### Performance
- **Optimized loading times** with efficient asset management
- **Smooth 60fps animations** using CSS transforms
- **Lazy loading** for better performance
- **Minimal bundle size** with tree-shaking

## 🎨 Design System

### Color Palette
- **Primary Purple**: `#8b5cf6` to `#ec4899`
- **Secondary Blue**: `#3b82f6` to `#06b6d4`
- **Background**: Pure black to dark gray gradient
- **Text**: White with various opacity levels

### Typography
- **Primary Font**: System font stack
- **Sizes**: Responsive scaling from mobile to desktop
- **Weights**: 400 (normal) to 700 (bold)

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Enhanced layout for tablets
- **Desktop Experience**: Full-featured desktop interface
- **Touch Gestures**: Swipe support for mobile sliders

## 🔧 Customization

### Adding New Products
Edit the product arrays in `ProductSliders.tsx`:

```typescript
const tops = [
  {
    id: 6,
    name: "Your Product Name",
    price: "$XX",
    image: "product-image-url",
    color: "Product Color"
  }
];
```

### Modifying Animations
Adjust timing and effects in `index.css`:

```css
.moon-morph {
  animation: moon-to-sliders 4s ease-in-out forwards;
}
```

## 🌟 Live Demo

Visit the live application: [MIDAZ Fashion Store](https://github.com/gigawarior79898/midaz)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

- **GitHub**: [@gigawarior79898](https://github.com/gigawarior79898)
- **Project**: [MIDAZ Fashion Store](https://github.com/gigawarior79898/midaz)

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**