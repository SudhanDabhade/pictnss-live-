/**
 * Navbar Component - Redesigned
 * Modern navigation bar with rounded design, padding, and smooth hover effects
 * Includes Magazine section
 */

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Dropdown from './Dropdown';

// Years for dropdown menus
const years = ['2026', '2025', '2024', '2023', '2022', '2021'];

const Navbar = () => {
  // State for dropdowns and mobile menu
  const [activitiesOpen, setActivitiesOpen] = useState(false);
  const [campsOpen, setCampsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Check if link is active
  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-1 sm:px-1.5 lg:px-2 pt-3">
      <nav
        className={`max-w-7xl mx-auto transition-all duration-500 ease-out rounded-full
          ${scrolled
            ? 'bg-[#e8eaf6]/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(46,49,145,0.15)]'
            : 'bg-[#eceef8]/90 backdrop-blur-md shadow-lg'
          }`}
      >
        <div className="px-4 sm:px-5 lg:px-6">
          <div className="flex items-center justify-between h-16 md:h-18">

            {/* Logo Section */}
            <Link
              to="/"
              className="flex items-center space-x-3 group"
            >
              {/* NSS Logo */}
              <div className="relative">
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl overflow-hidden shadow-lg
                  group-hover:shadow-secondary/30 group-hover:scale-105 
                  transition-all duration-300 group-hover:rotate-3">
                  <img
                    src="/nss.png"
                    alt="NSS Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-secondary/20 rounded-xl blur-xl opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-secondary font-bold text-lg md:text-xl leading-tight 
                  group-hover:text-secondary/80 transition-colors">
                  PICT NSS
                </span>
                <span className="text-xs text-gray-500 hidden sm:block">
                  Not Me, But You
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 bg-softGrey/50 rounded-xl p-1.5">

              {/* Home Link */}
              <Link
                to="/"
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300
                  ${isActive('/') && location.pathname === '/'
                    ? 'bg-secondary text-white shadow-md shadow-secondary/20'
                    : 'text-textDark hover:bg-primary/60 hover:text-secondary'
                  }`}
              >
                Home
              </Link>

              {/* Activities Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActivitiesOpen(true)}
                onMouseLeave={() => setActivitiesOpen(false)}
              >
                <Link
                  to="/activities"
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 
                    flex items-center space-x-1
                    ${isActive('/activities')
                      ? 'bg-secondary text-white shadow-md shadow-secondary/20'
                      : 'text-textDark hover:bg-primary/60 hover:text-secondary'
                    }`}
                >
                  <span>Activities</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 
                      ${activitiesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <Dropdown
                  items={years}
                  basePath="/activities"
                  isOpen={activitiesOpen}
                  onClose={() => setActivitiesOpen(false)}
                />
              </div>

              {/* NSS Camp Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setCampsOpen(true)}
                onMouseLeave={() => setCampsOpen(false)}
              >
                <Link
                  to="/camps"
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 
                    flex items-center space-x-1
                    ${isActive('/camps')
                      ? 'bg-secondary text-white shadow-md shadow-secondary/20'
                      : 'text-textDark hover:bg-primary/60 hover:text-secondary'
                    }`}
                >
                  <span>NSS Camp</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 
                      ${campsOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <Dropdown
                  items={years}
                  basePath="/camps"
                  isOpen={campsOpen}
                  onClose={() => setCampsOpen(false)}
                />
              </div>



              {/*School Teaching - NEW*/}
              <Link
                to="/schoolteaching"
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300
                  flex items-center space-x-1.5
                  ${isActive('/schoolteaching')
                    ? 'bg-secondary text-white shadow-md shadow-secondary/20'
                    : 'text-textDark hover:bg-primary/60 hover:text-secondary'
                  }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap-icon lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" /><path d="M22 10v6" /><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" /></svg>
                <span>School Teaching</span>
              </Link>


              {/* Magazine Link - NEW */}
              <Link
                to="/magazine"
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300
                  flex items-center space-x-1.5
                  ${isActive('/magazine')
                    ? 'bg-secondary text-white shadow-md shadow-secondary/20'
                    : 'text-textDark hover:bg-primary/60 hover:text-secondary'
                  }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span>Magazine</span>
              </Link>

              {/* Gallery Link */}
              <Link
                to="/gallery"
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300
                  ${isActive('/gallery')
                    ? 'bg-secondary text-white shadow-md shadow-secondary/20'
                    : 'text-textDark hover:bg-primary/60 hover:text-secondary'
                  }`}
              >
                Gallery
              </Link>

              {/* Team Link */}
              <Link
                to="/team"
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300
                  ${isActive('/team')
                    ? 'bg-secondary text-white shadow-md shadow-secondary/20'
                    : 'text-textDark hover:bg-primary/60 hover:text-secondary'
                  }`}
              >
                Team
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-softGrey/50 text-textDark 
                hover:bg-primary/50 hover:text-secondary
                transition-all duration-300 hover:scale-105 active:scale-95"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ transform: mobileMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-500 ease-out
              ${mobileMenuOpen ? 'max-h-[500px] opacity-100 pb-4' : 'max-h-0 opacity-0'}`}
          >
            <div className="pt-2 space-y-1 border-t border-gray-100/50">

              {/* Mobile Home Link */}
              <Link
                to="/"
                className={`block px-4 py-2.5 rounded-xl font-medium transition-all duration-300
                  ${location.pathname === '/'
                    ? 'bg-secondary text-white shadow-md'
                    : 'text-textDark hover:bg-primary/50 hover:translate-x-1'}`}
              >
                Home
              </Link>

              {/* Mobile Activities Section */}
              <div className="space-y-1">
                <Link
                  to="/activities"
                  className={`block px-4 py-2.5 rounded-xl font-medium transition-all duration-300
                    ${isActive('/activities')
                      ? 'bg-secondary text-white shadow-md'
                      : 'text-textDark hover:bg-primary/50 hover:translate-x-1'}`}
                >
                  Activities
                </Link>
                <div className="pl-4 flex flex-wrap gap-1">
                  {years.map(year => (
                    <Link
                      key={year}
                      to={`/activities/${year}`}
                      className="px-3 py-1.5 text-sm text-gray-600 hover:text-white 
                        hover:bg-secondary rounded-lg transition-all duration-300"
                    >
                      {year}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Camps Section */}
              <div className="space-y-1">
                <Link
                  to="/camps"
                  className={`block px-4 py-2.5 rounded-xl font-medium transition-all duration-300
                    ${isActive('/camps')
                      ? 'bg-secondary text-white shadow-md'
                      : 'text-textDark hover:bg-primary/50 hover:translate-x-1'}`}
                >
                  NSS Camp
                </Link>
                <div className="pl-4 flex flex-wrap gap-1">
                  {years.map(year => (
                    <Link
                      key={year}
                      to={`/camps/${year}`}
                      className="px-3 py-1.5 text-sm text-gray-600 hover:text-white 
                        hover:bg-secondary rounded-lg transition-all duration-300"
                    >
                      {year}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Magazine Link */}
              <Link
                to="/magazine"
                className={`flex items-center px-4 py-2.5 rounded-xl font-medium transition-all duration-300
                  ${isActive('/magazine')
                    ? 'bg-secondary text-white shadow-md'
                    : 'text-textDark hover:bg-primary/50 hover:translate-x-1'}`}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Magazine
              </Link>

              {/* Mobile Gallery Link */}
              <Link
                to="/gallery"
                className={`block px-4 py-2.5 rounded-xl font-medium transition-all duration-300
                  ${isActive('/gallery')
                    ? 'bg-secondary text-white shadow-md'
                    : 'text-textDark hover:bg-primary/50 hover:translate-x-1'}`}
              >
                Gallery
              </Link>

              {/* Mobile Team Link */}
              <Link
                to="/team"
                className={`block px-4 py-2.5 rounded-xl font-medium transition-all duration-300
                  ${isActive('/team')
                    ? 'bg-secondary text-white shadow-md'
                    : 'text-textDark hover:bg-primary/50 hover:translate-x-1'}`}
              >
                Team
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;