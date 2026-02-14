
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPlay, FaShieldAlt } from 'react-icons/fa';

const Hero: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section 
      ref={ref}
      className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -mr-64 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 blur-[100px] rounded-full -ml-32 -mb-32"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8 relative z-10"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emergency/10 border border-emergency/20 text-emergency font-bold text-xs tracking-widest uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emergency opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emergency"></span>
            </span>
            ⚡ Every Second Counts
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-manrope leading-[1.1] text-dark">
            Your Life-Saving <br />
            <span className="text-primary">Emergency</span> <br />
            Response System
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg text-text-secondary max-w-lg leading-relaxed">
            Automatic crash detection that alerts emergency services and your family within 30 seconds. Because in a crisis, time is the only thing that matters.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-emergency text-white rounded-2xl font-bold flex items-center gap-3 hover:bg-red-700 transition-all shadow-xl shadow-emergency/20 hover:scale-105 active:scale-95 animate-pulse-glow">
              Download App
            </button>
            <button className="px-8 py-4 bg-white text-dark border-2 border-gray-200 rounded-2xl font-bold flex items-center gap-3 hover:border-primary transition-all hover:bg-gray-50 active:scale-95">
              <FaPlay className="text-primary" /> Watch Demo
            </button>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-6 grid grid-cols-3 gap-8">
            <div>
              <p className="text-3xl font-extrabold text-primary">&lt;30s</p>
              <p className="text-sm text-text-secondary font-medium">Response Time</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-primary">12K+</p>
              <p className="text-sm text-text-secondary font-medium">Lives Saved</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-primary">4.9/5</p>
              <p className="text-sm text-text-secondary font-medium">App Rating</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Phone Mockup Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={inView ? { opacity: 1, scale: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-[300px] md:w-[350px] animate-float">
            {/* Phone Body */}
            <div className="relative z-10 p-4 bg-dark rounded-[48px] shadow-2xl border-4 border-gray-800">
              <div className="bg-white rounded-[32px] overflow-hidden aspect-[9/19] relative">
                {/* Simulated App UI */}
                <div className="bg-emergency/5 h-full p-6 flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-20 h-20 bg-emergency rounded-full flex items-center justify-center shadow-lg shadow-emergency/50 animate-pulse">
                    <FaShieldAlt className="text-white text-4xl" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-dark uppercase">Crash Detected</h3>
                    <p className="text-sm text-text-secondary leading-tight">Emergency signals transmitting...</p>
                    <p className="text-4xl font-extrabold text-emergency mt-2">00:09</p>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mt-4">
                    <motion.div 
                      initial={{ width: "100%" }}
                      animate={{ width: "0%" }}
                      transition={{ duration: 10, ease: "linear" }}
                      className="h-full bg-emergency"
                    />
                  </div>
                  <button className="w-full py-4 mt-4 bg-gray-100 rounded-2xl font-bold text-dark hover:bg-gray-200 transition-colors">
                    I am Safe
                  </button>
                </div>
              </div>
            </div>
            
            {/* Glowing Accents */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 blur-[100px] -z-10 rounded-full"></div>
            
            {/* Floating Notification */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20 hidden md:flex border border-gray-100"
            >
              <div className="w-10 h-10 bg-success rounded-full flex items-center justify-center text-white text-xl">
                🚑
              </div>
              <div>
                <p className="text-xs font-bold text-dark">Ambulance Confirmed</p>
                <p className="text-[10px] text-text-secondary">Arriving in 4 mins</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
