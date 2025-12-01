/**
 * CampDetails Page Component
 * Displays detailed camp information including schedule and testimonials
 * Features nature vibes with comprehensive camp overview
 */

import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getCampById } from '../data/camps';
import Lightbox from '../components/Lightbox';

const CampDetails = () => {
  const { year, id } = useParams();
  const navigate = useNavigate();
  
  // State for lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Fetch camp data by ID
  const camp = getCampById(id);

  // Handle case where camp is not found
  if (!camp) {
    return (
      <div className="min-h-screen bg-softGrey pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-textDark mb-4">Camp Not Found</h1>
          <p className="text-gray-600 mb-6">
            The camp you're looking for doesn't exist.
          </p>
          <Link
            to={`/camps/${year}`}
            className="inline-flex items-center px-6 py-3 bg-secondary text-white font-semibold 
              rounded-xl hover:bg-secondary/90 transition-all duration-200"
          >
            Back to Camps
          </Link>
        </div>
      </div>
    );
  }

  // Prepare gallery images for lightbox
  const galleryImages = camp.gallery.map((src, index) => ({
    src,
    title: `${camp.title} - Image ${index + 1}`,
    category: 'NSS Camp',
  }));

  // Lightbox handlers
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const nextImage = () => setCurrentImageIndex((prev) => prev === galleryImages.length - 1 ? 0 : prev + 1);
  const prevImage = () => setCurrentImageIndex((prev) => prev === 0 ? galleryImages.length - 1 : prev - 1);

  return (
    <div className="min-h-screen bg-softGrey pt-20">
      {/* Hero Banner */}
      <div className="relative h-[350px] md:h-[450px] lg:h-[550px]">
        <img
          src={camp.thumbnail}
          alt={camp.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
        
        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-white/60 mb-4 text-sm">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/camps" className="hover:text-white transition-colors">Camps</Link>
              <span>/</span>
              <Link to={`/camps/${year}`} className="hover:text-white transition-colors">{year}</Link>
              <span>/</span>
              <span className="text-white truncate">{camp.title}</span>
            </nav>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 animate-fade-in">
              {camp.title}
            </h1>
            
            <div className="flex flex-wrap gap-4 md:gap-6 text-white/90">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {camp.dates}
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                {camp.location}
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {camp.volunteers} Volunteers
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Camp Overview */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-card mb-8 animate-fade-in">
          <h2 className="text-2xl font-bold text-textDark mb-6">Camp Overview</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            {camp.description.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 leading-relaxed">{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Day-wise Schedule */}
        {camp.schedule && camp.schedule.length > 0 && (
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-card mb-8 animate-slide-up">
            <h2 className="text-2xl font-bold text-textDark mb-6">
              <span className="flex items-center">
                <svg className="w-6 h-6 mr-2 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                Day-wise Schedule
              </span>
            </h2>
            
            <div className="space-y-4">
              {camp.schedule.map((day, index) => (
                <div 
                  key={index}
                  className="group border border-gray-100 rounded-xl p-4 hover:border-primary 
                    hover:shadow-card transition-all duration-300"
                >
                  <div className="flex items-start">
                    {/* Day Number */}
                    <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-xl flex flex-col 
                      items-center justify-center mr-4 group-hover:bg-secondary transition-colors duration-300">
                      <span className="text-xs text-secondary group-hover:text-white font-medium">Day</span>
                      <span className="text-xl font-bold text-secondary group-hover:text-white">
                        {index + 1}
                      </span>
                    </div>
                    
                    {/* Activities */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-textDark mb-2">{day.day}</h3>
                      <ul className="space-y-1">
                        {day.activities.map((activity, actIndex) => (
                          <li key={actIndex} className="flex items-start text-gray-600 text-sm">
                            <svg className="w-4 h-4 text-secondary mr-2 flex-shrink-0 mt-0.5" 
                              fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Testimonials */}
        {camp.testimonials && camp.testimonials.length > 0 && (
          <div className="bg-secondary rounded-2xl p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              <span className="flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                What Participants Say
              </span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {camp.testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 
                    transition-all duration-300"
                >
                  {/* Quote */}
                  <svg className="w-8 h-8 text-primary/50 mb-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  
                  <p className="text-white/90 italic mb-4">"{testimonial.quote}"</p>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
                      <span className="text-secondary font-bold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                      <p className="text-white/60 text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Photo Gallery */}
        {camp.gallery && camp.gallery.length > 0 && (
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-card mb-8">
            <h2 className="text-2xl font-bold text-textDark mb-6">
              <span className="flex items-center">
                <svg className="w-6 h-6 mr-2 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Camp Gallery
              </span>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {camp.gallery.map((image, index) => (
                <div
                  key={index}
                  onClick={() => openLightbox(index)}
                  className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer
                    shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <img
                    src={image}
                    alt={`Camp gallery ${index + 1}`}
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

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center px-8 py-4 bg-secondary text-white font-semibold 
              rounded-xl hover:bg-secondary/90 transform hover:scale-105 
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

export default CampDetails;
