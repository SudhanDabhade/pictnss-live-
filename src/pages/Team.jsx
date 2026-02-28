/**
 * Team Page Component
 * Displays team members in sections: Program Officers, Student Leaders, Volunteers
 * Features team cards with hover animations
 */

import React from 'react';
import TeamCard from '../components/TeamCard';
import { teamMembers } from '../data/team';

const Team = () => {
  return (
    <div className="min-h-screen bg-softGrey pt-24 pb-16">
      {/* Page Header */}
      <div className="bg-secondary py-12 md:py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
              Our Team
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto animate-slide-up">
              Meet the dedicated individuals who drive PICT NSS Unit.
              Together, we work towards building a better society.
            </p>

            {/* Team Stats */}
            <div className="mt-8 flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">
                  {teamMembers.programOfficers.length}
                </p>
                <p className="text-white/70 text-sm">Program Officers</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">
                  {teamMembers.studentLeaders.length}
                </p>
                <p className="text-white/70 text-sm">Student Leaders</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">
                  {teamMembers.volunteers.length}+
                </p>
                <p className="text-white/70 text-sm">Active Volunteers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Program Officers Section */}
        <section className="mb-16">
          <div className="text-center mb-20">
            <span className="inline-block bg-primary text-secondary text-sm font-semibold 
              px-4 py-1.5 rounded-full mb-3">
              Leadership
            </span>
            <h2 className="text-3xl font-bold text-textDark">Program Officers</h2>
            <p className="text-gray-600 mt-2">
              Guiding and mentoring the NSS unit with their experience and wisdom
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {teamMembers.programOfficers.map((member, index) => (
              <div
                key={member.id}
                className="w-full sm:w-auto animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <TeamCard member={member} variant="large" />
              </div>
            ))}
          </div>
        </section>

        {/* Student Leaders Section */}
        <section className="mb-16">
          <div className="text-center mb-20">
            <span className="inline-block bg-primary text-secondary text-sm font-semibold 
              px-4 py-1.5 rounded-full mb-3">
              Core Team
            </span>
            <h2 className="text-3xl font-bold text-textDark">Student Leaders</h2>
            <p className="text-gray-600 mt-2">
              The passionate students leading NSS initiatives and organizing events
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.studentLeaders.map((member, index) => (
              <div
                key={member.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <TeamCard member={member} variant="default" />
              </div>
            ))}
          </div>
        </section>

        {/* Volunteers Section */}
        <section className="mb-16">
          <div className="text-center mb-20">
            <span className="inline-block bg-primary text-secondary text-sm font-semibold 
              px-4 py-1.5 rounded-full mb-3">
              Heart of NSS
            </span>
            <h2 className="text-3xl font-bold text-textDark">Active Volunteers</h2>
            <p className="text-gray-600 mt-2">
              The backbone of our organization - dedicated students making a difference
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.volunteers.map((member, index) => (
              <div
                key={member.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <TeamCard member={member} variant="small" />
              </div>
            ))}
          </div>

          {/* More Volunteers Note */}
          <div className="mt-8 text-center">
            <p className="text-gray-500">
              And many more dedicated volunteers...
            </p>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="bg-secondary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Want to Join Our Team?
          </h3>
          <p className="text-white/80 max-w-2xl mx-auto mb-6">
            We're always looking for enthusiastic students who want to make a positive
            impact in society. Join PICT NSS and be part of something meaningful.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:nss@pict.edu"
              className="inline-flex items-center px-6 py-3 bg-white text-secondary font-semibold 
                rounded-xl hover:bg-accent hover:text-white transform hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us
            </a>
            <a
              href="https://instagram.com/pictnss"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white 
                text-white font-semibold rounded-xl hover:bg-white hover:text-secondary 
                transform hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Follow Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;
