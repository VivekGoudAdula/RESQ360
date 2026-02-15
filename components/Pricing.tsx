'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi';

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    },
  };

  const freeFeatures = [
    "Automatic crash detection",
    "Instant emergency alerts",
    "GPS location sharing",
    "Family notifications",
    "Basic support"
  ];

  const premiumFeatures = [
    "Everything in Free",
    "Priority response routing",
    "Medical history integration",
    "24/7 dedicated support",
    "Advanced analytics",
    "Multi-device sync"
  ];

  return (
    <section className="relative py-16 bg-white overflow-hidden font-poppins" id="pricing">
      {/* Thematic Background Layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-medical opacity-[0.6]" />

        {/* Animated ECG Lines */}
        <div className="absolute top-1/4 left-0 w-full opacity-[0.35]">
          <svg viewBox="0 0 800 100" className="w-full h-auto text-black animate-heart-beat">
            <path fill="none" stroke="currentColor" strokeWidth="1" d="M0,50 L100,50 L110,20 L125,80 L135,50 L200,50 L210,10 L225,90 L235,50 L300,50 L310,30 L325,70 L335,50 L400,50 L410,10 L425,90 L435,50 L500,50 L510,30 L525,70 L535,50 L600,50 L610,10 L625,90 L635,50 L700,50 L710,30 L725,70 L735,50 L800,50" />
          </svg>
        </div>
        <div className="absolute bottom-1/4 left-0 w-full opacity-[0.25] scale-x-[-1]">
          <svg viewBox="0 0 800 100" className="w-full h-auto text-black animate-heart-beat [animation-delay:2s]">
            <path fill="none" stroke="currentColor" strokeWidth="1" d="M0,50 L100,50 L110,20 L125,80 L135,50 L200,50 L210,10 L225,90 L235,50 L300,50 L310,30 L325,70 L335,50 L400,50 L410,10 L425,90 L435,50 L500,50 L510,30 L525,70 L535,50 L600,50 L610,10 L625,90 L635,50 L700,50 L710,30 L725,70 L735,50 L800,50" />
          </svg>
        </div>

        {/* Floating Medical Icons */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.15, 0.4, 0.15],
              scale: [1, 1.2, 1],
              x: [0, 20, 0],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5
            }}
            className="absolute text-black select-none"
            style={{
              top: `${15 + (i * 15)}%`,
              left: `${10 + (i * 15)}%`,
              fontSize: `${24 + (i * 12)}px`
            }}
          >
            {i % 2 === 0 ? '+' : '✚'}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-3 text-dark tracking-tighter leading-none uppercase">
            Choose Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">Plan</span>
          </h2>
          <p className="text-text-secondary text-base md:text-lg font-medium max-w-4xl mx-auto mb-6 whitespace-nowrap lg:block hidden">
            Safety shouldn't be a luxury. Choose the plan that fits your life and keep your loved ones protected.
          </p>
          <p className="text-text-secondary text-sm max-w-2xl mx-auto mb-6 lg:hidden">
            Safety shouldn't be a luxury. Choose the plan that fits your life and keep your loved ones protected.
          </p>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-base font-bold transition-colors ${!isAnnual ? 'text-dark' : 'text-text-secondary'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-8 bg-gray-100 rounded-full p-1 transition-colors hover:bg-gray-200"
            >
              <motion.div
                animate={{ x: isAnnual ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="w-6 h-6 bg-primary rounded-full shadow-lg"
              />
            </button>
            <span className={`text-base font-bold transition-colors ${isAnnual ? 'text-dark' : 'text-text-secondary'}`}>Annual</span>
            <span className="bg-primary/10 text-primary text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-tighter shadow-sm border border-primary/20">
              SAVE 15%
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto"
        >
          {/* FREE PLAN */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="relative group p-6 rounded-[2.5rem] bg-white ring-[3px] ring-primary overflow-hidden flex flex-col"
          >
            {/* Animated gradient top bar (matches Premium) */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x" />

            <div className="mb-6 relative z-10">
              <h3 className="text-2xl font-black text-dark mb-2 drop-shadow-sm">Free Plan</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-dark tracking-tighter italic">₹0</span>
                <span className="text-text-secondary font-bold text-sm">/forever</span>
              </div>
            </div>

            <ul className="space-y-4 mb-10 flex-grow relative z-10">
              {freeFeatures.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-dark/80 font-bold text-base group-hover:text-dark transition-colors">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <HiCheckCircle className="text-primary text-xl" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <button className="w-full py-4 rounded-[1.5rem] bg-primary text-white font-black text-base shadow-[0_15px_30px_-10px_rgba(2,128,144,0.4)] hover:shadow-[0_25px_50px_-10px_rgba(2,128,144,0.6)] hover:bg-primary-dark transition-all duration-300 active:scale-95 shadow-sm uppercase tracking-wider relative z-10 overflow-hidden group/btn">
              Get Started Free
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-shimmer pointer-events-none" />
            </button>

            {/* Pulsing heartbeat glow (matches Premium) */}
            <motion.div
              animate={{ opacity: [0.1, 0.4, 0.1], scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 bg-black/5 rounded-[2.5rem] pointer-events-none z-0"
            />
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="relative group p-6 rounded-[2.5rem] bg-white ring-[3px] ring-primary overflow-hidden flex flex-col"
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x" />

            <div className="mb-6 relative z-10">
              <h3 className="text-2xl font-black text-dark mb-2 drop-shadow-sm">Premium Plan</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-dark tracking-tighter italic">
                  {isAnnual ? '₹499' : '₹49'}
                </span>
                <span className="text-text-secondary font-bold text-sm">/{isAnnual ? 'year' : 'month'}</span>
              </div>
              {isAnnual && (
                <p className="text-accent text-xs font-black mt-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                  Billed annually at ₹499
                </p>
              )}
            </div>

            <ul className="space-y-3 mb-8 flex-grow relative z-10">
              {premiumFeatures.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-dark font-black text-sm">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <HiCheckCircle className="text-primary text-lg" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <button className="relative w-full py-4 rounded-[1.5rem] bg-primary text-white font-black text-base shadow-[0_15px_30px_-10px_rgba(2,128,144,0.4)] hover:shadow-[0_25px_50px_-10px_rgba(2,128,144,0.6)] hover:bg-primary-dark transition-all duration-300 active:scale-95 group-hover:animate-pulse-glow z-20 overflow-hidden uppercase tracking-wider">
              Start Free Trial
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />
            </button>

            {/* Pulsing heartbeat glow */}
            <motion.div
              animate={{ opacity: [0.1, 0.4, 0.1], scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 bg-black/5 rounded-[2.5rem] pointer-events-none z-0"
            />
          </motion.div>
        </motion.div>

        {/* Brand highlights footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="relative z-10 mt-12 flex flex-wrap justify-center items-center gap-12 opacity-100 transition-all duration-700"
        >
          <p className="text-xs md:text-sm font-black uppercase tracking-[0.25em] text-[#1e40af] drop-shadow-sm text-center">
            Inspired by top safety infrastructures & seamless integrations
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
