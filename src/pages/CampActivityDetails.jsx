/**
 * CampActivityDetails Page Component
 * Displays detailed information about a specific camp activity
 * Shows: Banner image, title, detailed description, activity-specific photos
 */

import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getCampById, getCampActivity } from '../data/camps';
import Lightbox from '../components/Lightbox';

const CampActivityDetails = () => {
  const { year, id, activityId } = useParams();
  const navigate = useNavigate();

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const camp = getCampById(id);
  const activity = getCampActivity(id, activityId);

  if (!camp || !activity) {
    return (
      <div className="min-h-screen bg-softGrey pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-6 bg-primary/30 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-textDark mb-4">Activity Not Found</h1>
          <p className="text-gray-600 mb-6">The activity you're looking for doesn't exist or has been removed.</p>
          <Link to={`/camps/${year}`} className="inline-flex items-center px-6 py-3 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary/90 transition-all duration-200">
            Back to Camp
          </Link>
        </div>
      </div>
    );
  }

  const galleryImages = activity.photos?.map((src, index) => ({
    src,
    title: `${activity.title} - Photo ${index + 1}`,
    category: 'Activity',
  })) || [];

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
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img src={activity.coverImage} alt={activity.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-5xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center flex-wrap gap-2 text-white/60 mb-4 text-sm">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/camps" className="hover:text-white transition-colors">Camps</Link>
              <span>/</span>
              <Link to={`/camps/${year}`} className="hover:text-white transition-colors">{year}</Link>
              <span>/</span>
              <span className="text-white truncate max-w-[200px]">{activity.title}</span>
            </nav>

            {/* Activity Badge 
            <div className="inline-flex items-center px-4 py-2 bg-primary rounded-full mb-4">
              <svg className="w-4 h-4 mr-2 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <span className="text-secondary font-medium text-sm">Camp Activity</span>
            </div>*/}

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 animate-fade-in">
              {activity.title}
            </h1>

            <div className="flex flex-wrap gap-4 text-white/80 mb-3 animate-slide-up">
              {/* Date */}
              {activity.date && (
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {activity.date}
                </div>
              )}

              {/* Location (from parent camp) */}
              {camp.location && (
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {camp.location}
                </div>
              )}
            </div>

            <p className="text-white/80 text-lg max-w-3xl animate-slide-up">
              {activity.shortDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Activity Description */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-card mb-8 animate-fade-in">
          <h2 className="text-2xl font-bold text-textDark mb-6 flex items-center">
            <svg className="w-6 h-6 mr-2 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            About This Activity
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            {activity.description.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 leading-relaxed">{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Activity Photo Gallery */}
        {activity.photos && activity.photos.length > 0 && (
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-card mb-8 animate-slide-up">
            <h2 className="text-2xl font-bold text-textDark mb-6 flex items-center">
              <svg className="w-6 h-6 mr-2 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Activity Gallery
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {activity.photos.map((photo, index) => (
                <div key={index} onClick={() => openLightbox(index)} className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1">
                  <img src={photo} alt={`${activity.title} - Photo ${index + 1}`} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/40 transition-all duration-300 flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                      <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                  {/* Photo Number */}
                  <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-lg">
                    {index + 1} / {activity.photos.length}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Camp Info Card */}
        <div className="bg-gradient-to-r from-secondary to-secondary/80 rounded-2xl p-6 md:p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-white/70 text-sm mb-1">This activity was part of</p>
              <h3 className="text-xl font-bold text-white">{camp.title}</h3>
              <div className="flex items-center mt-2 text-white/80 text-sm">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {camp.dates}
                <span className="mx-2">•</span>
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                {camp.location}
              </div>
            </div>
            <Link to={`/camps/${year}`} className="inline-flex items-center px-6 py-3 bg-white text-secondary font-semibold rounded-xl hover:bg-accent hover:text-white transition-all duration-200 group">
              View Full Camp
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Other Activities */}
        {camp.activities && camp.activities.length > 1 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-textDark mb-6">Other Activities from This Camp</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {camp.activities.filter(a => a.id !== parseInt(activityId)).slice(0, 3).map((otherActivity) => (
                <Link key={otherActivity.id} to={`/camps/${year}/${camp.id}/activity/${otherActivity.id}`} className="group bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
                  <div className="relative h-32 overflow-hidden">
                    <img src={otherActivity.coverImage} alt={otherActivity.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-textDark group-hover:text-secondary transition-colors line-clamp-1">{otherActivity.title}</h3>
                    <p className="text-gray-500 text-sm mt-1 line-clamp-1">{otherActivity.shortDescription}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back Button */}
        <div className="text-center">
          <button onClick={() => navigate(-1)} className="inline-flex items-center px-8 py-4 bg-white text-secondary font-semibold rounded-xl shadow-card hover:shadow-card-hover transform hover:-translate-y-1 transition-all duration-200 group">
            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Go Back
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox images={galleryImages} currentIndex={currentImageIndex} onClose={closeLightbox} onPrev={prevImage} onNext={nextImage} />
      )}
    </div>
  );
};

export default CampActivityDetails;
