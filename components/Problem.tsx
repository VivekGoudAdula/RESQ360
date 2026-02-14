
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const StatCard = ({ value, label, subtext, color }: { value: string, label: string, subtext: string, color: string }) => {
  return (
    <motion.div 
      whileHover={{ y: -10, scale: 1.02 }}
      className="relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all group overflow-hidden"
    >
      <div className={`absolute top-0 left-0 w-full h-1 bg-${color}`}></div>
      <div className={`text-5xl font-extrabold text-${color} mb-4 font-manrope`}>{value}</div>
      <h3 className="text-xl font-bold text-white mb-2">{label}</h3>
      <p className="text-text-secondary text-sm leading-relaxed">{subtext}</p>
      <div className={`absolute -right-8 -bottom-8 w-24 h-24 bg-${color}/10 blur-3xl rounded-full group-hover:scale-150 transition-transform`}></div>
    </motion.div>
  );
};

const Problem: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section 
      ref={ref}
      className="py-24 lg:py-32 bg-dark relative overflow-hidden"
    >
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(2,128,144,0.15),transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mb-20">
        <motion.span 
          initial={{ opacity: 0 }} 
          animate={inView ? { opacity: 1 } : {}}
          className="text-emergency font-bold text-sm tracking-[0.2em] uppercase"
        >
          The Critical Challenge
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl lg:text-5xl text-white mt-4"
        >
          Lives are lost when help doesn't <br />
          arrive in the <span className="text-primary">"Golden Hour"</span>
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <StatCard 
          value="1.8M"
          label="Annual Deaths"
          subtext="Road accident fatalities worldwide that could have been prevented with faster response."
          color="emergency"
        />
        <StatCard 
          value="60min"
          label="The Golden Hour"
          subtext="The critical period after trauma when medical intervention has the highest chance of success."
          color="primary"
        />
        <StatCard 
          value="50%"
          label="Delayed Response"
          subtext="Nearly half of accident reports are delayed by more than 15 minutes due to panic or isolation."
          color="accent"
        />
      </div>
    </section>
  );
};

export default Problem;
