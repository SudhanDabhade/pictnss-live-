/**
 * Lightbox Component
 * Full-screen image viewer with navigation
 * Features dark overlay, zoom effect, and keyboard navigation
 */

import React, { useEffect, useCallback } from 'react';

const Lightbox = ({ images, currentIndex, onClose, onPrev, onNext }) => {
  // Handle keyboard navigation
  const handleKeyDown = useCallback((e) => {
    switch (e.key) {
      case 'Escape':
        onClose();
        break;
      case 'ArrowLeft':
        onPrev();
        break;
      case 'ArrowRight':
        onNext();
        break;
      default:
        break;
    }
  }, [onClose, onPrev, onNext]);

  // Add keyboard event listener
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [handleKeyDown]);

  // Handle overlay click (close lightbox)
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const currentImage = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center animate-fade-in"
      onClick={handleOverlayClick}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm"></div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 
          hover:bg-white/20 text-white transition-all duration-200 
          hover:rotate-90 hover:scale-110"
        aria-label="Close lightbox"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Previous Button */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full 
          bg-white/10 hover:bg-white/20 text-white transition-all duration-200 
          hover:scale-110 group"
        aria-label="Previous image"
      >
        <svg 
          className="w-6 h-6 transform group-hover:-translate-x-0.5 transition-transform" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full 
          bg-white/10 hover:bg-white/20 text-white transition-all duration-200 
          hover:scale-110 group"
        aria-label="Next image"
      >
        <svg 
          className="w-6 h-6 transform group-hover:translate-x-0.5 transition-transform" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Image Container */}
      <div className="relative max-w-[90vw] max-h-[85vh] z-40 animate-scale-up">
        <img
          src={currentImage.src || currentImage}
          alt={currentImage.title || `Image ${currentIndex + 1}`}
          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
        />
        
        {/* Image Info */}
        {(currentImage.title || currentImage.category) && (
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent rounded-b-lg">
            {currentImage.title && (
              <h3 className="text-white font-semibold text-lg">{currentImage.title}</h3>
            )}
            {currentImage.category && (
              <p className="text-white/70 text-sm">{currentImage.category}</p>
            )}
          </div>
        )}
      </div>

      {/* Image Counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 
        bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Thumbnail Strip (optional) */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-50 
        flex space-x-2 max-w-[80vw] overflow-x-auto py-2 px-4 
        bg-black/30 rounded-xl backdrop-blur-sm">
        {images.slice(Math.max(0, currentIndex - 3), Math.min(images.length, currentIndex + 4)).map((img, idx) => {
          const actualIndex = Math.max(0, currentIndex - 3) + idx;
          return (
            <button
              key={actualIndex}
              onClick={(e) => {
                e.stopPropagation();
                // Navigate to this image
                const diff = actualIndex - currentIndex;
                if (diff > 0) {
                  for (let i = 0; i < diff; i++) onNext();
                } else {
                  for (let i = 0; i < Math.abs(diff); i++) onPrev();
                }
              }}
              className={`flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden transition-all duration-200
                ${actualIndex === currentIndex 
                  ? 'ring-2 ring-white scale-110' 
                  : 'opacity-60 hover:opacity-100'
                }`}
            >
              <img
                src={img.src || img}
                alt={`Thumbnail ${actualIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Lightbox;
