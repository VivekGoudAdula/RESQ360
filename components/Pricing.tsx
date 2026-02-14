
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi';

const Pricing: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4">Transparent <span className="text-primary">Pricing</span></h2>
          <p className="text-text-secondary">Safety shouldn't be a luxury. Choose the plan that fits your life.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Tier */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-10 rounded-[40px] border-2 border-gray-100 bg-white shadow-sm flex flex-col"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-dark">Basic Safety</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-5xl font-extrabold text-dark">₹0</span>
                <span className="text-text-secondary">/ forever</span>
              </div>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              {['Automatic crash detection', 'Instant emergency alerts', 'GPS location sharing', 'Family notifications', 'Basic support'].map(f => (
                <li key={f} className="flex items-center gap-3 text-sm text-text-secondary">
                  <HiCheckCircle className="text-accent text-xl shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-2xl border-2 border-primary text-primary font-bold hover:bg-primary/5 transition-colors">
              Get Started
            </button>
          </motion.div>

          {/* Premium Tier */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-10 rounded-[40px] bg-gradient-to-br from-primary to-primary-dark text-white shadow-2xl shadow-primary/30 relative overflow-hidden"
          >
            <div className="absolute top-6 right-6 bg-accent text-dark text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest animate-pulse">
              Most Popular
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold">Premium Guard</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-5xl font-extrabold">₹499</span>
                <span className="text-white/70">/ year</span>
              </div>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              {['Everything in Free', 'Priority response routing', 'Medical history integration', '24/7 dedicated support', 'Advanced analytics', 'Multi-device sync'].map(f => (
                <li key={f} className="flex items-center gap-3 text-sm text-white/90">
                  <HiCheckCircle className="text-accent text-xl shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-2xl bg-white text-primary font-bold hover:shadow-lg transition-all active:scale-95 animate-pulse-glow">
              Go Premium
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
