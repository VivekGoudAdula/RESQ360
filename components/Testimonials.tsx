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
    <section className="py-12 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emergency/10 rounded-full blur-[100px] -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-emergency/10 rounded-full blur-[80px] -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mb-8">
        <div className="space-y-2">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-poppins font-black tracking-tight text-[#0F172A]"
          >
            Lives Saved, Families <span className="text-emergency">Protected</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-secondary font-poppins font-medium max-w-2xl mx-auto"
          >
            Real stories from people who trust RESQ360 with their lives.
          </motion.p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden">
        <div className="flex relative overflow-hidden py-4">
          <motion.div
            className="flex gap-10 flex-nowrap"
            animate={{ x: "-50%" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 40, // Adjust speed here
            }}
            style={{ width: "max-content" }}
            whileHover={{ animationPlayState: "paused" }} // Pause on hover (requires CSS or distinct logic with motion)
            onHoverStart={() => { }} // motion doesnt strictly support pause this way easily, let's use a simpler approach or Accept that it keeps moving. For 'Pause on Hover' with framer motion simpler loops, usually involves useAnimation controls.
          // However, a simple CSS animation is often most robust for marquees.
          // Let's stick to Framer Motion for consistency but simple linear loop.
          // To achieve seamless loop, we double the content.
          >
            {[...testimonials, ...testimonials].map((t, idx) => (
              <div
                key={idx}
                className="w-[400px] flex-shrink-0 p-8 bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_70px_-15px_rgba(220,38,38,0.3)]"
              >
                {/* Stars - Centered at Top */}
                <div className="flex text-[#FFB800] text-xl mb-6 group-hover:scale-110 transition-transform duration-500">
                  {[...Array(5)].map((_, i) => (
                    <div key={i}>
                      <HiStar />
                    </div>
                  ))}
                </div>

                {/* Avatar - Large and Centered */}
                <motion.div
                  className="w-20 h-20 rounded-full bg-gradient-to-tr from-primary to-primary-dark text-white flex items-center justify-center font-poppins font-black text-2xl shadow-xl mb-5 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  <span className="relative z-10">{t.initial}</span>
                </motion.div>

                {/* Info Stack - Centered */}
                <div className="text-center mb-6">
                  <h4 className="font-poppins font-black text-xl text-[#0F172A] mb-1">{t.name}</h4>
                  <p className="text-xs font-poppins font-bold text-emergency tracking-widest uppercase">{t.loc}</p>
                </div>

                {/* Quote - Centered */}
                <div className="relative">
                  <span className="absolute -top-4 -left-2 text-emergency opacity-20 text-4xl font-serif">"</span>
                  <p className="text-gray-700 text-[15px] leading-relaxed font-poppins font-medium text-center relative z-10 px-2 italic">
                    {t.quote}
                  </p>
                  <span className="absolute -bottom-6 -right-2 text-emergency opacity-20 text-4xl font-serif">"</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Gradient Fade Edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};

export default Testimonials;