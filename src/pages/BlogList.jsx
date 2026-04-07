/**
 * BlogList Page Component
 * Displays all blogs in a card grid with search/filter
 * Features a "Write a Blog" CTA button
 */

import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { getAllBlogs } from '../data/blogs';
import BlogCard from '../components/BlogCard';

const BlogList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const blogs = getAllBlogs();

  // Filter blogs based on search
  const filteredBlogs = useMemo(() => {
    if (!searchQuery.trim()) return blogs;
    const q = searchQuery.toLowerCase();
    return blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(q) ||
        blog.author.toLowerCase().includes(q) ||
        blog.content.toLowerCase().includes(q)
    );
  }, [blogs, searchQuery]);

  return (
    <div className="min-h-screen bg-softGrey pt-24 pb-16">
      {/* Page Header */}
      <div className="bg-secondary py-12 md:py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
              Volunteer Blogs
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto animate-slide-up mb-8">
              Read inspiring stories and experiences shared by our NSS volunteers.
              Every camp, every activity, every moment of service has a story.
            </p>

            {/* Write a Blog CTA */}
            <Link
              to="/blogs/write"
              className="inline-flex items-center px-8 py-3.5 bg-white text-secondary 
                font-bold rounded-xl shadow-lg hover:shadow-xl
                transform hover:scale-105 active:scale-95
                transition-all duration-200 animate-scale-up"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              Write a Blog
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="mb-8 max-w-xl mx-auto">
          <div className="relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search by title, author, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white rounded-xl border-2 border-gray-200
                focus:border-secondary focus:ring-2 focus:ring-secondary/20 
                outline-none transition-all duration-200
                text-gray-700 placeholder-gray-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 
                  hover:text-gray-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          {searchQuery && (
            <p className="text-sm text-gray-500 mt-2 text-center">
              {filteredBlogs.length} {filteredBlogs.length === 1 ? 'blog' : 'blogs'} found
            </p>
          )}
        </div>

        {/* Blog Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.map((blog, index) => (
              <div
                key={blog.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
              <svg className="w-10 h-10 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-textDark mb-2">No blogs found</h3>
            <p className="text-gray-600 mb-6">
              {searchQuery
                ? 'Try adjusting your search to find what you\'re looking for.'
                : 'Be the first to share your NSS experience!'}
            </p>
            <Link
              to="/blogs/write"
              className="inline-flex items-center px-6 py-3 bg-secondary text-white 
                font-semibold rounded-xl hover:bg-secondary/90 
                transform hover:scale-105 transition-all duration-200"
            >
              Write the First Blog
            </Link>
          </div>
        )}

        {/* Info Text */}
        {filteredBlogs.length > 0 && (
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Have a story to share?{' '}
              <Link to="/blogs/write" className="text-secondary font-semibold hover:underline">
                Write your blog
              </Link>{' '}
              and inspire fellow volunteers!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;
