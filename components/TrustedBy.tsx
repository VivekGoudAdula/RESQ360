
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: 'Apollo Hospitals', path: '/images/apollo.png' },
  { name: 'AIIMS', path: '/images/aiims.png' },
  { name: 'Fortis Healthcare', path: '/images/fortis.png' },
  { name: 'Max Healthcare', path: '/images/max.png' },
  { name: 'Medanta', path: '/images/medanta.png' },
  { name: 'Narayana Health', path: '/images/nh.png' },
  { name: 'Indian Red Cross', path: '/images/redcross.png' },
  { name: 'BloodConnect', path: '/images/bloodConnect.png' },
  { name: 'Rotary Blood Bank', path: '/images/rotary.png' },
  { name: 'Lions Blood Bank', path: '/images/lions.png' },
  { name: 'TVS Auto Assist', path: '/images/tvs.png' },
  { name: 'Allianz Assistance', path: '/images/allianz.png' },
];

const PartnerLogo = ({ partner }: { partner: { name: string; path: string } }) => {
  const [error, setError] = React.useState(false);

  if (error) return null;

  return (
    <div className="flex items-center group cursor-pointer">
      <div className="relative w-16 h-16 sm:w-24 sm:h-24 flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300">
        <img
          src={partner.path}
          alt={partner.name}
          className="max-w-full max-h-full object-contain p-2"
          onError={() => setError(true)}
        />
      </div>
    </div>
  );
};

const TrustedBy: React.FC = () => {
  return (
    <section className="py-6 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-4">
        <div className="flex flex-col items-center text-center space-y-2">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl lg:text-4xl font-manrope font-black tracking-tighter text-dark uppercase"
          >
            Trusted by <span className="text-emergency">12,000+</span> users and partners across India
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xs sm:text-sm font-manrope font-bold text-text-secondary uppercase tracking-[0.2em]"
          >
            Empowering Emergency Response Across India
          </motion.p>
        </div>
      </div>

      <div className="relative flex items-center">
        {/* Infinite Scroll Container */}
        <div className="flex animate-scroll whitespace-nowrap gap-8 sm:gap-16 py-2 items-center transform-gpu">
          {[...partners, ...partners].map((partner, index) => (
            <PartnerLogo key={index} partner={partner} />
          ))}
        </div>

        {/* Gradient Fades */}
        <div className="absolute top-0 left-0 w-24 sm:w-64 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 sm:w-64 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default TrustedBy;
