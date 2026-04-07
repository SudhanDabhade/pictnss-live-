/**
 * BlogCard Component
 * Displays blog information in a card format
 * Matches ActivityCard styling with hover animations
 */

import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  const detailLink = `/blogs/${blog.id}`;

  // Format date nicely
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

  // Get preview text (first 150 chars)
  const preview = blog.content
    ? blog.content.substring(0, 180).trim() + '...'
    : '';

  return (
    <div
      className="group bg-white rounded-2xl overflow-hidden shadow-card 
        hover:shadow-card-hover transform hover:-translate-y-2 
        transition-all duration-300 ease-out h-full flex flex-col"
    >
      {/* Image Container */}
      <div className="relative h-48 sm:h-52 overflow-hidden flex-shrink-0 bg-gray-100">
        {blog.coverImage ? (
          <img
            src={blog.coverImage}
            alt={blog.title}
            loading="lazy"
            className="w-full h-full object-cover transform group-hover:scale-110 
              transition-transform duration-500 ease-out"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary to-secondary/20 
            flex items-center justify-center">
            <svg className="w-16 h-16 text-secondary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
        )}
        {/* Subtle dark overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 
          transition-all duration-300"></div>

        {/* Blog Badge */}
        <div className="absolute top-3 right-3 bg-secondary text-white text-xs font-semibold 
          px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
          Blog
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-lg font-bold text-textDark mb-2 line-clamp-2
          group-hover:text-secondary transition-colors duration-200"
          title={blog.title}
        >
          {blog.title}
        </h3>

        {/* Author */}
        <div className="flex items-center text-sm text-secondary font-medium mb-1">
          <svg className="w-4 h-4 mr-1.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          {blog.author}
        </div>

        {/* Date */}
        {blog.date && (
          <p className="text-sm text-gray-500 mb-2 flex items-center italic">
            <svg className="w-4 h-4 mr-1.5 flex-shrink-0 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {formatDate(blog.date)}
          </p>
        )}

        {/* Preview */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {preview}
        </p>

        {/* Likes indicator */}
        {blog.likes > 0 && (
          <div className="flex items-center text-xs text-gray-400 mb-3">
            <svg className="w-4 h-4 mr-1 text-accent" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            {blog.likes} {blog.likes === 1 ? 'like' : 'likes'}
          </div>
        )}

        {/* Read More Button */}
        <Link
          to={detailLink}
          className="inline-flex items-center justify-center w-full px-4 py-2.5 
            bg-primary text-secondary font-bold rounded-xl
            hover:bg-secondary hover:text-white 
            transform hover:scale-[1.02] active:scale-[0.98]
            transition-all duration-200 group/btn mt-auto"
        >
          <span>Read More</span>
          <svg
            className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
