/**
 * TeamCard Component
 * Displays team member information with profile image
 * Features gentle hover animations
 */

import React from 'react';

const TeamCard = ({ member, variant = 'default' }) => {
  // Different sizes based on variant
  const sizes = {
    large: 'w-32 h-32 md:w-40 md:h-40',
    default: 'w-24 h-24 md:w-28 md:h-28',
    small: 'w-20 h-20 md:w-24 md:h-24',
  };

  return (
    <div
      className="group bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover 
        transform hover:-translate-y-2 transition-all duration-300 ease-out text-center"
    >
      {/* Profile Image */}
      <div className="relative inline-block mb-4">
        <div className={`${sizes[variant]} rounded-full overflow-hidden mx-auto
          ring-4 ring-primary group-hover:ring-secondary transition-all duration-300`}>
          <img
            src={member.profilePic}
            alt={member.name}
            className="w-full h-full object-cover transform group-hover:scale-110 
              transition-transform duration-500"
          />
        </div>
        {/* Decorative ring */}
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-secondary/30 
          scale-110 group-hover:scale-125 group-hover:rotate-45 transition-all duration-500"></div>
      </div>

      {/* Name */}
      <h3 className="text-lg md:text-xl font-bold text-textDark mb-1 
        group-hover:text-secondary transition-colors duration-200">
        {member.name}
      </h3>

      {/* Role */}
      <p className="text-secondary font-medium text-sm mb-1">
        {member.role}
      </p>

      {/* Year/Department (if available) */}
      {(member.year || member.department) && (
        <p className="text-gray-500 text-xs mb-3">
          {member.year || member.department}
        </p>
      )}

      {/* Quote */}
      {member.quote && (
        <div className="relative">
          {/* Quote marks */}
          <svg
            className="absolute -top-2 -left-1 w-6 h-6 text-primary/60"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-gray-600 text-sm italic pl-6 pr-2 line-clamp-3">
            {member.quote}
          </p>
        </div>
      )}

      {/* Email (for Program Officers) */}
      {member.email && (
        <a
          href={`mailto:${member.email}`}
          className="inline-flex items-center mt-3 text-xs text-secondary hover:text-secondary/80 
            transition-colors duration-200"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          {member.email}
        </a>
      )}

      {/* Experience (for Program Officers) */}
      {member.experience && (
        <p className="mt-2 text-xs text-gray-500 bg-softGrey px-3 py-1 rounded-full inline-block">
          {member.experience}
        </p>
      )}
    </div>
  );
};

export default TeamCard;
