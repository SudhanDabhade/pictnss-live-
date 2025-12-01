/**
 * Magazine Page
 * Displays year-wise magazine cards styled like thin booklets
 * Uses NSS Blue and Red accents
 */

import React, { useState } from 'react';
import { magazines } from '../data/magazine';
import MagazineViewer from '../components/MagazineViewer';

const Magazine = () => {
  const [selectedMagazine, setSelectedMagazine] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-softGrey via-white to-primary/20 pt-28 pb-20">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-16">
        <div className="text-center animate-fadeIn">
          {/* Title Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary rounded-full mb-6">
            <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span className="text-secondary font-medium text-sm">Digital Yearbooks</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-textDark mb-4">
            NSS <span className="text-secondary">Magazine</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-6">
            Explore our annual publications showcasing the journey of service, 
            dedication, and community impact through the years.
          </p>
          
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-1 bg-secondary rounded-full"></div>
            <div className="w-3 h-3 bg-accent rounded-full"></div>
            <div className="w-12 h-1 bg-secondary rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Magazine Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
          {magazines.map((magazine, index) => (
            <div
              key={magazine.id}
              className="animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(magazine.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Booklet Card */}
              <button
                onClick={() => setSelectedMagazine(magazine)}
                className="relative w-full group cursor-pointer"
                style={{ perspective: '1000px' }}
              >
                {/* Book Container */}
                <div 
                  className="relative mx-auto transition-all duration-500 ease-out"
                  style={{
                    width: '180px',
                    height: '240px',
                    transformStyle: 'preserve-3d',
                    transform: hoveredCard === magazine.id 
                      ? 'rotateY(-15deg) translateZ(20px)' 
                      : 'rotateY(0deg)'
                  }}
                >
                  {/* Book Spine */}
                  <div 
                    className="absolute left-0 top-0 h-full w-4 origin-left
                      bg-gradient-to-r from-[#1e2063] to-secondary
                      rounded-l-sm shadow-lg"
                    style={{
                      transform: 'rotateY(-90deg) translateX(-8px)',
                      transformOrigin: 'right'
                    }}
                  >
                    <div className="h-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold writing-vertical transform rotate-180"
                        style={{ writingMode: 'vertical-rl' }}>
                        {magazine.year}
                      </span>
                    </div>
                  </div>

                  {/* Book Cover */}
                  <div className="relative w-full h-full rounded-r-md rounded-l-sm overflow-hidden
                    shadow-[4px_4px_20px_rgba(0,0,0,0.3)]
                    group-hover:shadow-[8px_8px_30px_rgba(46,49,145,0.4)]
                    transition-shadow duration-500">
                    
                    {/* Cover Image */}
                    <div className="absolute inset-0">
                      <img 
                        src={magazine.coverImage} 
                        alt={magazine.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t 
                        from-secondary via-secondary/60 to-transparent"></div>
                    </div>

                    {/* Cover Content */}
                    <div className="relative h-full flex flex-col justify-between p-4">
                      {/* Top Section */}
                      <div>
                        {/* NSS Badge */}
                        <div className="inline-flex items-center gap-1 px-2 py-1 
                          bg-accent rounded text-white text-xs font-bold mb-2">
                          <span>NSS</span>
                        </div>
                        
                        {/* Year */}
                        <div className="text-6xl font-black text-white/90 leading-none
                          drop-shadow-lg">
                          {magazine.year}
                        </div>
                      </div>

                      {/* Bottom Section */}
                      <div>
                        <h3 className="text-white font-bold text-lg mb-1 drop-shadow-lg">
                          {magazine.title}
                        </h3>
                        <p className="text-primary text-xs line-clamp-2">
                          {magazine.subtitle}
                        </p>
                        
                        {/* Page Count */}
                        <div className="mt-3 flex items-center gap-2 text-white/70 text-xs">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                          </svg>
                          <span>{magazine.totalPages} pages</span>
                        </div>
                      </div>
                    </div>

                    {/* Edge Effect - Multiple Pages */}
                    <div className="absolute right-0 top-0 bottom-0 w-1">
                      <div className="h-full flex flex-col justify-between py-2">
                        {[...Array(10)].map((_, i) => (
                          <div key={i} className="h-0.5 bg-gray-300/50 
                            group-hover:bg-gray-200/70 transition-colors"></div>
                        ))}
                      </div>
                    </div>

                    {/* Shine Effect on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent 
                      via-white/20 to-transparent opacity-0 group-hover:opacity-100
                      transition-opacity duration-500 pointer-events-none"
                      style={{
                        transform: 'translateX(-100%) skewX(-15deg)',
                        animation: hoveredCard === magazine.id 
                          ? 'shine 0.8s ease-out forwards' 
                          : 'none'
                      }}
                    ></div>
                  </div>

                  {/* Book Shadow */}
                  <div className="absolute -bottom-2 left-2 right-2 h-4 
                    bg-black/20 blur-md rounded-full
                    group-hover:bg-blue-900/30 transition-colors duration-500"></div>
                </div>

                {/* Read Button - Appears on Hover */}
                <div className={`mt-4 text-center transition-all duration-300
                  ${hoveredCard === magazine.id 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-2'}`}>
                  <span className="inline-flex items-center gap-2 px-4 py-2 
                    bg-gradient-to-r from-secondary to-[#3d40a8] 
                    text-white text-sm font-medium rounded-full
                    shadow-lg shadow-secondary/30">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Read Magazine
                  </span>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section - Archive Info */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-20">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Icon */}
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-secondary to-[#3d40a8] 
              rounded-2xl flex items-center justify-center shadow-lg shadow-secondary/30 flex-shrink-0">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            
            {/* Content */}
            <div className="text-center md:text-left flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-textDark mb-2">
                Complete Archive
              </h3>
              <p className="text-gray-600">
                Browse through 5 years of NSS magazines documenting our journey of service, 
                community building, and social responsibility. Each edition captures the spirit 
                of "Not Me, But You".
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-6 md:gap-8">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-secondary">5</p>
                <p className="text-sm text-gray-500">Editions</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-accent">92</p>
                <p className="text-sm text-gray-500">Pages</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Magazine Viewer Modal */}
      {selectedMagazine && (
        <MagazineViewer 
          magazine={selectedMagazine} 
          onClose={() => setSelectedMagazine(null)} 
        />
      )}

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Magazine;
