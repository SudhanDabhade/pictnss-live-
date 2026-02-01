/**
 * App.jsx - Main Application Component
 * Sets up React Router with all routes
 * Wraps pages with Navbar and Footer
 */

import React from 'react';
import { useLocation } from "react-router-dom";  /*For page scrolling issue*/
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';


// Pages
import Home from './pages/Home';
import Activities from './pages/Activities';
import ActivityYear from './pages/ActivityYear';
import ActivityDetails from './pages/ActivityDetails';
import Camps from './pages/Camps';
import CampYear from './pages/CampYear';
import CampDetails from './pages/CampDetails';
import CampActivityDetails from './pages/CampActivityDetails';
import SchoolTeaching from './pages/SchoolTeaching';   // l-1 
import Gallery from './pages/Gallery';
import Team from './pages/Team';
import Magazine from './pages/Magazine';
import SchoolTeachingDetails from './pages/SchoolTeachingDetails';


// Scroll to top component
/*const ScrollToTop = () => {
  const { pathname } = window.location;
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};*/


const ScrollToTop = () => {
  const location = useLocation();
  
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.key]);
  
  return null;
};

// 404 Not Found Page
const NotFound = () => (
  <div className="min-h-screen bg-softGrey pt-24 pb-16 flex items-center justify-center">
    <div className="text-center px-4">
      <div className="inline-flex items-center justify-center w-24 h-24 bg-primary rounded-full mb-6">
        <span className="text-4xl font-bold text-secondary">404</span>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-textDark mb-4">Page Not Found</h1>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
      </p>
      <a
        href="/"
        className="inline-flex items-center px-6 py-3 bg-secondary text-white font-semibold 
          rounded-xl hover:bg-secondary/90 transform hover:scale-105 transition-all duration-200"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        Back to Home
      </a>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App min-h-screen flex flex-col">
        {/* Navigation Bar */}
        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<Home />} />
            
            {/* Activities Routes */}
            <Route path="/activities" element={<Activities />} />
            <Route path="/activities/:year" element={<ActivityYear />} />
            <Route path="/activities/:year/:id" element={<ActivityDetails />} />
            
            {/* Camps Routes */}
            <Route path="/camps" element={<Camps />} />
            <Route path="/camps/:year" element={<CampYear />} />
            <Route path="/camps/:year/:id" element={<CampDetails />} />
            <Route path="/camps/:year/:id/activity/:activityId" element={<CampActivityDetails />} />

            {/*School Teaching*/}
            <Route path="/SchoolTeaching" element={<SchoolTeaching/>} />
            <Route path="School-Teaching/:id" element={<SchoolTeachingDetails/>}/>
            
            {/* Magazine Page */}
            <Route path="/magazine" element={<Magazine />} />
            
            {/* Gallery Page */}
            <Route path="/gallery" element={<Gallery />} />
            
            {/* Team Page */}
            <Route path="/team" element={<Team />} />
            
            {/* 404 Not Found - Catch all unmatched routes */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
