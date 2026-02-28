/**
 * SchoolTeaching Page Component
 * Displays weekly Saturday teaching sessions
 * Features filtering by year and learning outcome highlights
 */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTeachingSessionsByYear, getTeachingYears } from '../data/schoolteaching';

const SchoolTeaching = () => {
  // Get available years, default to the latest
  const years = getTeachingYears();
  const [activeYear, setActiveYear] = useState(years[0] || 2026);
  const [sessions, setSessions] = useState([]);

  // Update sessions when year changes
  useEffect(() => {
    setSessions(getTeachingSessionsByYear(activeYear));
  }, [activeYear]);

  return (
    <div className="min-h-screen bg-softGrey pt-24 pb-16">
      
      {/* --- Page Header --- */}
      <div className="relative bg-secondary py-16 md:py-20 mb-12 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/10 rounded-full blur-2xl transform -translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full mb-6 border border-primary/30">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white font-medium text-sm">Every Saturday Activity</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
                School Teaching
              </h1>
              <p className="text-white/80 text-lg max-w-xl animate-slide-up">
                Bridging the educational gap by dedicating our weekends to teach, mentor, and inspire students at adopted schools.
              </p>
            </div>

            {/* Stats Box */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 min-w-[280px] animate-fade-in">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-secondary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">Weekly</p>
                  <p className="text-white/60 text-sm">Consistently</p>
                </div>
              </div>
              <div className="h-px bg-white/20 my-4"></div>
              <div className="flex justify-between text-sm text-white/80">
                <span>Impact</span>
                <span className="font-semibold text-white">500+ Students</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Year Filter --- */}
        <div className="flex flex-wrap items-center gap-4 mb-10 animate-fade-in">
          <span className="text-gray-500 font-medium">Select Year:</span>
          <div className="flex flex-wrap gap-2">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:-translate-y-0.5
                  ${activeYear === year 
                    ? 'bg-secondary text-white shadow-lg shadow-secondary/30' 
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                  }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* --- Sessions Grid --- */}
        {sessions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sessions.map((session, index) => (
              <div 
                key={session.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 animate-slide-up flex flex-col h-full"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Thumbnail - Now links to Details Page */}
                <Link 
                  to={`/school-teaching/${session.id}`}
                  className="relative h-48 overflow-hidden cursor-pointer block"
                >
                  <img 
                    src={session.thumbnail} 
                    alt={session.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  
                  {/* Date Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-sm font-bold text-secondary shadow-sm">
                    {session.date}
                  </div>

                  {/* View Details Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-secondary/90 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Read More
                    </span>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-blue-50 text-blue-700">
                      {session.subject}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-purple-50 text-purple-700">
                      Class: {session.targetClass}
                    </span>
                  </div>

                  <Link to={`/school-teaching/${session.id}`}>
                    <h3 className="text-xl font-bold text-textDark mb-3 group-hover:text-secondary transition-colors">
                      {session.title}
                    </h3>
                  </Link>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                    {session.shortDescription}
                  </p>

                  {/* Learning Outcome Box */}
                  <div className="bg-green-50 rounded-xl p-4 mb-4 border border-green-100">
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="text-xs font-bold text-green-800 uppercase tracking-wide mb-1">Learning Outcome</p>
                        <p className="text-sm text-green-700 leading-snug">
                          {session.learningOutcome}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Footer Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                    <div className="flex items-center text-gray-500 text-sm">
                      <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {session.volunteers} Volunteers
                    </div>
                    
                    <Link 
                      to={`/school-teaching/${session.id}`}
                      className="text-secondary text-sm font-semibold hover:text-accent transition-colors flex items-center"
                    >
                      Details
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100">
            <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">No Sessions Recorded</h3>
            <p className="text-gray-500">We don't have teaching records for {activeYear} yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SchoolTeaching;