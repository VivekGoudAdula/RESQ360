'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';
import { BiHelpCircle } from 'react-icons/bi';

const faqs = [
  {
    q: "How does automatic crash detection work?",
    a: "We use your phone's gyroscope and accelerometer to detect sudden deceleration and G-force impacts consistent with a vehicular crash. Our proprietary AI filters out phone drops or sudden braking."
  },
  {
    q: "Will this drain my phone battery?",
    a: "No. RESQ360 uses low-energy monitoring tech that only activates high-frequency polling when it detects a high-speed travel profile, keeping daily battery impact under 2%."
  },
  {
    q: "What happens if I'm in an area with no network?",
    a: "RESQ360 attempts to send a 'Critical SMS' which can punch through even when data (3G/4G/5G) is unavailable. We also cache your last known location."
  },
  {
    q: "Can I add multiple emergency contacts?",
    a: "Yes, you can add up to 5 primary contacts on the free plan and unlimited contacts on premium."
  },
  {
    q: "Is my location data stored?",
    a: "We only store temporary 'bread crumbs' for emergency reconstruction. Once an event is resolved, data is archived and encrypted."
  },
  {
    q: "How accurate is the GPS tracking?",
    a: "Our system combines GPS, Wi-Fi positioning, and cellular towers to provide location accuracy within 5-10 meters."
  },
  {
    q: "Does it work on all phones?",
    a: "It works on all modern iOS (v14+) and Android (v10+) devices that have basic motion sensors."
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes, our annual premium subscription can be cancelled at any time through your app store settings."
  }
];

const FAQ: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const handleMouseEnter = (idx: number) => {
    setOpenIndices((prev) => [...new Set([...prev, idx])]);
  };

  const handleMouseLeave = (idx: number) => {
    setOpenIndices((prev) => prev.filter((i) => i !== idx));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 text-dark font-poppins tracking-tight leading-none">
            Frequently Asked <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Questions</span>
          </h2>
          <p className="text-text-secondary text-xl max-w-2xl mx-auto font-poppins">
            Everything you need to know about RESQ360's technology, privacy, and features.
            Hover over any question to reveal the answer.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
        >
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={() => handleMouseLeave(idx)}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className={`group rounded-[2rem] overflow-hidden transition-all duration-300 cursor-pointer ${openIndices.includes(idx)
                  ? 'bg-white shadow-2xl ring-2 ring-primary/20'
                  : 'bg-gray-50/50 hover:bg-white hover:shadow-xl ring-1 ring-gray-200/50'
                }`}
            >
              <div
                className="w-full p-8 text-left flex items-center justify-between gap-6"
              >
                <span className={`font-poppins font-extrabold text-xl md:text-2xl transition-colors leading-tight ${openIndices.includes(idx) ? 'text-primary' : 'text-dark'
                  }`}>
                  {faq.q}
                </span>
                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${openIndices.includes(idx)
                    ? 'bg-primary text-white rotate-180 shadow-lg shadow-primary/30'
                    : 'bg-white text-primary group-hover:bg-primary/20 border border-gray-100'
                  }`}>
                  <HiChevronDown className="text-2xl" />
                </div>
              </div>

              <AnimatePresence initial={false}>
                {openIndices.includes(idx) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-8 pb-8 text-text-secondary text-lg md:text-xl leading-relaxed border-t border-gray-100/30 pt-6 mt-2 font-poppins">
                      <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                      >
                        {faq.a}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
