
'use client';

import React from 'react';

const logos = [
  'Apollo Hospitals', 'BloodConnect', 'Red Cross', 'Indraprastha Gas', 
  'NH Hospitals', 'Delhi Police', 'Traffic Safety Board', 'Max Healthcare',
  'Fortis', 'LifeCell', 'Medanta', 'AIIMS'
];

const TrustedBy: React.FC = () => {
  return (
    <div className="py-12 bg-gray-50 border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-text-secondary">Trusted by 12,000+ users and partners across India</p>
      </div>

      <div className="relative">
        <div className="flex animate-scroll whitespace-nowrap gap-16">
          {[...logos, ...logos].map((logo, index) => (
            <div 
              key={index} 
              className="text-2xl font-extrabold text-gray-300 font-manrope hover:text-primary transition-colors cursor-default"
            >
              {logo}
            </div>
          ))}
        </div>
        
        {/* Gradients */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
      </div>
    </div>
  );
};

export default TrustedBy;
