/**
 * Carousel Component - Premium Redesign
 * Full-width hero carousel with modern animations, depth effects, and floating header integration
 * Features: Smooth Ken Burns effect, elegant typography, glassmorphism controls
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';

// NSS-relevant carousel slides with high-quality images
const carouselSlides = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&h=1080&fit=crop&q=80",
    alt: "NSS Shramdan",
    title: "Not Me, But You",
    subtitle: "Empowering communities through selfless service",
    tag: "Our Motto",
    accent: "from-blue-700 to-blue-900",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1920&h=1080&fit=crop&q=80",
    alt: "Blood Donation",
    title: "Gift of Life",
    subtitle: "Every drop counts — Join our blood donation drives",
    tag: "Save Lives",
    accent: "from-red-500 to-red-700",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&h=1080&fit=crop&q=80",
    alt: "Village Adoption",
    title: "Building Futures",
    subtitle: "Transforming villages through education and development",
    tag: "NSS Camp",
    accent: "from-blue-600 to-indigo-800",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920&h=1080&fit=crop&q=80",
    alt: "Tree Plantation",
    title: "Green Tomorrow",
    subtitle: "Planting seeds of hope for a sustainable future",
    tag: "Environment",
    accent: "from-blue-800 to-indigo-900",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1920&h=1080&fit=crop&q=80",
    alt: "Community Work",
    title: "Stronger Together",
    subtitle: "500+ volunteers dedicated to social change",
    tag: "Community",
    accent: "from-indigo-600 to-blue-800",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState('next');
  const [progress, setProgress] = useState(0);
  const progressInterval = useRef(null);
  const autoPlayInterval = useRef(null);

  // Navigate to next slide with animation
  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection('next');
    setProgress(0);
    
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === carouselSlides.length - 1 ? 0 : prev + 1));
      setIsTransitioning(false);
    }, 50);
  }, [isTransitioning]);

  // Navigate to previous slide
  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection('prev');
    setProgress(0);
    
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? carouselSlides.length - 1 : prev - 1));
      setIsTransitioning(false);
    }, 50);
  }, [isTransitioning]);

  // Go to specific slide
  const goToSlide = (index) => {
    if (index === currentIndex || isTransitioning) return;
    setIsTransitioning(true);
    setDirection(index > currentIndex ? 'next' : 'prev');
    setProgress(0);
    
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 50);
  };

  // Progress bar animation
  useEffect(() => {
    if (!isAutoPlaying) {
      setProgress(0);
      return;
    }

    progressInterval.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 0.5;
      });
    }, 25);

    return () => clearInterval(progressInterval.current);
  }, [isAutoPlaying, currentIndex]);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    autoPlayInterval.current = setInterval(nextSlide, 5000);
    return () => clearInterval(autoPlayInterval.current);
  }, [isAutoPlaying, nextSlide]);

  // Pause/resume auto-play
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const currentSlide = carouselSlides[currentIndex];

  return (
    <div
      className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden bg-gray-900"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Slides with Ken Burns Effect */}
      {carouselSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-out
            ${index === currentIndex 
              ? 'opacity-100 scale-100 z-10' 
              : 'opacity-0 scale-105 z-0'
            }`}
        >
          {/* Image with Ken Burns animation */}
          <div 
            className={`absolute inset-0 ${index === currentIndex ? 'animate-kenburns' : ''}`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
          
          {/* Multi-layer gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30"></div>
          
          {/* Radial gradient for vignette effect */}
          <div className="absolute inset-0" 
            style={{
              background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)'
            }}>
          </div>
          
          {/* Top gradient for header blending */}
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/80 via-black/40 to-transparent"></div>
        </div>
      ))}

      {/* Animated particles/dots background effect */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute w-2 h-2 bg-white rounded-full animate-float-slow" style={{ top: '20%', left: '10%' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full animate-float-medium" style={{ top: '60%', left: '85%' }}></div>
        <div className="absolute w-1.5 h-1.5 bg-white rounded-full animate-float-fast" style={{ top: '40%', left: '70%' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full animate-float-slow" style={{ top: '80%', left: '20%' }}></div>
        <div className="absolute w-2 h-2 bg-white rounded-full animate-float-medium" style={{ top: '30%', left: '50%' }}></div>
      </div>

      {/* Main Content */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            
            {/* Tag Badge */}
            <div
              className={`inline-flex items-center gap-2 mb-6 transform transition-all duration-700 ease-out
                ${isTransitioning 
                  ? 'opacity-0 -translate-y-4' 
                  : 'opacity-100 translate-y-0'
                }`}
              style={{ transitionDelay: '100ms' }}
            >
              <div className={`px-4 py-1.5 rounded-full bg-gradient-to-r ${currentSlide.accent} 
                text-white text-sm font-semibold tracking-wide shadow-lg`}>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  {currentSlide.tag}
                </span>
              </div>
            </div>

            {/* Main Title */}
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 
                leading-tight tracking-tight transform transition-all duration-700 ease-out
                ${isTransitioning 
                  ? 'opacity-0 translate-y-8' 
                  : 'opacity-100 translate-y-0'
                }`}
              style={{ 
                transitionDelay: '200ms',
                textShadow: '0 4px 30px rgba(0,0,0,0.5), 0 2px 10px rgba(0,0,0,0.3)'
              }}
            >
              {currentSlide.title}
            </h1>

            {/* Subtitle */}
            <p
              className={`text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-xl 
                font-light leading-relaxed transform transition-all duration-700 ease-out
                ${isTransitioning 
                  ? 'opacity-0 translate-y-8' 
                  : 'opacity-100 translate-y-0'
                }`}
              style={{ 
                transitionDelay: '300ms',
                textShadow: '0 2px 20px rgba(0,0,0,0.5)'
              }}
            >
              {currentSlide.subtitle}
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-wrap gap-4 transform transition-all duration-700 ease-out
                ${isTransitioning 
                  ? 'opacity-0 translate-y-8' 
                  : 'opacity-100 translate-y-0'
                }`}
              style={{ transitionDelay: '400ms' }}
            >
              <a
                href="/activities"
                className="group inline-flex items-center gap-2 px-6 py-3 
                  bg-white text-gray-900 font-semibold rounded-xl
                  hover:bg-accent hover:text-white 
                  transform hover:scale-105 hover:shadow-xl
                  transition-all duration-300"
              >
                <span>Explore Activities</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/team"
                className="group inline-flex items-center gap-2 px-6 py-3 
                  bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl
                  border border-white/30 hover:bg-white/20 hover:border-white/50
                  transform hover:scale-105 transition-all duration-300"
              >
                <span>Meet Our Team</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Modern Glass Design */}
      <div className="absolute left-4 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-30">
        <button
          onClick={prevSlide}
          className="group relative p-3 sm:p-4 rounded-2xl 
            bg-white/10 backdrop-blur-md border border-white/20
            hover:bg-white/20 hover:border-white/40 hover:scale-110
            transition-all duration-300 overflow-hidden"
          aria-label="Previous slide"
        >
          {/* Hover glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-white relative z-10 
              transform group-hover:-translate-x-0.5 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      <div className="absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-30">
        <button
          onClick={nextSlide}
          className="group relative p-3 sm:p-4 rounded-2xl 
            bg-white/10 backdrop-blur-md border border-white/20
            hover:bg-white/20 hover:border-white/40 hover:scale-110
            transition-all duration-300 overflow-hidden"
          aria-label="Next slide"
        >
          {/* Hover glow effect */}
          <div className="absolute inset-0 bg-gradient-to-l from-white/20 to-transparent 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-white relative z-10 
              transform group-hover:translate-x-0.5 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Modern Slide Indicators - Bottom Right */}
      <div className="absolute bottom-8 sm:bottom-12 right-6 sm:right-8 lg:right-12 z-30">
        <div className="flex items-center gap-4">
          {/* Slide Counter */}
          <div className="hidden sm:flex items-center gap-2 text-white/70 font-mono text-sm">
            <span className="text-white font-semibold text-lg">
              {String(currentIndex + 1).padStart(2, '0')}
            </span>
            <span className="w-8 h-px bg-white/40"></span>
            <span>{String(carouselSlides.length).padStart(2, '0')}</span>
          </div>
          
          {/* Modern Pill Indicators */}
          <div className="flex items-center gap-2 p-2 rounded-full bg-black/20 backdrop-blur-sm">
            {carouselSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative h-2 rounded-full transition-all duration-500 ease-out overflow-hidden
                  ${index === currentIndex 
                    ? 'w-8 bg-white' 
                    : 'w-2 bg-white/40 hover:bg-white/60'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                {/* Progress fill for active indicator */}
                {index === currentIndex && isAutoPlaying && (
                  <div 
                    className="absolute left-0 top-0 h-full bg-accent rounded-full transition-all duration-75"
                    style={{ width: `${progress}%` }}
                  ></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Info - Bottom Left */}
      <div className="absolute bottom-8 sm:bottom-12 left-6 sm:left-8 lg:left-12 z-30">
        <div className="flex items-center gap-3">
          {/* Auto-play indicator */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="p-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/10
              hover:bg-black/30 transition-all duration-300"
            aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isAutoPlaying ? (
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
          
          {/* Scroll indicator */}
          <div className="hidden md:flex items-center gap-2 text-white/60 text-sm">
            <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
              <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce"></div>
            </div>
            <span>Scroll to explore</span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-softGrey to-transparent z-20 pointer-events-none"></div>
      
      {/* Side accent lines */}
      <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-accent/50 to-transparent z-20"></div>
      <div className="absolute right-0 top-1/3 bottom-1/3 w-1 bg-gradient-to-b from-transparent via-secondary/30 to-transparent z-20"></div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes kenburns {
          0% {
            transform: scale(1) translate(0, 0);
          }
          100% {
            transform: scale(1.1) translate(-1%, -1%);
          }
        }
        
        .animate-kenburns {
          animation: kenburns 6s ease-out forwards;
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 0.6; }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.4; }
          50% { transform: translateY(-15px) translateX(-5px); opacity: 0.7; }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.2; }
          50% { transform: translateY(-25px) translateX(5px); opacity: 0.5; }
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Carousel;
