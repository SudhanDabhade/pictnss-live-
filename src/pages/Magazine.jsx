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

      {/* Coming Soon Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 text-center animate-fadeIn">
          {/* Icon */}
          <div className="w-20 h-20 bg-gradient-to-br from-secondary to-[#3d40a8] 
            rounded-2xl flex items-center justify-center shadow-lg shadow-secondary/30 mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-textDark mb-4">
            Coming Soon
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto mb-6">
            Our NSS magazines are being digitized and will be available here shortly. 
            Stay tuned for our annual publications documenting the journey of service and community impact.
          </p>
          
          {/* Decorative dots */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-secondary/60 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-secondary/30 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>

          <p className="text-gray-400 text-sm">
            📖 Check back soon for our complete magazine archive
          </p>
        </div>
      </div>

      {/* ===== ORIGINAL CONTENT — COMMENTED OUT FOR FUTURE USE ===== */}
      {/*
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
              <button
                onClick={() => setSelectedMagazine(magazine)}
                className="relative w-full group cursor-pointer"
                style={{ perspective: '1000px' }}
              >
                ... Magazine card content ...
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-20">
        ... Archive Info section ...
      </div>

      {selectedMagazine && (
        <MagazineViewer 
          magazine={selectedMagazine} 
          onClose={() => setSelectedMagazine(null)} 
        />
      )}
      */}

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
