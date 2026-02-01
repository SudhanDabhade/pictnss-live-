/**
 * SchoolTeachingDetails Page Component
 * Displays detailed information about a specific Saturday teaching session
 * Includes: Banner, Learning Outcomes, Full Description, and Gallery
 */

import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getTeachingSessionById } from '../data/schoolteaching'; // Ensure this import path is correct
import Lightbox from '../components/Lightbox';

const SchoolTeachingDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // State for lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Fetch session data
  const session = getTeachingSessionById(id);

  // Handle case where session is not found
  if (!session) {
    return (
      <div className="min-h-screen bg-softGrey pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-textDark mb-4">Session Not Found</h1>
          <p className="text-gray-600 mb-6">The teaching session you are looking for does not exist.</p>
          <Link
            to="/school-teaching"
            className="inline-flex items-center px-6 py-3 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary/90 transition-all duration-200"
          >
            Back to School Teaching
          </Link>
        </div>
      </div>
    );
  }

  // Prepare gallery images for lightbox
  const galleryImages = session.gallery.map((src, index) => ({
    src,
    title: `${session.title} - Image ${index + 1}`,
    category: 'School Teaching',
  }));

  // Lightbox handlers
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  
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
      
      {/* --- Banner Section --- */}
      <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
        <img
          src={session.thumbnail}
          alt={session.title}
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
              <Link to="/school-teaching" className="hover:text-white transition-colors">School Teaching</Link>
              <span>/</span>
              <span className="text-white truncate max-w-[200px]">{session.title}</span>
            </nav>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-4">
               <span className="bg-primary/90 text-secondary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                 {session.subject}
               </span>
               <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold border border-white/30">
                 {session.targetClass}
               </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 animate-fade-in">
              {session.title}
            </h1>
            
            {/* Meta Data */}
            <div className="flex flex-wrap gap-4 md:gap-8 text-white/90 font-medium">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {session.date}
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                {session.schoolName}
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {session.volunteers} Volunteers
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Main Content --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Left Column: Description & Outcome */}
          <div className="lg:col-span-2">
            
            {/* Learning Outcome Card */}
            <div className="bg-green-50 rounded-2xl p-6 border border-green-100 mb-8 animate-fade-in shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-green-800 mb-1">Learning Outcome</h3>
                  <p className="text-green-700 leading-relaxed">
                    {session.learningOutcome}
                  </p>
                </div>
              </div>
            </div>

            {/* Main Description */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-card animate-fade-in mb-8">
              <h2 className="text-2xl font-bold text-textDark mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Session Details
              </h2>
              
              <div className="prose prose-lg max-w-none text-gray-600">
                {session.description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Gallery Section */}
            {session.gallery && session.gallery.length > 0 && (
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-card animate-slide-up">
                <h2 className="text-2xl font-bold text-textDark mb-6 flex items-center gap-2">
                  <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Classroom Gallery
                </h2>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {session.gallery.map((image, index) => (
                    <div
                      key={index}
                      onClick={() => openLightbox(index)}
                      className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer
                        shadow-card hover:shadow-card-hover transition-all duration-300"
                    >
                      <img
                        src={image}
                        alt={`${session.title} gallery ${index + 1}`}
                        className="w-full h-full object-cover transform group-hover:scale-110 
                          transition-transform duration-500"
                      />
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

          {/* Right Column: Sidebar Stats */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-card animate-fade-in sticky top-24">
              <h3 className="text-lg font-bold text-textDark mb-4 border-b border-gray-100 pb-2">Overview</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-softGrey rounded-xl">
                  <span className="text-gray-500 text-sm">Class Taught</span>
                  <span className="font-semibold text-secondary text-right">{session.targetClass}</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-softGrey rounded-xl">
                  <span className="text-gray-500 text-sm">Subject</span>
                  <span className="font-semibold text-secondary text-right">{session.subject}</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-softGrey rounded-xl">
                  <span className="text-gray-500 text-sm">Volunteers</span>
                  <span className="font-semibold text-secondary text-right">{session.volunteers}</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-softGrey rounded-xl">
                  <span className="text-gray-500 text-sm">Photos</span>
                  <span className="font-semibold text-secondary text-right">{session.gallery?.length || 0}</span>
                </div>
              </div>

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
                Back to List
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* --- Lightbox --- */}
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

export default SchoolTeachingDetails;