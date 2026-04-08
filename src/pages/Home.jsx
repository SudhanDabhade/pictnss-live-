/**
 * Home Page Component
 * Landing page with carousel, welcome section, and highlights
 * Features smooth animations and engaging UI
 */

import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import { latestBlogs } from '../data/blogs';

// Highlight data
const highlights = [
  {
    id: 1,
    title: "100+",
    subtitle: "Volunteers",
    description: "Active student volunteers making a difference",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "100+",
    subtitle: "Social Impact Activities",
    description: "Impactful events organized every year",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Annual",
    subtitle: "NSS Camp",
    description: "Week-long residential camp for holistic development",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tent-icon lucide-tent">
        <path d="M3.5 21 14 3" /><path d="M20.5 21 10 3" /><path d="M15.5 21 12 15l-3.5 6" /><path d="M2 21h20" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Youth",
    subtitle: "For Society",
    description: "Empowering young minds to serve the nation",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

// Recent activities preview
const recentActivities = [
  {
    id: "2025_taljai_shramadan",
    title: "Tree Plantation Drive",
    date: "February 2025",
    image: "/corosal/treeplantation.jpg",
  },
  {
    id: "2025_blood_donation",
    title: "Blood Donation Camp",
    date: "March 2025",
    image: "/corosal/blood donation.jpg",
  },
  {
    id: "2025_cleanliness_drive",
    title: "Swachh Bharat Abhiyan",
    date: "October 2025",
    image: "/corosal/cleanliness drive.jpg",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Carousel Section */}
      <section className="relative">
        <Carousel />
      </section>

      {/* Welcome Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block">
                <span className="bg-primary text-secondary text-sm font-semibold px-4 py-2 rounded-full">
                  Welcome to PICT NSS
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-textDark leading-tight">
                PICT NSS
              </h1>
              <p className="text-2xl md:text-3xl font-semibold text-secondary mb-4">
                Not Me, But You
              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
                The National Service Scheme (NSS) at Pune Institute of Computer Technology
                is dedicated to developing the personality and character of student youth
                through voluntary community service. We believe that the welfare of an
                individual is ultimately dependent on the welfare of society as a whole.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Our volunteers engage in various social service activities throughout the year,
                including blood donation camps, tree plantation drives, cleanliness campaigns,
                health awareness programs, and the annual NSS special camp. Join us in making
                a difference!
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/activities"
                  className="inline-flex items-center px-6 py-3 bg-secondary text-white font-semibold 
                    rounded-xl hover:bg-secondary/90 transform hover:scale-105 hover:shadow-lg
                    transition-all duration-300 group"
                >
                  Explore Activities
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>

                <Link
                  to="/team"
                  className="inline-flex items-center px-6 py-3 bg-primary text-secondary font-semibold 
                    rounded-xl hover:bg-accent hover:text-white transform hover:scale-105 hover:shadow-lg
                    transition-all duration-300"
                >
                  Meet Our Team
                </Link>
              </div>
            </div>

            {/* Image Grid */}
            <div className="relative animate-slide-up">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="/corosal/pict nss.jpeg"
                    alt="NSS Volunteers"
                    className="w-full h-48 object-cover rounded-2xl shadow-card"
                  />
                  <img
                    src="/corosal/blood donation.jpg"
                    alt="Community Service"
                    className="w-full h-40 object-cover rounded-2xl shadow-card"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img
                    src="/corosal/wtih nakshatra.jpeg"
                    alt="Teaching"
                    className="w-full h-40 object-cover rounded-2xl shadow-card"
                  />
                  <img
                    src="/corosal/tree_conservation.jpg"
                    alt="Nature Camp"
                    className="w-full h-48 object-cover rounded-2xl shadow-card"
                  />
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-secondary text-white px-6 py-4 rounded-2xl shadow-lg">
                <p className="text-3xl font-bold">5+</p>
                <p className="text-sm text-white/80">Years of Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 md:py-20 bg-softGrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-textDark mb-4">
              Our Impact
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Through dedication and teamwork, we continue to make meaningful contributions to society
            </p>
          </div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover 
                  transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-2xl flex items-center justify-center 
                  text-secondary group-hover:bg-secondary group-hover:text-white 
                  transition-all duration-300 group-hover:rotate-6">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold text-secondary mb-1 group-hover:scale-110 
                  transition-transform duration-300">
                  {item.title}
                </h3>

                {/* Subtitle */}
                <p className="text-textDark font-semibold mb-2">{item.subtitle}</p>

                {/* Description */}
                <p className="text-gray-500 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Activities Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-textDark mb-2">
                Recent Activities
              </h2>
              <p className="text-gray-600">
                Check out our latest initiatives and events
              </p>
            </div>
            <Link
              to="/activities"
              className="mt-4 sm:mt-0 inline-flex items-center text-secondary font-semibold 
                hover:text-secondary/80 group"
            >
              View All
              <svg
                className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Activity Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentActivities.map((activity, index) => (
              <Link
                key={activity.id}
                to={`/activities/2025/${activity.id}`}
                className="group relative overflow-hidden rounded-2xl shadow-card 
                  hover:shadow-card-hover transition-all duration-300"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 
                      transition-transform duration-500"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm text-white/80 mb-1">{activity.date}</p>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-200">
                    {activity.title}
                  </h3>
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm 
                  rounded-full flex items-center justify-center transform translate-x-12 
                  group-hover:translate-x-0 transition-transform duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-textDark mb-2">
                Latest Blogs & Insights
              </h2>
              <p className="text-gray-600">
                Stories, updates, and insights from our community
              </p>
            </div>
            <Link
              to="/blogs"
              className="mt-4 sm:mt-0 inline-flex items-center text-secondary font-semibold 
                hover:text-secondary/80 group"
            >
              Read All
              <svg
                className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestBlogs.slice(0, 3).map((blog) => (
              <Link
                key={blog.id}
                to={`/blogs/${blog.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-card 
                  hover:shadow-card-hover transform hover:-translate-y-2 transition-all duration-300"
              >
                {/* Blog Image */}
                <div className="aspect-video overflow-hidden bg-gray-200">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 
                      transition-transform duration-500"
                  />
                </div>

                {/* Blog Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                      {blog.category}
                    </span>
                    <span className="text-xs text-gray-500">{blog.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-textDark mb-2 group-hover:text-secondary 
                    transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center text-secondary font-semibold text-sm 
                    group-hover:translate-x-1 transition-transform">
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Join PICT NSS and be part of a community dedicated to social service and nation-building.
            Together, we can create a positive impact in society.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/camps"
              className="inline-flex items-center px-8 py-4 bg-white text-secondary font-semibold 
                rounded-xl hover:bg-accent hover:text-white transform hover:scale-105 hover:shadow-lg
                transition-all duration-300"
            >
              Explore NSS Camp
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white 
                text-white font-semibold rounded-xl hover:bg-white hover:text-secondary 
                transform hover:scale-105 transition-all duration-300"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
