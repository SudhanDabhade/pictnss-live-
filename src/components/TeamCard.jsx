/**
 * TeamCard Component
 * Image on top, text & icons below (no overlap)
 */

import React from "react";

const TeamCard = ({ member }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 w-72 overflow-hidden">
      
      {/* Top Image */}
      <div className="w-full h-56 overflow-hidden">
        <img
          src={member.profilePic}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        
        {/* Name */}
        <h3 className="text-lg font-semibold text-gray-800">
          {member.name}
        </h3>

        {/* Role */}
        <p className="text-gray-500 text-sm mt-1">
          {member.role}
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-4 text-gray-700">
          
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 transition"
            >
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
          )}

          {member.instagram && (
            <a
              href={member.instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-600 transition"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
          )}

          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="hover:text-red-500 transition"
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
