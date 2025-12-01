/**
 * ActivityYear Page Component
 * Displays grid of activity cards for a specific year
 * Features hover effects and responsive design
 */

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ActivityCard from '../components/ActivityCard';
import { getActivitiesByYear, getActivityYears } from '../data/activities';

const ActivityYear = () => {
  const { year } = useParams();
  
  // Fetch activities for the selected year
  const activities = getActivitiesByYear(year);
  const allYears = getActivityYears();
  
  // Check if year exists in data
  const yearExists = allYears.includes(parseInt(year));

  if (!yearExists) {
    return (
      <div className="min-h-screen bg-softGrey pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-textDark mb-4">Year Not Found</h1>
          <p className="text-gray-600 mb-6">
            We don't have any activities recorded for {year}.
          </p>
          <Link
            to="/activities"
            className="inline-flex items-center px-6 py-3 bg-secondary text-white font-semibold 
              rounded-xl hover:bg-secondary/90 transition-all duration-200"
          >
            View All Years
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-softGrey pt-24 pb-16">
      {/* Page Header */}
      <div className="bg-secondary py-12 md:py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-white/60 mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/activities" className="hover:text-white transition-colors">Activities</Link>
            <span>/</span>
            <span className="text-white">{year}</span>
          </nav>
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 animate-fade-in">
                Activities {year}
              </h1>
              <p className="text-white/80 text-lg animate-slide-up">
                {activities.length} activit{activities.length === 1 ? 'y' : 'ies'} conducted this year
              </p>
            </div>
            
            {/* Year Navigation */}
            <div className="mt-6 md:mt-0 flex items-center space-x-2">
              <span className="text-white/60 text-sm">Jump to:</span>
              <div className="flex space-x-1">
                {allYears.map((y) => (
                  <Link
                    key={y}
                    to={`/activities/${y}`}
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200
                      ${parseInt(year) === y 
                        ? 'bg-white text-secondary' 
                        : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                  >
                    {y}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Activities Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {activities.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <div
                key={activity.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ActivityCard activity={activity} basePath="/activities" />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-6 bg-primary/30 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-textDark mb-2">No Activities Found</h3>
            <p className="text-gray-600">
              There are no recorded activities for {year} yet.
            </p>
          </div>
        )}

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link
            to="/activities"
            className="inline-flex items-center px-6 py-3 bg-white text-secondary font-semibold 
              rounded-xl shadow-card hover:shadow-card-hover transform hover:-translate-y-1
              transition-all duration-200 group"
          >
            <svg 
              className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Years
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ActivityYear;
