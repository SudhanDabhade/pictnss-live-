/**
 * MagazineViewer Component
 * Digital magazine viewer with realistic book-style page-turn animation
 * Features: Soft shadows, folded edge effect, page numbers, navigation arrows, zoom toggle
 */

import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MagazineViewer = ({ magazine, onClose }) => {
  const navigate = useNavigate();
  const [currentSpread, setCurrentSpread] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle responsive check
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate total spreads (pairs of pages)
  const totalSpreads = Math.ceil(magazine.pages.length / 2);
  
  // Get current pages (left and right)
  const getSpreadPages = (spreadIndex) => {
    const leftIndex = spreadIndex * 2;
    const rightIndex = leftIndex + 1;
    return {
      left: magazine.pages[leftIndex] || null,
      right: magazine.pages[rightIndex] || null
    };
  };

  const currentPages = getSpreadPages(currentSpread);
  const nextPages = getSpreadPages(currentSpread + 1);
  const prevPages = getSpreadPages(currentSpread - 1);

  // Page turn handlers
  const goToNextSpread = useCallback(() => {
    if (currentSpread < totalSpreads - 1 && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('next');
      setTimeout(() => {
        setCurrentSpread(prev => prev + 1);
        setIsFlipping(false);
        setFlipDirection(null);
      }, 600);
    }
  }, [currentSpread, totalSpreads, isFlipping]);

  const goToPrevSpread = useCallback(() => {
    if (currentSpread > 0 && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('prev');
      setTimeout(() => {
        setCurrentSpread(prev => prev - 1);
        setIsFlipping(false);
        setFlipDirection(null);
      }, 600);
    }
  }, [currentSpread, isFlipping]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') goToNextSpread();
      if (e.key === 'ArrowLeft') goToPrevSpread();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextSpread, goToPrevSpread, onClose]);

  // Render page content based on type
  const renderPageContent = (page, isRightPage = false) => {
    if (!page) {
      return (
        <div className="h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
          <span className="text-gray-400 text-sm">End of Magazine</span>
        </div>
      );
    }

    const baseClasses = "h-full p-4 md:p-6 lg:p-8 overflow-auto";

    switch (page.type) {
      case 'title':
        return (
          <div className={`${baseClasses} flex flex-col items-center justify-center text-center 
            bg-gradient-to-br from-secondary via-[#252878] to-secondary`}>
            <div className="mb-4 md:mb-6">
              <img 
                src={page.image} 
                alt={page.title}
                className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full border-4 border-white shadow-xl"
              />
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
              {page.title}
            </h1>
            <p className="text-sm md:text-lg text-primary mb-3 md:mb-4">{page.subtitle}</p>
            <div className="w-16 md:w-24 h-1 bg-accent rounded-full mb-3 md:mb-4"></div>
            <p className="text-primary/90 italic text-sm md:text-base">{page.content}</p>
            <p className="mt-4 md:mt-6 text-xs md:text-sm text-primary/70">
              {magazine.publishDate}
            </p>
          </div>
        );

      case 'message':
        return (
          <div className={`${baseClasses} bg-gradient-to-br from-primary/50 to-primary/30`}>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4 mb-4">
              {page.image && (
                <img 
                  src={page.image} 
                  alt={page.author}
                  className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-full border-2 border-secondary/30 shadow-md"
                />
              )}
              <div className="text-center md:text-left">
                <h2 className="text-lg md:text-xl font-bold text-gray-800">{page.title}</h2>
                <p className="text-xs md:text-sm text-gray-600">{page.author}</p>
                <p className="text-xs text-gray-500">{page.designation}</p>
              </div>
            </div>
            <div className="border-l-4 border-secondary pl-3 md:pl-4">
              <p className="text-gray-700 leading-relaxed text-xs md:text-sm italic">
                "{page.content}"
              </p>
            </div>
          </div>
        );

      case 'article':
        return (
          <div className={`${baseClasses} bg-white`}>
            <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-1">{page.title}</h2>
            {page.subtitle && (
              <p className="text-xs md:text-sm text-secondary mb-3">{page.subtitle}</p>
            )}
            {page.image && (
              <img 
                src={page.image} 
                alt={page.title}
                className="w-full h-24 md:h-32 object-cover rounded-lg mb-3 shadow-md"
              />
            )}
            <p className="text-gray-700 leading-relaxed text-xs md:text-sm mb-4">
              {page.content}
            </p>
            {page.stats && (
              <div className="grid grid-cols-2 gap-2 md:gap-3">
                {page.stats.map((stat, idx) => (
                  <div key={idx} className="bg-primary rounded-lg p-2 md:p-3 text-center">
                    <p className="text-lg md:text-2xl font-bold text-secondary">{stat.value}</p>
                    <p className="text-xs text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case 'gallery':
        return (
          <div className={`${baseClasses} bg-gray-50`}>
            <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">{page.title}</h2>
            <div className="grid grid-cols-2 gap-2">
              {page.images?.map((img, idx) => (
                <div key={idx} className="group relative">
                  <img 
                    src={img.src} 
                    alt={img.caption}
                    className="w-full h-16 md:h-24 object-cover rounded-lg shadow-md 
                      group-hover:scale-105 transition-transform duration-300"
                  />
                  <p className="mt-1 text-xs text-gray-600 text-center truncate">
                    {img.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'team':
        return (
          <div className={`${baseClasses} bg-gradient-to-br from-primary to-primary/70`}>
            <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 text-center">
              {page.title}
            </h2>
            <div className="grid grid-cols-2 gap-2 md:gap-4">
              {page.members?.map((member, idx) => (
                <div key={idx} className="text-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-full mx-auto 
                      border-2 border-secondary/30 shadow-md"
                  />
                  <p className="mt-1 md:mt-2 text-xs md:text-sm font-semibold text-gray-800 truncate">
                    {member.name}
                  </p>
                  <p className="text-xs text-secondary">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'closing':
        return (
          <div className={`${baseClasses} flex flex-col justify-center 
            bg-gradient-to-br from-secondary via-[#252878] to-[#1a1d5c]`}>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 text-center">
              {page.title}
            </h2>
            <p className="text-primary text-center leading-relaxed text-xs md:text-sm mb-4 md:mb-6">
              {page.content}
            </p>
            {page.image && (
              <img 
                src={page.image} 
                alt={page.title}
                className="w-full h-24 md:h-32 object-cover rounded-lg shadow-xl"
              />
            )}
            <div className="mt-4 md:mt-6 text-center">
              <p className="text-primary/70 text-xs">PICT NSS Unit</p>
              <p className="text-primary italic text-xs md:text-sm">"Not Me, But You"</p>
            </div>
          </div>
        );

      default:
        return (
          <div className={`${baseClasses} bg-white`}>
            <p className="text-gray-700">{page.content || 'Page content'}</p>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-2 md:p-4">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-3 right-3 md:top-4 md:right-4 z-50 p-2 md:p-3 bg-white/10 backdrop-blur-sm 
          rounded-full text-white hover:bg-white/20 transition-all duration-300
          hover:rotate-90 hover:scale-110"
        aria-label="Close magazine"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Zoom Toggle */}
      <button
        onClick={() => setIsZoomed(!isZoomed)}
        className="absolute top-3 right-14 md:top-4 md:right-16 z-50 p-2 md:p-3 bg-white/10 backdrop-blur-sm 
          rounded-full text-white hover:bg-white/20 transition-all duration-300"
        aria-label={isZoomed ? "Zoom out" : "Zoom in"}
      >
        {isZoomed ? (
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
          </svg>
        ) : (
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
          </svg>
        )}
      </button>

      {/* Magazine Title */}
      <div className="absolute top-3 left-3 md:top-4 md:left-4 z-50 text-white">
        <h3 className="text-sm md:text-lg font-bold">{magazine.title}</h3>
        <p className="text-xs text-gray-400">{magazine.subtitle}</p>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevSpread}
        disabled={currentSpread === 0 || isFlipping}
        className={`absolute left-1 md:left-4 z-40 p-2 md:p-4 rounded-full transition-all duration-300
          ${currentSpread === 0 || isFlipping
            ? 'bg-gray-800/30 text-gray-600 cursor-not-allowed'
            : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:scale-110'
          }`}
        aria-label="Previous page"
      >
        <svg className="w-5 h-5 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNextSpread}
        disabled={currentSpread >= totalSpreads - 1 || isFlipping}
        className={`absolute right-1 md:right-4 z-40 p-2 md:p-4 rounded-full transition-all duration-300
          ${currentSpread >= totalSpreads - 1 || isFlipping
            ? 'bg-gray-800/30 text-gray-600 cursor-not-allowed'
            : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:scale-110'
          }`}
        aria-label="Next page"
      >
        <svg className="w-5 h-5 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Book Container */}
      <div 
        className={`relative transition-transform duration-500 ease-out
          ${isZoomed ? 'scale-110 md:scale-125' : 'scale-100'}`}
        style={{ perspective: '2000px' }}
      >
        {/* Book Wrapper */}
        <div 
          className={`relative flex ${isMobile ? 'flex-col' : ''}`}
          style={{ 
            transformStyle: 'preserve-3d',
            width: isMobile ? '85vw' : '70vw',
            maxWidth: isMobile ? '400px' : '900px',
            height: isMobile ? '70vh' : '70vh',
            maxHeight: isMobile ? '600px' : '600px'
          }}
        >
          {/* Book Spine Shadow */}
          <div className={`absolute ${isMobile ? 'hidden' : 'left-1/2'} top-0 bottom-0 w-4 
            bg-gradient-to-r from-black/30 via-black/10 to-black/30 z-20 -translate-x-1/2`}>
          </div>

          {/* Left Page */}
          <div 
            className={`relative bg-[#faf8f5] overflow-hidden
              ${isMobile ? 'w-full h-1/2 rounded-t-lg' : 'w-1/2 h-full rounded-l-lg'}
              shadow-[inset_-10px_0_30px_rgba(0,0,0,0.15)]`}
            style={{
              transformStyle: 'preserve-3d',
              transform: flipDirection === 'prev' && isFlipping 
                ? 'rotateY(0deg)' 
                : 'rotateY(0deg)'
            }}
          >
            {/* Page Texture */}
            <div className="absolute inset-0 opacity-30 pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                mixBlendMode: 'multiply'
              }}
            />
            
            {/* Page Content */}
            <div className="relative h-full z-10">
              {renderPageContent(currentPages.left, false)}
            </div>

            {/* Page Number */}
            <div className={`absolute ${isMobile ? 'bottom-2 left-1/2 -translate-x-1/2' : 'bottom-3 left-4'} 
              text-xs text-gray-400 z-20`}>
              {currentPages.left?.pageNum || ''}
            </div>

            {/* Folded Corner Effect */}
            <div className={`absolute ${isMobile ? 'top-0 right-0' : 'bottom-0 right-0'} w-6 h-6 md:w-8 md:h-8
              bg-gradient-to-br from-transparent via-gray-200 to-gray-300
              ${isMobile ? 'rounded-bl-lg' : 'rounded-tl-lg'} shadow-inner opacity-60`}>
            </div>
          </div>

          {/* Right Page / Flipping Page */}
          <div 
            className={`relative bg-[#faf8f5] overflow-hidden
              ${isMobile ? 'w-full h-1/2 rounded-b-lg' : 'w-1/2 h-full rounded-r-lg'}
              shadow-[inset_10px_0_30px_rgba(0,0,0,0.1)]
              ${isFlipping ? 'z-30' : 'z-10'}`}
            style={{
              transformStyle: 'preserve-3d',
              transformOrigin: isMobile ? 'top' : 'left',
              transition: isFlipping ? 'transform 0.6s ease-in-out' : 'none',
              transform: isFlipping && flipDirection === 'next'
                ? (isMobile ? 'rotateX(-180deg)' : 'rotateY(-180deg)')
                : isFlipping && flipDirection === 'prev'
                ? (isMobile ? 'rotateX(0deg)' : 'rotateY(0deg)')
                : 'rotateY(0deg)'
            }}
          >
            {/* Page Texture */}
            <div className="absolute inset-0 opacity-30 pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                mixBlendMode: 'multiply'
              }}
            />
            
            {/* Page Content */}
            <div className="relative h-full z-10">
              {renderPageContent(currentPages.right, true)}
            </div>

            {/* Page Number */}
            <div className={`absolute ${isMobile ? 'bottom-2 left-1/2 -translate-x-1/2' : 'bottom-3 right-4'} 
              text-xs text-gray-400 z-20`}>
              {currentPages.right?.pageNum || ''}
            </div>

            {/* Folded Corner Effect */}
            <div className={`absolute ${isMobile ? 'bottom-0 right-0' : 'bottom-0 left-0'} w-6 h-6 md:w-8 md:h-8
              bg-gradient-to-bl from-transparent via-gray-200 to-gray-300
              ${isMobile ? 'rounded-tl-lg' : 'rounded-tr-lg'} shadow-inner opacity-60`}>
            </div>
          </div>
        </div>

        {/* Book Shadow */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-8 
          bg-black/30 blur-xl rounded-full">
        </div>
      </div>

      {/* Page Indicator */}
      <div className="absolute bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 md:gap-4">
        <div className="flex gap-1 md:gap-2">
          {Array.from({ length: totalSpreads }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (!isFlipping) setCurrentSpread(idx);
              }}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300
                ${currentSpread === idx 
                  ? 'bg-white scale-125' 
                  : 'bg-white/30 hover:bg-white/50'}`}
              aria-label={`Go to spread ${idx + 1}`}
            />
          ))}
        </div>
        <span className="text-white/70 text-xs md:text-sm ml-2">
          {currentSpread * 2 + 1}-{Math.min(currentSpread * 2 + 2, magazine.pages.length)} of {magazine.pages.length}
        </span>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-12 md:bottom-16 left-1/2 -translate-x-1/2 
        text-white/50 text-xs hidden md:block">
        Use arrow keys or click arrows to navigate • Press ESC to close
      </div>
    </div>
  );
};

export default MagazineViewer;
