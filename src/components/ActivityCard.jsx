/**
 * ActivityCard Component
 * Displays activity information in a card format
 * Features hover animations similar to product tiles
 */

import React from 'react';
import { Link } from 'react-router-dom';

const ActivityCard = ({ activity, basePath = '/activities' }) => {
  // Fallback link to prevent app crashes if data is incomplete
  const detailLink = activity.id && activity.year
    ? `${basePath}/${activity.year}/${activity.id}`
    : '#';

  return (
    <div
      className="group bg-white rounded-2xl overflow-hidden shadow-card 
        hover:shadow-card-hover transform hover:-translate-y-2 
        transition-all duration-300 ease-out h-full flex flex-col"
    >
      {/* Image Container */}
      <div className="relative h-48 sm:h-52 overflow-hidden flex-shrink-0 bg-gray-100">
        <img
          src={activity.thumbnail}
          alt={activity.title}
          loading="lazy"
          className="w-full h-full object-cover transform group-hover:scale-110 
            transition-transform duration-500 ease-out"
        />
        {/* Subtle dark overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 
          transition-all duration-300"></div>

        {/* Year Badge */}
        <div className="absolute top-3 right-3 bg-secondary text-white text-xs font-semibold 
          px-3 py-1 rounded-full shadow-lg">
          {activity.year}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-lg font-bold text-textDark mb-2 line-clamp-2
          group-hover:text-secondary transition-colors duration-200"
          title={activity.title}
        >
          {activity.title}
        </h3>

        {/* Date */}
        {activity.date && (
          <p className="text-sm text-gray-500 mb-2 flex items-center italic">
            <svg className="w-4 h-4 mr-1.5 flex-shrink-0 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {activity.date}
          </p>
        )}

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {activity.shortDescription || activity.description}
        </p>

        {/* View Details Button */}
        <Link
          to={detailLink}
          className="inline-flex items-center justify-center w-full px-4 py-2.5 
            bg-primary text-secondary font-bold rounded-xl
            hover:bg-secondary hover:text-white 
            transform hover:scale-[1.02] active:scale-[0.98]
            transition-all duration-200 group/btn mt-auto"
        >
          <span>View Details</span>
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

export default ActivityCard;