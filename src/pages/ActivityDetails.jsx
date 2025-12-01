/**
 * ActivityDetails Page Component
 * Displays detailed information about a specific activity
 * Includes banner, description, and photo gallery
 */

import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getActivityById } from '../data/activities';
import Lightbox from '../components/Lightbox';

const ActivityDetails = () => {
  const { year, id } = useParams();
  const navigate = useNavigate();
  
  // State for lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Fetch activity data by ID
  const activity = getActivityById(id);

  // Handle case where activity is not found
  if (!activity) {
    return (
      <div className="min-h-screen bg-softGrey pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-textDark mb-4">Activity Not Found</h1>
          <p className="text-gray-600 mb-6">
            The activity you're looking for doesn't exist.
          </p>
          <Link
            to={`/activities/${year}`}
            className="inline-flex items-center px-6 py-3 bg-secondary text-white font-semibold 
              rounded-xl hover:bg-secondary/90 transition-all duration-200"
          >
            Back to Activities
          </Link>
        </div>
      </div>
    );
  }

  // Prepare gallery images for lightbox
  const galleryImages = activity.gallery.map((src, index) => ({
    src,
    title: `${activity.title} - Image ${index + 1}`,
    category: activity.title,
  }));

  // Lightbox handlers
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-softGrey pt-20">
      {/* Banner Section */}
      <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
        <img
          src={activity.thumbnail}
          alt={activity.title}
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-white/60 mb-4 text-sm">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/activities" className="hover:text-white transition-colors">Activities</Link>
              <span>/</span>
              <Link to={`/activities/${year}`} className="hover:text-white transition-colors">{year}</Link>
              <span>/</span>
              <span className="text-white">{activity.title}</span>
            </nav>
            
            {/* Title & Meta */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 animate-fade-in">
              {activity.title}
            </h1>
            
            <div className="flex flex-wrap gap-4 text-white/80">
              {/* Date */}
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {activity.date}
              </div>
              
              {/* Location */}
              {activity.location && (
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {activity.location}
                </div>
              )}
              
              {/* Volunteers */}
              {activity.volunteers && (
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {activity.volunteers} Volunteers
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Description */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-card animate-fade-in">
              <h2 className="text-2xl font-bold text-textDark mb-6">About This Activity</h2>
              
              <div className="prose prose-lg max-w-none text-gray-600">
                {activity.description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Gallery Section */}
            {activity.gallery && activity.gallery.length > 0 && (
              <div className="mt-8 bg-white rounded-2xl p-6 md:p-8 shadow-card animate-slide-up">
                <h2 className="text-2xl font-bold text-textDark mb-6">Photo Gallery</h2>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {activity.gallery.map((image, index) => (
                    <div
                      key={index}
                      onClick={() => openLightbox(index)}
                      className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer
                        shadow-card hover:shadow-card-hover transition-all duration-300"
                    >
                      <img
                        src={image}
                        alt={`${activity.title} gallery ${index + 1}`}
                        className="w-full h-full object-cover transform group-hover:scale-110 
                          transition-transform duration-500"
                      />
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/40 
                        transition-all duration-300 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center
                          transform scale-0 group-hover:scale-100 transition-transform duration-300">
                          <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Quick Stats Card */}
            <div className="bg-white rounded-2xl p-6 shadow-card animate-fade-in sticky top-24">
              <h3 className="text-lg font-bold text-textDark mb-4">Quick Stats</h3>
              
              <div className="space-y-4">
                {/* Year */}
                <div className="flex items-center justify-between p-3 bg-softGrey rounded-xl">
                  <span className="text-gray-600">Year</span>
                  <span className="font-semibold text-secondary">{activity.year}</span>
                </div>
                
                {/* Volunteers */}
                {activity.volunteers && (
                  <div className="flex items-center justify-between p-3 bg-softGrey rounded-xl">
                    <span className="text-gray-600">Volunteers</span>
                    <span className="font-semibold text-secondary">{activity.volunteers}</span>
                  </div>
                )}
                
                {/* Photos */}
                <div className="flex items-center justify-between p-3 bg-softGrey rounded-xl">
                  <span className="text-gray-600">Photos</span>
                  <span className="font-semibold text-secondary">{activity.gallery?.length || 0}</span>
                </div>
              </div>

              {/* Back Button */}
              <button
                onClick={() => navigate(-1)}
                className="w-full mt-6 inline-flex items-center justify-center px-6 py-3 
                  bg-secondary text-white font-semibold rounded-xl 
                  hover:bg-secondary/90 transform hover:scale-[1.02] 
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
                Go Back
              </button>

              {/* Share Links */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500 mb-3">Share this activity</p>
                <div className="flex space-x-2">
                  <button className="w-10 h-10 rounded-full bg-softGrey text-gray-600 
                    hover:bg-secondary hover:text-white flex items-center justify-center 
                    transition-all duration-200">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-softGrey text-gray-600 
                    hover:bg-secondary hover:text-white flex items-center justify-center 
                    transition-all duration-200">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-softGrey text-gray-600 
                    hover:bg-secondary hover:text-white flex items-center justify-center 
                    transition-all duration-200">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={galleryImages}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </div>
  );
};

export default ActivityDetails;
