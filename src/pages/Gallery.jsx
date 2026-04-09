/**
 * Gallery Page Component
 * Displays all NSS photos in masonry layout with category filters
 * Includes lightbox for full-screen image viewing
 */

import React, { useState, useMemo } from 'react';
import MasonryGallery from '../components/MasonryGallery';
import Lightbox from '../components/Lightbox';
import { galleryImages, getCategories } from '../data/gallery';

const Gallery = () => {
  // State for category filter
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // State for lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Get all categories
  const categories = getCategories();
  
  // Filter images based on selected category
  const filteredImages = useMemo(() => {
    if (selectedCategory === 'All') return galleryImages;
    return galleryImages.filter(img => img.category === selectedCategory);
  }, [selectedCategory]);

  // Lightbox handlers
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-softGrey pt-24 pb-16">
      {/* Page Header */}
      <div 
        className="relative py-16 md:py-20 mb-8 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1a1a6e 0%, #2d2f8e 30%, #4a3fba 60%, #6c5ce7 100%)',
        }}
      >
        {/* Decorative floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, white 0%, transparent 70%)' }} />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, white 0%, transparent 70%)' }} />
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse" />
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white/15 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-white/25 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
              style={{ background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)' }}>
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Live Collection
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4"
              style={{ textShadow: '0 4px 30px rgba(0,0,0,0.3)' }}>
              Photo Gallery
            </h1>
            <p className="text-white/75 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Capturing moments of service, dedication, and community spirit.
              Browse through our collection of memories.
            </p>
            
            {/* Stats */}
            <div className="mt-8 flex justify-center gap-12">
              <div className="text-center">
                <p className="text-4xl font-black text-white" 
                  style={{ textShadow: '0 0 40px rgba(106, 90, 205, 0.8)' }}>
                  {galleryImages.length}
                </p>
                <p className="text-white/60 text-sm font-medium mt-1 uppercase tracking-wider">Photos</p>
              </div>
              <div className="w-px bg-white/20 self-stretch" />
              <div className="text-center">
                <p className="text-4xl font-black text-white"
                  style={{ textShadow: '0 0 40px rgba(106, 90, 205, 0.8)' }}>
                  {categories.length - 1}
                </p>
                <p className="text-white/60 text-sm font-medium mt-1 uppercase tracking-wider">Categories</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L48 54C96 48 192 36 288 30C384 24 480 24 576 28C672 32 768 40 864 42C960 44 1056 40 1152 34C1248 28 1344 20 1392 16L1440 12V60H0Z" 
              fill="#f5f5f5"/>
          </svg>
        </div>
      </div>

      {/* Category Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 animate-fade-in">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300
                  transform hover:scale-105 hover:-translate-y-0.5
                  ${selectedCategory === category
                    ? 'text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:text-white shadow-md hover:shadow-lg'
                  }`}
                style={{
                  background: selectedCategory === category
                    ? 'linear-gradient(135deg, #1a1a6e, #4a3fba)'
                    : undefined,
                  boxShadow: selectedCategory === category
                    ? '0 8px 25px rgba(74, 63, 186, 0.35)'
                    : undefined,
                  ...(selectedCategory !== category ? {} : {}),
                }}
                onMouseEnter={(e) => {
                  if (selectedCategory !== category) {
                    e.target.style.background = 'linear-gradient(135deg, #2d2f8e, #6c5ce7)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== category) {
                    e.target.style.background = 'white';
                  }
                }}
              >
                {category}
                {category !== 'All' && (
                  <span className={`ml-2 text-xs ${
                    selectedCategory === category ? 'text-white/70' : 'text-gray-400'
                  }`}>
                    ({galleryImages.filter(img => img.category === category).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="mb-8 text-center">
          <p className="text-gray-500 text-sm font-medium">
            Showing <span className="font-bold text-gray-800">{filteredImages.length}</span> photos
            {selectedCategory !== 'All' && (
              <> in <span className="font-bold" style={{ color: '#4a3fba' }}>{selectedCategory}</span></>
            )}
          </p>
        </div>

        {/* Gallery Grid */}
        {filteredImages.length > 0 ? (
          <MasonryGallery 
            images={filteredImages} 
            onImageClick={openLightbox}
          />
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, rgba(106,90,205,0.1), rgba(74,63,186,0.15))' }}>
              <svg className="w-12 h-12" style={{ color: '#4a3fba' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No Photos Found</h3>
            <p className="text-gray-600">
              There are no photos in this category yet.
            </p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="mt-4 px-6 py-2.5 text-white rounded-lg font-medium
                transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #1a1a6e, #4a3fba)' }}
            >
              View All Photos
            </button>
          </div>
        )}

        {/* Footer note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white shadow-md">
            <span className="text-lg">📷</span>
            <p className="text-gray-500 text-sm font-medium">
              {galleryImages.length} photos from NSS activities, school teaching & camps
            </p>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={filteredImages}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </div>
  );
};

export default Gallery;
