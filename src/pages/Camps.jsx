/**
 * Camps Page Component
 * Displays all available years for NSS camps
 * Nature-themed design with green aesthetic
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { getCampYears } from '../data/camps';

// Get available years from data
const years = getCampYears();

const Camps = () => {
  return (
    <div className="min-h-screen bg-softGrey pt-24 pb-16">
      {/* Page Header with Nature Theme */}
      <div className="relative bg-secondary py-16 md:py-24 mb-12 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="tree-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M10 0 L15 10 L5 10 Z" fill="currentColor" />
                <rect x="8" y="10" width="4" height="5" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tree-pattern)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Camp Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/30 rounded-full mb-6">
              {/*<svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                  d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
              </svg>*/}
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tent-tree-icon lucide-tent-tree">
                <circle cx="4" cy="4" r="2"/>
                <path d="m14 5 3-3 3 3"/><path d="m14 10 3-3 3 3"/><path d="M17 14V2"/>
                <path d="M17 14H7l-5 8h20Z"/><path d="M8 14v8"/><path d="m9 14 5 8"/>
              </svg>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
              NSS Special Camps
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto animate-slide-up">
              Experience transformative week-long residential camps where volunteers 
              engage in community development, rural immersion, and holistic learning.
            </p>
            
            {/* Camp Stats */}
            <div className="mt-8 flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">7</p>
                <p className="text-white/70 text-sm">Days of Service</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">100+</p>
                <p className="text-white/70 text-sm">Volunteers Each Year</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">5+</p>
                <p className="text-white/70 text-sm">Villages Adopted</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80V40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0Z" fill="#F6F6F6" />
          </svg>
        </div>
      </div>

      {/* Years Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {years.map((year, index) => (
            <Link
              key={year}
              to={`/camps/${year}`}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-card 
                hover:shadow-card-hover transform hover:-translate-y-3 
                transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Nature Image Background */}
              <div className="absolute inset-0 opacity-50 group-hover:opacity-30 transition-opacity duration-200">
                <img 
                  //src={`https://images.unsplash.com/photo-${469474968028 + index}-56623f02e42e?w=400&h=300&fit=crop`}
                  src="https://i.pinimg.com/originals/d3/5c/41/d35c410cdc733d720f1a24830639679f.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative p-8 text-center min-h-[200px] flex flex-col items-center justify-center">
                {/* Camp Icon */}
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4
                  group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                  {/*<svg className="w-7 h-7 text-secondary group-hover:text-white transition-colors" 
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>*/}
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tent-tree-icon lucide-tent-tree">
                    <circle cx="4" cy="4" r="2"/>
                    <path d="m14 5 3-3 3 3"/><path d="m14 10 3-3 3 3"/><path d="M17 14V2"/>
                    <path d="M17 14H7l-5 8h20Z"/><path d="M8 14v8"/><path d="m9 14 5 8"/>
                  </svg>
                </div>
                
                {/* Year */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-secondary mb-1 
                  group-hover:scale-110 transition-transform duration-300">
                  {year}
                </h2>
                
                {/* Subtitle */}
                <p className="text-gray-800 font-bold">NSS Camp</p>
                
                {/* View Link */}
                <div className="mt-4 flex items-center text-secondary font-medium text-sm 
                  opacity-0 group-hover:opacity-100 transition-all duration-300 transform 
                  translate-y-2 group-hover:translate-y-0">
                  <span>View Details</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-card">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-textDark mb-4">What is NSS Special Camp?</h3>
              <p className="text-gray-600 mb-4">
                The NSS Special Camp is an intensive seven-day residential program conducted 
                annually in adopted villages. It provides students with hands-on experience 
                in community development and social service.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Rural immersion and community living
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Infrastructure development projects
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Health and education awareness programs
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Cultural exchange and team building
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&h=400&fit=crop"
                alt="NSS Camp"
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-secondary text-white px-6 py-3 rounded-xl shadow-lg">
                <p className="font-bold">7 Days</p>
                <p className="text-sm text-white/80">of transformation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Camps;