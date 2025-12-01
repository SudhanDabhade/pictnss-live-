/**
 * Gallery Page Component
 * Displays images in masonry layout with category filters
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
      <div className="bg-secondary py-12 md:py-16 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
              Photo Gallery
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto animate-slide-up">
              Capturing moments of service, dedication, and community spirit.
              Browse through our collection of memories.
            </p>
            
            {/* Stats */}
            <div className="mt-6 flex justify-center gap-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">{galleryImages.length}</p>
                <p className="text-white/70 text-sm">Photos</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">{categories.length - 1}</p>
                <p className="text-white/70 text-sm">Categories</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filters */}
        <div className="mb-8 animate-fade-in">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                  transform hover:scale-105
                  ${selectedCategory === category
                    ? 'bg-secondary text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-primary hover:text-secondary shadow-card'
                  }`}
              >
                {category}
                {category !== 'All' && (
                  <span className={`ml-1.5 text-xs ${
                    selectedCategory === category ? 'text-white/70' : 'text-gray-400'
                  }`}>
                    ({galleryImages.filter(img => img.category === category).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-center">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-secondary">{filteredImages.length}</span> photos
            {selectedCategory !== 'All' && (
              <> in <span className="font-semibold text-secondary">{selectedCategory}</span></>
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
            <div className="w-24 h-24 mx-auto mb-6 bg-primary/30 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-textDark mb-2">No Photos Found</h3>
            <p className="text-gray-600">
              There are no photos in this category yet.
            </p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="mt-4 px-6 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90 
                transition-colors duration-200"
            >
              View All Photos
            </button>
          </div>
        )}

        {/* Load More Placeholder */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            📷 More photos coming soon!
          </p>
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
