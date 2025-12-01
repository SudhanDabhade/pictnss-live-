/**
 * CampYear Page Component
 * Displays comprehensive camp information for a specific year
 * Features: Camp Overview, Day-wise Schedule, Testimonials, Gallery, and Activity Cards
 */

import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCampsByYear, getCampYears } from '../data/camps';
import Lightbox from '../components/Lightbox';

const CampYear = () => {
  const { year } = useParams();
  
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const camps = getCampsByYear(year);
  const allYears = getCampYears();
  const camp = camps[0];
  
  const yearExists = allYears.includes(parseInt(year));

  const galleryImages = camp?.gallery?.map((src, index) => ({
    src,
    title: `${camp.title} - Image ${index + 1}`,
    category: 'NSS Camp',
  })) || [];

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const nextImage = () => setCurrentImageIndex((prev) => prev === galleryImages.length - 1 ? 0 : prev + 1);
  const prevImage = () => setCurrentImageIndex((prev) => prev === 0 ? galleryImages.length - 1 : prev - 1);

  if (!yearExists || !camp) {
    return (
      <div className="min-h-screen bg-softGrey pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-textDark mb-4">Year Not Found</h1>
          <p className="text-gray-600 mb-6">We don't have any camp records for {year}.</p>
          <Link to="/camps" className="inline-flex items-center px-6 py-3 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary/90 transition-all duration-200">
            View All Camps
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-softGrey pt-20">
      {/* Hero Banner */}
      <div className="relative h-[350px] md:h-[450px] overflow-hidden">
        <img src={camp.thumbnail} alt={camp.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-7xl mx-auto">
            <nav className="flex items-center space-x-2 text-white/60 mb-4 text-sm">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/camps" className="hover:text-white transition-colors">NSS Camp</Link>
              <span>/</span>
              <span className="text-white">{year}</span>
            </nav>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 animate-fade-in">
              {camp.title}
            </h1>
            
            <div className="flex flex-wrap gap-4 md:gap-6 text-white/90">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {camp.dates}
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                {camp.location}
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {camp.volunteers} Volunteers
              </div>
            </div>
            
            <div className="mt-6 flex items-center space-x-2">
              <span className="text-white/60 text-sm">Jump to:</span>
              <div className="flex flex-wrap gap-1">
                {allYears.map((y) => (
                  <Link key={y} to={`/camps/${y}`} className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200 ${parseInt(year) === y ? 'bg-white text-secondary' : 'bg-white/20 text-white hover:bg-white/30'}`}>
                    {y}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-textDark">Camp Overview</h2>
              <p className="text-gray-500">A summary of the week-long journey</p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-card mb-8 animate-fade-in">
            <div className="prose prose-lg max-w-none text-gray-600">
              {camp.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 leading-relaxed">{paragraph}</p>
              ))}
            </div>
          </div>

          {camp.schedule && camp.schedule.length > 0 && (
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-card mb-8 animate-slide-up">
              <h3 className="text-xl font-bold text-textDark mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                Day-wise Schedule
              </h3>
              <div className="grid gap-4">
                {camp.schedule.map((day, index) => (
                  <div key={index} className="group flex items-start p-4 bg-softGrey rounded-xl hover:bg-primary/10 transition-all duration-300 border border-transparent hover:border-primary/30">
                    <div className="flex-shrink-0 w-14 h-14 bg-primary rounded-xl flex flex-col items-center justify-center mr-4 group-hover:bg-secondary transition-colors duration-300">
                      <span className="text-xs text-secondary group-hover:text-white font-medium">Day</span>
                      <span className="text-lg font-bold text-secondary group-hover:text-white">{index + 1}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-textDark mb-1">{day.day}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{day.summary}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Camp Activities Section */}
          {camp.activities && camp.activities.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-textDark">Camp Activities</h3>
                  <p className="text-gray-500 text-sm">Individual activities conducted during the camp</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {camp.activities.map((activity, index) => (
                  <Link key={activity.id} to={`/camps/${year}/${camp.id}/activity/${activity.id}`} className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transform hover:-translate-y-2 transition-all duration-300 animate-fade-in">
                    <div className="relative h-48 overflow-hidden">
                      <img src={activity.coverImage} alt={activity.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-4 left-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-secondary font-bold">{index + 1}</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-textDark mb-2 group-hover:text-secondary transition-colors duration-200 line-clamp-1">{activity.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{activity.shortDescription}</p>
                      <div className="flex items-center text-secondary font-medium text-sm">
                        <span>View Details</span>
                        <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {camp.gallery && camp.gallery.length > 0 && (
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-card mb-8">
              <h3 className="text-xl font-bold text-textDark mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Camp Photo Gallery
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {camp.gallery.map((image, index) => (
                  <div key={index} onClick={() => openLightbox(index)} className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-card hover:shadow-card-hover transition-all duration-300">
                    <img src={image} alt={`Camp gallery ${index + 1}`} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/40 transition-all duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Testimonials Section - Below Gallery */}
          {camp.testimonials && camp.testimonials.length > 0 && (
            <div className="bg-secondary rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                What Participants Say
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {camp.testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                    <svg className="w-8 h-8 text-primary/50 mb-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-white/90 italic mb-4 text-sm leading-relaxed">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
                        <span className="text-secondary font-bold">{testimonial.name.charAt(0)}</span>
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
        </section>

        <div className="text-center">
          <Link to="/camps" className="inline-flex items-center px-8 py-4 bg-white text-secondary font-semibold rounded-xl shadow-card hover:shadow-card-hover transform hover:-translate-y-1 transition-all duration-200 group">
            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Camps
          </Link>
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox images={galleryImages} currentIndex={currentImageIndex} onClose={closeLightbox} onPrev={prevImage} onNext={nextImage} />
      )}
    </div>
  );
};

export default CampYear;