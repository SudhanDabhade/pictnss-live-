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
      className={`absolute top-full left-0 mt-2 w-48 rounded-xl shadow-lg
        transform transition-all duration-300 ease-out z-50
        ${isOpen
          ? 'opacity-100 translate-y-0 visible'
          : 'opacity-0 -translate-y-2 invisible'
        }`}
      style={{
        background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(240, 244, 248, 0.95))',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(15, 42, 85, 0.2)',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 0 60px rgba(15, 42, 85, 0.1)',
      }}
      onMouseLeave={onClose}
    >
      {/* Dropdown arrow */}
      <div
        className="absolute -top-2 left-6 w-4 h-4 transform rotate-45 border-l border-t"
        style={{
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(240, 244, 248, 0.95))',
          borderColor: 'rgba(15, 42, 85, 0.2)',
        }}
      ></div>

      {/* Dropdown items container */}
      <div className="relative py-2 rounded-xl overflow-hidden">
        {items.map((item, index) => (
          <Link
            key={item}
            to={`${basePath}/${item}`}
            onClick={onClose}
            className="block px-4 py-2.5 font-medium hover:bg-blue-50 
              transition-all duration-200 text-sm text-blue-700 hover:text-blue-900"
            style={{
              animationDelay: `${index * 50}ms`,
              textShadow: '0 0 10px rgba(15, 42, 85, 0.2)',
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
