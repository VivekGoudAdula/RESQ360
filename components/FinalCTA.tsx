
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaApple, FaGooglePlay, FaHeart } from 'react-icons/fa';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
      {/* Visual background elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <div className="flex-1 text-center lg:text-left space-y-8">
          <h2 className="text-5xl lg:text-6xl text-white font-manrope leading-tight">
            Don't Wait For An <br />
            <span className="text-accent">Emergency.</span>
          </h2>
          <p className="text-white/70 text-xl max-w-xl mx-auto lg:mx-0">
            Download RESQ360 today. It takes less than 2 minutes to set up, but it could save your life when you least expect it.
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-6">
            <button className="px-8 py-4 bg-white text-primary rounded-2xl font-extrabold flex items-center gap-3 hover:shadow-2xl hover:scale-105 transition-all">
              <FaApple className="text-2xl" /> App Store
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-2xl font-extrabold flex items-center gap-3 hover:bg-white/10 transition-all">
              <FaGooglePlay className="text-xl" /> Google Play
            </button>
          </div>
        </div>

        {/* The Hand Catching Heart Animation */}
        <div className="flex-1 relative flex justify-center items-center h-[400px]">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* Hand Shape (SVG Based) */}
            <svg 
              width="300" 
              height="350" 
              viewBox="0 0 200 200" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-2xl"
            >
              <path 
                d="M160 180C160 180 165 140 145 110C125 80 110 90 95 85C80 80 85 60 70 50C55 40 40 50 35 70C30 90 45 115 65 130C85 145 95 180 95 180" 
                stroke="white" 
                strokeWidth="12" 
                strokeLinecap="round" 
                className="opacity-20"
              />
              <path 
                d="M170 190C170 190 175 130 150 100C125 70 115 80 100 75C85 70 90 50 75 40C60 30 45 40 40 60C35 80 50 110 70 130C90 150 105 190 105 190" 
                fill="white"
                className="opacity-50"
              />
            </svg>
            
            {/* Catching Animation - Pulsing Heart */}
            <motion.div 
              initial={{ y: -200, scale: 0 }}
              whileInView={{ y: -70, scale: 1.5 }}
              transition={{ delay: 0.5, type: 'spring', damping: 10, stiffness: 100 }}
              className="absolute left-[38%] top-[20%] text-emergency text-6xl animate-heart-beat drop-shadow-[0_0_20px_rgba(220,38,38,0.8)]"
            >
              <FaHeart />
            </motion.div>
          </motion.div>
          
          {/* Decorative Glow */}
          <div className="absolute w-[300px] h-[300px] bg-accent/30 blur-[120px] rounded-full pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
