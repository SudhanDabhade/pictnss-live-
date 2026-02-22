/**
 * SchoolTeachingDetails Page Component
 * Displays detailed information about a specific Saturday teaching session
 * Updated to include Class-wise Activity Log
 */

import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getTeachingSessionById } from '../data/schoolteaching'; 
import Lightbox from '../components/Lightbox';

const SchoolTeachingDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // State for lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Fetch session data
  const session = getTeachingSessionById(id);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle case where session is not found
  if (!session) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Session Not Found</h1>
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
  const galleryImages = session.gallery ? session.gallery.map((src, index) => ({
    src,
    title: `${session.title} - Image ${index + 1}`,
    category: 'School Teaching',
  })) : [];

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
    <div className="min-h-screen bg-gray-50 pt-20">
      
      {/* --- Banner Section --- */}
      <div className="relative h-[350px] md:h-[450px] lg:h-[500px]">
        <img
          src={session.thumbnail}
          alt={session.title}
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-white/70 mb-6 text-sm">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/school-teaching" className="hover:text-white transition-colors">School Teaching</Link>
              <span>/</span>
              <span className="text-white truncate max-w-[200px]">{session.weekLabel || 'Session Details'}</span>
            </nav>
            
            {/* Tags & Week Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
               {session.weekLabel && (
                 <span className="bg-white text-secondary px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                   {session.weekLabel}
                 </span>
               )}
               <span className="bg-secondary/90 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-white/20">
                 {session.subject}
               </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in leading-tight">
              {session.title}
            </h1>
            
            {/* Meta Data */}
            <div className="flex flex-wrap gap-4 md:gap-8 text-white/90 font-medium text-sm md:text-base">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {session.date}
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                {session.schoolName}
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

            {/* NEW: Class-wise Activity Log (The Register View) */}
            {session.classActivities && (
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 mb-8">
                 <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Session Activity Log
                 </h2>
                 <div className="overflow-hidden bg-gray-50 rounded-xl border border-gray-100">
                    <table className="min-w-full divide-y divide-gray-200">
                       <thead className="bg-gray-100">
                          <tr>
                             <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Standard / Batch</th>
                             <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Activity Conducted</th>
                          </tr>
                       </thead>
                       <tbody className="divide-y divide-gray-200">
                          {session.classActivities.map((item, idx) => (
                             <tr key={idx} className="hover:bg-white transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-800">{item.standard}</td>
                                <td className="px-6 py-4 text-sm text-gray-600">{item.activity}</td>
                             </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
              </div>
            )}

            {/* Main Description */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 animate-fade-in mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                </svg>
                Detailed Report
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
            {galleryImages.length > 0 && (
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 animate-slide-up">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Session Gallery
                </h2>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {galleryImages.map((image, index) => (
                    <div
                      key={index}
                      onClick={() => openLightbox(index)}
                      className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer
                        shadow-md hover:shadow-xl transition-all duration-300"
                    >
                      <img
                        src={image.src}
                        alt={image.title}
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
            <div className="bg-white rounded-2xl p-6 shadow-lg shadow-gray-200/50 sticky top-24 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Session Overview</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <span className="text-gray-500 text-sm font-medium">Class Taught</span>
                  <span className="font-bold text-gray-900 text-right">{session.targetClass}</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <span className="text-gray-500 text-sm font-medium">Subject</span>
                  <span className="font-bold text-gray-900 text-right">{session.subject}</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <span className="text-gray-500 text-sm font-medium">Volunteers</span>
                  <span className="font-bold text-secondary text-right">{session.volunteers}</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <span className="text-gray-500 text-sm font-medium">Photos</span>
                  <span className="font-bold text-gray-900 text-right">{galleryImages.length}</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Share this activity</h4>
                  <div className="flex gap-2">
                     <button className="flex-1 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-semibold hover:bg-blue-100 transition-colors">
                        WhatsApp
                     </button>
                     <button className="flex-1 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors">
                        Copy Link
                     </button>
                  </div>
              </div>

              <button
                onClick={() => navigate(-1)}
                className="w-full mt-6 inline-flex items-center justify-center px-6 py-3.5 
                  bg-gray-900 text-white font-semibold rounded-xl 
                  hover:bg-gray-800 transform hover:scale-[1.02] 
                  transition-all duration-200 group shadow-lg shadow-gray-900/20"
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