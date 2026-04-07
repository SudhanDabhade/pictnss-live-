/**
 * BlogForm Page Component
 * Form to create a new blog post
 * Saves to localStorage and navigates to the new blog
 */

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { addBlog } from '../data/blogs';

const BlogForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    date: new Date().toISOString().split('T')[0],
    content: '',
  });
  const [imagePreviews, setImagePreviews] = useState([]);
  const [imageDataUrls, setImageDataUrls] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviews((prev) => [...prev, reader.result]);
        setImageDataUrls((prev) => [...prev, reader.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index) => {
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
    setImageDataUrls((prev) => prev.filter((_, i) => i !== index));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.author.trim()) newErrors.author = 'Author name is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.content.trim()) newErrors.content = 'Content is required';
    if (formData.content.trim().length < 50)
      newErrors.content = 'Please write at least 50 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const newBlog = addBlog({
        title: formData.title.trim(),
        author: formData.author.trim(),
        date: formData.date,
        content: formData.content.trim(),
        coverImage: imageDataUrls[0] || '',
        images: imageDataUrls,
      });

      navigate(`/blogs/${newBlog.id}`);
    } catch (error) {
      console.error('Failed to create blog:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-softGrey pt-24 pb-16">
      {/* Page Header */}
      <div className="bg-secondary py-12 md:py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
              Write a Blog
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto animate-slide-up">
              Share your NSS experience with the community. Your story can inspire others!
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-gray-500 mb-8 text-sm">
          <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/blogs" className="hover:text-secondary transition-colors">Blogs</Link>
          <span>/</span>
          <span className="text-textDark font-medium">Write</span>
        </nav>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div className="bg-white rounded-2xl p-6 shadow-card animate-fade-in">
            <label className="block text-sm font-bold text-textDark mb-2">
              Blog Title <span className="text-accent">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g., My Unforgettable NSS Camp Experience"
              className={`w-full px-4 py-3 rounded-xl border-2 
                ${errors.title ? 'border-accent' : 'border-gray-200'} 
                focus:border-secondary focus:ring-2 focus:ring-secondary/20 
                outline-none transition-all duration-200
                text-gray-700 placeholder-gray-400`}
            />
            {errors.title && (
              <p className="text-accent text-sm mt-1">{errors.title}</p>
            )}
          </div>

          {/* Author & Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-card animate-fade-in">
              <label className="block text-sm font-bold text-textDark mb-2">
                Author Name <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Your name"
                className={`w-full px-4 py-3 rounded-xl border-2 
                  ${errors.author ? 'border-accent' : 'border-gray-200'} 
                  focus:border-secondary focus:ring-2 focus:ring-secondary/20 
                  outline-none transition-all duration-200
                  text-gray-700 placeholder-gray-400`}
              />
              {errors.author && (
                <p className="text-accent text-sm mt-1">{errors.author}</p>
              )}
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-card animate-fade-in">
              <label className="block text-sm font-bold text-textDark mb-2">
                Date <span className="text-accent">*</span>
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border-2 
                  ${errors.date ? 'border-accent' : 'border-gray-200'} 
                  focus:border-secondary focus:ring-2 focus:ring-secondary/20 
                  outline-none transition-all duration-200
                  text-gray-700`}
              />
              {errors.date && (
                <p className="text-accent text-sm mt-1">{errors.date}</p>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl p-6 shadow-card animate-fade-in">
            <label className="block text-sm font-bold text-textDark mb-2">
              Your Experience <span className="text-accent">*</span>
            </label>
            <p className="text-xs text-gray-500 mb-3">
              Write about your experience — what you did, what you enjoyed, 
              and what you learned. Minimum 50 characters.
            </p>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows={12}
              placeholder="Share your NSS experience here... What activities did you participate in? What made it special? What did you learn?"
              className={`w-full px-4 py-3 rounded-xl border-2 resize-y min-h-[200px]
                ${errors.content ? 'border-accent' : 'border-gray-200'} 
                focus:border-secondary focus:ring-2 focus:ring-secondary/20 
                outline-none transition-all duration-200
                text-gray-700 placeholder-gray-400`}
            />
            <div className="flex justify-between items-center mt-2">
              {errors.content && (
                <p className="text-accent text-sm">{errors.content}</p>
              )}
              <p className="text-xs text-gray-400 ml-auto">
                {formData.content.length} characters
              </p>
            </div>
          </div>

          {/* Image Upload */}
          <div className="bg-white rounded-2xl p-6 shadow-card animate-fade-in">
            <label className="block text-sm font-bold text-textDark mb-2">
              Upload Images
            </label>
            <p className="text-xs text-gray-500 mb-3">
              Add photos from your experience. The first image will be used as the cover.
            </p>

            <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 
              text-center hover:border-secondary/50 transition-colors duration-200">
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <label htmlFor="image-upload" className="cursor-pointer">
                <svg className="w-12 h-12 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-500 font-medium">Click to upload images</p>
                <p className="text-gray-400 text-xs mt-1">JPG, PNG, or WebP</p>
              </label>
            </div>

            {/* Image Previews */}
            {imagePreviews.length > 0 && (
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mt-4">
                {imagePreviews.map((preview, index) => (
                  <div key={index} className="relative group aspect-square rounded-xl overflow-hidden">
                    <img
                      src={preview}
                      alt={`Upload ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {index === 0 && (
                      <div className="absolute top-1 left-1 bg-secondary text-white text-[10px] 
                        font-bold px-2 py-0.5 rounded-full">
                        Cover
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-1 right-1 w-6 h-6 bg-accent text-white rounded-full
                        flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 
                        transition-opacity duration-200 hover:scale-110"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submit Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex-1 inline-flex items-center justify-center px-8 py-4 
                bg-secondary text-white font-bold rounded-xl shadow-lg
                transform hover:scale-[1.02] active:scale-[0.98]
                transition-all duration-200 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-xl'
                }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Publishing...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Publish Blog
                </>
              )}
            </button>

            <Link
              to="/blogs"
              className="inline-flex items-center justify-center px-8 py-4 
                bg-white text-gray-600 font-bold rounded-xl border-2 border-gray-200
                hover:border-secondary hover:text-secondary
                transform hover:scale-[1.02] active:scale-[0.98]
                transition-all duration-200"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
