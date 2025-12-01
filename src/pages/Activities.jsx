/**
 * Activities Page Component
 * Displays all available years in a grid format
 * Each year box navigates to that year's activities
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { getActivityYears } from '../data/activities';

// Get available years from data
const years = getActivityYears();

const Activities = () => {
  return (
    <div className="min-h-screen bg-softGrey pt-24 pb-16">
      {/* Page Header */}
      <div className="bg-secondary py-12 md:py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
              Our Activities
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto animate-slide-up">
              Explore our diverse range of social service activities organized over the years.
              Each initiative reflects our commitment to community development.
            </p>
          </div>
        </div>
      </div>

      {/* Years Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {years.map((year, index) => (
            <Link
              key={year}
              to={`/activities/${year}`}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-card 
                hover:shadow-card-hover transform hover:-translate-y-2 hover:scale-105 
                transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 
                group-hover:from-secondary/20 group-hover:to-secondary/5 transition-all duration-300"></div>
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-secondary/10 rounded-bl-full 
                transform translate-x-4 -translate-y-4 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-primary/50 rounded-tr-full 
                transform -translate-x-4 translate-y-4 group-hover:scale-150 transition-transform duration-500"></div>
              
              {/* Content */}
              <div className="relative p-8 text-center min-h-[180px] flex flex-col items-center justify-center">
                {/* Year */}
                <h2 className="text-5xl md:text-6xl font-bold text-secondary mb-2 
                  group-hover:scale-110 transition-transform duration-300">
                  {year}
                </h2>
                
                {/* Subtitle */}
                <p className="text-gray-600 font-medium">Activities</p>
                
                {/* Arrow Icon */}
                <div className="mt-4 w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center 
                  transform group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  <svg 
                    className="w-5 h-5 text-secondary group-hover:text-white transform 
                      group-hover:translate-x-1 transition-all duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Info Text */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Click on any year to explore the activities conducted during that period.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Activities;
