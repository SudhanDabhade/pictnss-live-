/**
 * MasonryGallery Component
 * Displays images in a masonry layout with fade-in on scroll
 * Supports category filtering and lightbox integration
 */

import React, { useState, useEffect, useRef } from 'react';

const MasonryGallery = ({ images, onImageClick }) => {
  const [visibleImages, setVisibleImages] = useState({});
  const observerRef = useRef(null);
  const imageRefs = useRef([]);

  // Intersection Observer for fade-in effect on scroll
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;
            setVisibleImages((prev) => ({ ...prev, [index]: true }));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    imageRefs.current.forEach((ref) => {
      if (ref) observerRef.current.observe(ref);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [images]);

  // Reset refs when images change
  useEffect(() => {
    imageRefs.current = imageRefs.current.slice(0, images.length);
  }, [images]);

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
      {images.map((image, index) => (
        <div
          key={image.id || index}
          ref={(el) => (imageRefs.current[index] = el)}
          data-index={index}
          className={`break-inside-avoid group cursor-pointer 
            transform transition-all duration-500 ease-out
            ${visibleImages[index] 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
            }`}
          style={{ transitionDelay: `${(index % 4) * 100}ms` }}
          onClick={() => onImageClick(index)}
        >
          <div className="relative overflow-hidden rounded-xl bg-softGrey">
            {/* Image */}
            <img
              src={image.src}
              alt={image.title || `Gallery image ${index + 1}`}
              className="w-full h-auto object-cover transform group-hover:scale-110 
                transition-transform duration-500 ease-out"
              loading="lazy"
            />
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 
              flex flex-col justify-end p-4">
              
              {/* Title */}
              {image.title && (
                <h4 className="text-white font-semibold text-lg transform translate-y-4 
                  group-hover:translate-y-0 transition-transform duration-300">
                  {image.title}
                </h4>
              )}
              
              {/* Category */}
              {image.category && (
                <span className="text-white/80 text-sm transform translate-y-4 
                  group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {image.category}
                </span>
              )}
              
              {/* View Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 
                backdrop-blur-sm flex items-center justify-center transform scale-0 
                group-hover:scale-100 transition-transform duration-300">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MasonryGallery;
