
'use client';

import React, { useState, useEffect } from 'react';
import { motion, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Lottie from 'lottie-react';
import worldMapData from '../src/assets/animations/worldmap.json';

const StatCard = ({ value, label, subtext, index }: { value: string, label: string, subtext: string, index: number }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (inView) {
      const numValue = parseFloat(value.replace(/[^0-9.]/g, ''));
      const suffix = value.replace(/[0-9.]/g, '');

      const controls = animate(0, numValue, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => {
          let formattedValue = "";
          if (value.includes('M')) {
            formattedValue = latest.toFixed(1) + suffix;
          } else {
            formattedValue = Math.round(latest) + suffix;
          }
          setDisplayValue(formattedValue);
        }
      });
      return () => controls.stop();
    }
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{
        y: -4,
        boxShadow: "0 0 30px rgba(220, 38, 38, 0.4), 0 10px 15px -3px rgb(0 0 0 / 0.1)",
        borderColor: "rgba(220, 38, 38, 0.6)",
        backgroundColor: "rgba(255, 255, 255, 0.15)"
      }}
      className="relative p-8 rounded-2xl bg-white/5 border border-transparent shadow-none transition-all duration-300 group overflow-hidden cursor-pointer"
    >
      {/* Dynamic glow corner - also hidden initially */}
      <div className="absolute -top-12 -left-12 w-24 h-24 bg-emergency/0 blur-2xl rounded-full group-hover:bg-emergency/20 transition-all duration-500"></div>

      <div className="text-5xl font-extrabold text-emergency mb-4 font-manrope relative z-10">{displayValue}</div>
      <h3 className="text-xl font-bold text-black mb-2 relative z-10">{label}</h3>
      <p className="text-gray-800 text-sm font-semibold leading-relaxed relative z-10">{subtext}</p>
    </motion.div>
  );
};

const Problem: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      ref={ref}
      className="pt-24 lg:pt-32 pb-0 bg-white relative overflow-hidden"
    >
      {/* 🌍 BACKGROUND IMPLEMENTATION */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center">
        <div className="absolute inset-0 opacity-[1.0] flex items-center justify-center">
          <Lottie
            animationData={worldMapData}
            loop={true}
            autoplay={true}
            className="w-full h-full"
            style={{ objectFit: 'contain' }}
          />
        </div>
        {/* Soft white gradient overlay - very subtle to let high-opacity map show through */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mb-20">
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-emergency font-bold text-xs tracking-[0.3em] uppercase block mb-4"
        >
          THE CRITICAL PROBLEM
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl lg:text-6xl font-extrabold text-black leading-tight max-w-5xl mx-auto"
          style={{ textShadow: "0 2px 10px rgba(220, 38, 38, 0.2)" }}
        >
          Every year, lives are lost because <br />
          help doesn't <span className="text-emergency drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">arrive in time</span>
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 relative z-10">
        <StatCard
          index={0}
          value="1.8M"
          label="Annual Deaths"
          subtext="Road accident fatalities worldwide that could have been prevented with faster response."
        />
        <StatCard
          index={1}
          value="60min"
          label="The Golden Hour"
          subtext="The critical period after trauma when medical intervention has the highest chance of success."
        />
        <StatCard
          index={2}
          value="50%"
          label="Delayed Response"
          subtext="Nearly half of accident reports are delayed by more than 15 minutes due to panic or isolation."
        />
      </div>
    </section>
  );
};

export default Problem;
