/**
 * BlogDetail Page Component
 * Displays full blog content with image gallery, like/share buttons
 * Matches ActivityDetails page styling
 */

import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getBlogById, toggleLike } from '../data/blogs';
import Lightbox from '../components/Lightbox';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(() => getBlogById(id));
  const [liked, setLiked] = useState(false);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle not found
  if (!blog) {
    return (
      <div className="min-h-screen bg-softGrey pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-textDark mb-4">Blog Not Found</h1>
          <p className="text-gray-600 mb-6">
            The blog you're looking for doesn't exist.
          </p>
          <Link
            to="/blogs"
            className="inline-flex items-center px-6 py-3 bg-secondary text-white font-semibold 
              rounded-xl hover:bg-secondary/90 transition-all duration-200"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  // Format date
  const formatDate = (dateStr) => {
    try {
      return new Date(dateStr).toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch {
      return dateStr;
    }
  };

  // Gallery images for lightbox
  const galleryImages = (blog.images || []).map((src, index) => ({
    src,
    title: `${blog.title} - Image ${index + 1}`,
    category: blog.title,
  }));

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

  const handleLike = () => {
    if (!liked) {
      const updated = toggleLike(blog.id);
      if (updated) {
        setBlog({ ...updated });
        setLiked(true);
      }
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: `Read "${blog.title}" by ${blog.author} on PICT NSS`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-softGrey pt-20">
      {/* Banner Section */}
      <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
        <img
          src={blog.coverImage || blog.images?.[0] || '/nss.png'}
          alt={blog.title}
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
              <Link to="/blogs" className="hover:text-white transition-colors">Blogs</Link>
              <span>/</span>
              <span className="text-white line-clamp-1">{blog.title}</span>
            </nav>

            {/* Title & Meta */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 animate-fade-in">
              {blog.title}
            </h1>

            <div className="flex flex-wrap gap-4 text-white/80">
              {/* Author */}
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {blog.author}
              </div>

              {/* Date */}
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {formatDate(blog.date)}
              </div>

              {/* Photos count */}
              {blog.images && blog.images.length > 0 && (
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {blog.images.length} Photos
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Blog Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-card animate-fade-in">
              <h2 className="text-2xl font-bold text-textDark mb-6">Experience</h2>

              <div className="prose prose-lg max-w-none text-gray-600">
                {blog.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Photo Gallery */}
            {blog.images && blog.images.length > 0 && (
              <div className="mt-8 bg-white rounded-2xl p-6 md:p-8 shadow-card animate-slide-up">
                <h2 className="text-2xl font-bold text-textDark mb-6">Photo Gallery</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {blog.images.map((image, index) => (
                    <div
                      key={index}
                      onClick={() => openLightbox(index)}
                      className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer
                        shadow-card hover:shadow-card-hover transition-all duration-300"
                    >
                      <img
                        src={image}
                        alt={`${blog.title} gallery ${index + 1}`}
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
            <div className="bg-white rounded-2xl p-6 shadow-card animate-fade-in sticky top-24">
              <h3 className="text-lg font-bold text-textDark mb-4">About this Blog</h3>

              <div className="space-y-4">
                {/* Author */}
                <div className="flex items-center justify-between p-3 bg-softGrey rounded-xl">
                  <span className="text-gray-600">Author</span>
                  <span className="font-semibold text-secondary">{blog.author}</span>
                </div>

                {/* Date */}
                <div className="flex items-center justify-between p-3 bg-softGrey rounded-xl">
                  <span className="text-gray-600">Date</span>
                  <span className="font-semibold text-secondary">{formatDate(blog.date)}</span>
                </div>

                {/* Photos */}
                <div className="flex items-center justify-between p-3 bg-softGrey rounded-xl">
                  <span className="text-gray-600">Photos</span>
                  <span className="font-semibold text-secondary">{blog.images?.length || 0}</span>
                </div>

                {/* Likes */}
                <div className="flex items-center justify-between p-3 bg-softGrey rounded-xl">
                  <span className="text-gray-600">Likes</span>
                  <span className="font-semibold text-secondary">{blog.likes || 0}</span>
                </div>
              </div>

              {/* Like Button */}
              <button
                onClick={handleLike}
                disabled={liked}
                className={`w-full mt-6 inline-flex items-center justify-center px-6 py-3 
                  font-semibold rounded-xl transform hover:scale-[1.02] 
                  transition-all duration-200 group ${
                    liked
                      ? 'bg-accent/10 text-accent cursor-default'
                      : 'bg-accent/10 text-accent hover:bg-accent hover:text-white'
                  }`}
              >
                <svg
                  className={`w-5 h-5 mr-2 transition-transform ${liked ? 'scale-110' : 'group-hover:scale-110'}`}
                  fill={liked ? 'currentColor' : 'none'}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {liked ? 'Liked!' : 'Like this Blog'}
              </button>

              {/* Share Button */}
              <button
                onClick={handleShare}
                className="w-full mt-3 inline-flex items-center justify-center px-6 py-3 
                  bg-softGrey text-gray-700 font-semibold rounded-xl 
                  hover:bg-secondary hover:text-white
                  transform hover:scale-[1.02] transition-all duration-200 group"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Share
              </button>

              {/* Back Button */}
              <button
                onClick={() => navigate(-1)}
                className="w-full mt-3 inline-flex items-center justify-center px-6 py-3 
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
                <p className="text-sm text-gray-500 mb-3">Share this blog</p>
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

export default BlogDetail;
