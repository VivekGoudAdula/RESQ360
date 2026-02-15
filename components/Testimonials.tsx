'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiStar } from 'react-icons/hi';
import { useState, useEffect } from 'react';

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
  },
  {
    name: 'Ananya Iyer',
    loc: 'Chennai, TN',
    quote: "The real-time tracking is phenomenal. Knowing exactly where the emergency team is during a crisis reduces so much anxiety.",
    initial: 'A'
  },
  {
    name: 'Siddharth Malhotra',
    loc: 'Pune, MH',
    quote: "The zero-data-selling policy is what won me over. Security and privacy combined with high-speed emergency response.",
    initial: 'S'
  },
  {
    name: 'Priyanka Chopra',
    loc: 'Hyderabad, TS',
    quote: "I recommend RESQ360 to all my friends. It's not just an app; it's a safety net for your entire family.",
    initial: 'P'
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    })
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px] -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-[80px] -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <div className="mb-20 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-7xl font-poppins font-black tracking-tight text-dark"
          >
            Lives Saved, Families <span className="text-primary">Protected</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-secondary font-poppins font-medium max-w-2xl mx-auto"
          >
            Real stories from people who trust RESQ360 with their lives.
          </motion.p>
        </div>

        <div className="relative min-h-[500px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 }
              }}
              className="grid md:grid-cols-3 gap-10 absolute inset-0"
            >
              {visibleTestimonials.map((t, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -15 }}
                  className="p-10 bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center group transition-all duration-500"
                >
                  {/* Stars - Centered at Top */}
                  <div className="flex text-[#FFB800] text-2xl mb-8 group-hover:scale-110 transition-transform duration-500">
                    {[...Array(5)].map((_, i) => (
                      <div key={i}>
                        <HiStar />
                      </div>
                    ))}
                  </div>

                  {/* Avatar - Large and Centered */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="w-24 h-24 rounded-full bg-gradient-to-tr from-primary to-primary-dark text-white flex items-center justify-center font-poppins font-black text-3xl shadow-xl mb-6 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                    <span className="relative z-10">{t.initial}</span>
                  </motion.div>

                  {/* Info Stack - Centered */}
                  <div className="text-center mb-8">
                    <h4 className="font-poppins font-black text-2xl text-dark mb-1">{t.name}</h4>
                    <p className="text-xs font-poppins font-bold text-primary tracking-widest uppercase">{t.loc}</p>
                  </div>

                  {/* Quote - Centered */}
                  <div className="relative">
                    <span className="absolute -top-4 -left-2 text-primary opacity-20 text-4xl font-serif">"</span>
                    <p className="text-dark text-[17px] leading-relaxed font-poppins font-medium text-center relative z-10 px-2 italic">
                      {t.quote}
                    </p>
                    <span className="absolute -bottom-6 -right-2 text-primary opacity-20 text-4xl font-serif">"</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows (Drawing Match) */}
        <div className="mt-20 flex justify-center items-center gap-8 group">
          <motion.button
            whileHover={{ x: -10 }}
            onClick={handlePrev}
            className="w-14 h-14 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary group-hover:border-primary transition-colors duration-500 hover:bg-primary/5"
          >
            <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </motion.button>

          <div className="flex gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentIndex ? 1 : -1);
                  setCurrentIndex(i);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${i === currentIndex ? 'bg-primary w-8' : 'bg-primary/20 hover:bg-primary/40'}`}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ x: 10 }}
            onClick={handleNext}
            className="w-14 h-14 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary group-hover:border-primary transition-colors duration-500 hover:bg-primary/5"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
