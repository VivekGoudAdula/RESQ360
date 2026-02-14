
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';

const faqs = [
  { q: "How does automatic crash detection work?", a: "We use your phone's gyroscope and accelerometer to detect sudden deceleration and G-force impacts consistent with a vehicular crash. Our proprietary AI filters out phone drops or sudden braking." },
  { q: "Will this drain my phone battery?", a: "No. RESQ360 uses low-energy monitoring tech that only activates high-frequency polling when it detects a high-speed travel profile, keeping daily battery impact under 2%." },
  { q: "What happens if I'm in an area with no network?", a: "RESQ360 attempts to send a 'Critical SMS' which can punch through even when data (3G/4G/5G) is unavailable. We also cache your last known location." },
  { q: "Can I add multiple emergency contacts?", a: "Yes, you can add up to 5 primary contacts on the free plan and unlimited contacts on premium." },
  { q: "Is my location data stored?", a: "We only store temporary 'bread crumbs' for emergency reconstruction. Once an event is resolved, data is archived and encrypted." },
  { q: "How accurate is the GPS tracking?", a: "Our system combines GPS, Wi-Fi positioning, and cellular towers to provide location accuracy within 5-10 meters." },
  { q: "Does it work on all phones?", a: "It works on all modern iOS (v14+) and Android (v10+) devices that have basic motion sensors." },
  { q: "Can I cancel anytime?", a: "Yes, our annual premium subscription can be cancelled at any time through your app store settings." }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-text-secondary">Everything you need to know about our system.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-gray-100">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-dark">{faq.q}</span>
                <motion.span 
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  className="text-2xl text-primary"
                >
                  <HiChevronDown />
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-text-secondary text-sm leading-relaxed border-t border-gray-50">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
