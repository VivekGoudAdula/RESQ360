'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useAnimation } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const faqs = [
  {
    q: "How does detection work?",
    a: "We use your phone's gyroscope and accelerometer to detect sudden deceleration and G-force impacts consistent with a vehicular crash. AI filters false positives."
  },
  {
    q: "Will this drain battery?",
    a: "No. RESQ360 uses low-energy monitoring tech that only activates high-frequency polling when it detects a high-speed travel profile."
  },
  {
    q: "No network coverage?",
    a: "RESQ360 attempts to send a 'Critical SMS' which can punch through even when data (3G/4G/5G) is unavailable. We also cache your last known location."
  },
  {
    q: "Multiple contacts?",
    a: "Yes, you can add up to 5 primary emergency contacts on the free plan and unlimited contacts on premium."
  },
  {
    q: "Is data stored?",
    a: "We only store temporary 'bread crumbs' for emergency reconstruction. Once an event is resolved, data is archived and encrypted."
  },
  {
    q: "GPS accuracy?",
    a: "Our system combines GPS, Wi-Fi positioning, and cellular towers to provide location accuracy within 5-10 meters."
  },
  {
    q: "Supported devices?",
    a: "It works on all modern iOS (v14+) and Android (v10+) devices that have basic motion sensors."
  },
  {
    q: "Cancel anytime?",
    a: "Yes, our annual premium subscription can be cancelled at any time through your app store settings."
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % faqs.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + faqs.length) % faqs.length);
  };

  const getCardStyle = (index: number) => {
    // Calculate distance from active index, handling wrap-around for a continuous feel or simple bounded list
    // For this specific 3D effect, simpler index logic is often better
    const distance = index - activeIndex;

    // We only want to show neighbor cards and maybe one more
    // Main card: distance 0
    // Right 1: distance 1
    // Left 1: distance -1

    const isCenter = distance === 0;
    const isRight = distance > 0;
    const isLeft = distance < 0;
    const absDistance = Math.abs(distance);

    // Limits
    if (absDistance > 2) return { display: 'none' };

    return {
      zIndex: 10 - absDistance,
      scale: isCenter ? 1 : 0.85 - (absDistance * 0.1),
      x: distance * 280, // Spacing
      rotateY: isCenter ? 0 : (isRight ? -25 : 25), // Rotation
      opacity: isCenter ? 1 : 0.6 - (absDistance * 0.2),
      filter: isCenter ? 'grayscale(0%)' : 'grayscale(100%)',
      cursor: isCenter ? 'default' : 'pointer'
    };
  };

  return (
    <section className="pt-12 pb-24 bg-white overflow-hidden relative" id="faq">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-dark font-poppins tracking-tight uppercase">
            Frequently Asked <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Questions</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto font-poppins">
            Swipe to find answers to common questions about RESQ360.
          </p>
        </div>

        {/* 3D Carousel Container */}
        <div className="relative h-[400px] flex items-center justify-center perspective-1000">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-10 z-50 p-3 bg-white/80 backdrop-blur rounded-full shadow-lg hover:bg-primary hover:text-white transition-all"
          >
            <HiChevronLeft size={30} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 md:right-10 z-50 p-3 bg-white/80 backdrop-blur rounded-full shadow-lg hover:bg-primary hover:text-white transition-all"
          >
            <HiChevronRight size={30} />
          </button>

          <div className="relative w-full h-full flex items-center justify-center">
            {faqs.map((faq, idx) => {
              // Calculate position relative to active index
              // We render all but apply styles to "hide" far ones or position them
              // This logic centers the active one

              // Let's create a simpler "window" of cards
              let position = idx - activeIndex;

              // Optional: Make it infinite wrapping
              // For layout simplicity, let's keep it bounded first or strictly computed
              // Bounded:

              // Styles
              const isActive = idx === activeIndex;
              const isVisible = Math.abs(position) <= 2;

              if (!isVisible) return null;

              return (
                <motion.div
                  key={idx}
                  layout
                  initial={false}
                  animate={{
                    x: position * (window.innerWidth < 768 ? 40 : 250), // Overlap spacing
                    scale: isActive ? 1 : 0.8,
                    opacity: isActive ? 1 : 0.5,
                    rotateY: isActive ? 0 : (position > 0 ? -15 : 15),
                    zIndex: 100 - Math.abs(position),
                    filter: isActive ? 'grayscale(0%) drop-shadow(0 20px 30px rgba(0,0,0,0.15))' : 'grayscale(100%) blur(1px)',
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  onClick={() => setActiveIndex(idx)}
                  className={`absolute w-[280px] md:w-[350px] p-8 rounded-[2rem] bg-white border border-gray-100 flex flex-col justify-center items-center text-center shadow-xl cursor-pointer select-none h-[320px]`}
                  style={{
                    transformStyle: 'preserve-3d',
                    transformOrigin: 'center center'
                  }}
                >
                  <div className={`mb-6 p-4 rounded-full ${isActive ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-400'}`}>
                    <span className="text-3xl font-black">?</span>
                  </div>
                  <h3 className={`text-xl font-bold mb-4 font-poppins ${isActive ? 'text-dark' : 'text-gray-500'}`}>
                    {faq.q}
                  </h3>
                  <p className={`text-sm ${isActive ? 'text-text-secondary' : 'text-gray-400'}`}>
                    {isActive && faq.a}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {faqs.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'bg-primary w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
