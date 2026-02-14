
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HiStar } from 'react-icons/hi';

const testimonials = [
  {
    name: 'Vivek Sharma',
    loc: 'Bangalore, KA',
    quote: "RESQ360 saved my life after a highway accident. The ambulance was there before I could even find my phone. Truly life-saving tech.",
    initial: 'V'
  },
  {
    name: 'Rahul Kumar',
    loc: 'Mumbai, MH',
    quote: "As a parent, the family alert feature gives me peace of mind whenever my kids are out driving. The setup was incredibly simple.",
    initial: 'R'
  },
  {
    name: 'Vandana Patel',
    loc: 'Delhi, NCR',
    quote: "The hospital coordination was seamless. My medical history was shared instantly with the ER team, making triage much faster.",
    initial: 'V'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4">Lives Saved, Families Protected.</h2>
          <p className="text-text-secondary">Real stories from people who trust RESQ360 with their lives.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 bg-gray-50 rounded-[40px] shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex text-warning text-xl">
                  {[...Array(5)].map((_, i) => <HiStar key={i} />)}
                </div>
                <p className="text-dark italic leading-relaxed font-medium">"{t.quote}"</p>
              </div>
              
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                  {t.initial}
                </div>
                <div>
                  <h4 className="font-bold text-dark">{t.name}</h4>
                  <p className="text-xs text-text-secondary">{t.loc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
