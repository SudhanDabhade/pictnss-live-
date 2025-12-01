/**
 * Dropdown Component
 * Renders a dropdown menu with smooth animations
 * Used for Activities and Camps navigation items
 */

import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ items, basePath, isOpen, onClose }) => {
  return (
    <div
      className={`absolute top-full left-0 mt-2 w-48 bg-primary rounded-xl shadow-dropdown 
        transform transition-all duration-300 ease-out z-50
        ${isOpen 
          ? 'opacity-100 translate-y-0 visible' 
          : 'opacity-0 -translate-y-2 invisible'
        }`}
      onMouseLeave={onClose}
    >
      {/* Dropdown arrow */}
      <div className="absolute -top-2 left-6 w-4 h-4 bg-primary transform rotate-45"></div>
      
      {/* Dropdown items container */}
      <div className="relative py-2 rounded-xl overflow-hidden">
        {items.map((item, index) => (
          <Link
            key={item}
            to={`${basePath}/${item}`}
            onClick={onClose}
            className="block px-4 py-2.5 text-secondary font-medium hover:bg-secondary 
              hover:text-white transition-all duration-200 text-sm"
            style={{
              animationDelay: `${index * 50}ms`,
            }}
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
