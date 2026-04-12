/**
 * TeamCard Component
 * Image on top, text & icons below (no overlap)
 */

import React from "react";

const TeamCard = ({ member, variant = 'default' }) => {
  // Adjust dimensions based on variant
  const cardWidth = variant === 'large' ? 'w-80' : variant === 'small' ? 'w-64' : 'w-72';
  const imgHeight = variant === 'large' ? 'h-72' : variant === 'small' ? 'h-48' : 'h-64';

  return (
    <div className={`bg-white rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.06)] hover:shadow-[0_12px_30px_rgb(0,0,0,0.15)] transform hover:-translate-y-2 transition-all duration-300 ${cardWidth} overflow-hidden font-sans border border-gray-100 group`}>
      
      {/* Top Image */}
      <div className={`w-full ${imgHeight} overflow-hidden relative`}>
        {/* Subtle gradient overlay to make cards look premium */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
        <img
          src={member.profilePic}
          alt={member.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>

      {/* Content */}
      <div className="p-6 text-center relative z-20 bg-white">
        
        {/* Name */}
        <h3 className="text-xl font-bold text-gray-900 mb-1">
          {member.name}
        </h3>

        {/* Role */}
        <p className="text-blue-700 font-extrabold text-sm tracking-wide bg-blue-50 inline-block px-3 py-1 rounded-md mt-1">
          {member.role}
        </p>

        {member.department && (
          <p className="text-gray-500 text-xs mt-2">{member.department}</p>
        )}

        {/* Social Icons & Links */}
        <div className="flex justify-center gap-4 mt-5">
          
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-[#0077b5] text-white px-4 py-2 rounded-lg hover:bg-[#005582] transition-colors shadow-sm text-sm font-semibold w-full justify-center"
            >
              <i className="fab fa-linkedin font-lg"></i> LinkedIn Profile
            </a>
          )}

          {!member.linkedin && member.instagram && (
            <a
              href={member.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-pink-600 transition"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
          )}

          {!member.linkedin && member.email && (
            <a
              href={`mailto:${member.email}`}
              className="text-gray-400 hover:text-red-500 transition"
            >
              <i className="fas fa-envelope text-xl"></i>
            </a>
          )}

        </div>
      </div>
    </div>
  );
};

export default TeamCard;
