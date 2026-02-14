
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HiLockClosed, HiShieldCheck, HiOutlineEyeOff } from 'react-icons/hi';

const Security: React.FC = () => {
  return (
    <section className="py-24 bg-accent/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-manrope">Your Privacy, Our <span className="text-primary">Priority</span></h2>
          <p className="text-text-secondary max-w-2xl mx-auto">Built for reliability, designed for the strict privacy standards of life-saving movement.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 text-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="space-y-6"
          >
            <div className="w-20 h-20 bg-white rounded-3xl shadow-lg mx-auto flex items-center justify-center text-primary text-4xl hover:shadow-primary/20 transition-all">
              <HiLockClosed />
            </div>
            <h3 className="text-xl font-bold">End-to-End Encryption</h3>
            <p className="text-text-secondary text-sm">Your location and data are only shared during active emergencies.</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="space-y-6"
          >
            <div className="w-20 h-20 bg-white rounded-3xl shadow-lg mx-auto flex items-center justify-center text-primary text-4xl hover:shadow-primary/20 transition-all">
              <HiShieldCheck />
            </div>
            <h3 className="text-xl font-bold">GDPR Compliant</h3>
            <p className="text-text-secondary text-sm">Strict adherence to international data protection and health information laws.</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="space-y-6"
          >
            <div className="w-20 h-20 bg-white rounded-3xl shadow-lg mx-auto flex items-center justify-center text-primary text-4xl hover:shadow-primary/20 transition-all">
              <HiOutlineEyeOff />
            </div>
            <h3 className="text-xl font-bold">Zero Data Selling</h3>
            <p className="text-text-secondary text-sm">We never monetize your private data. Your safety is our only currency.</p>
          </motion.div>
        </div>

        <div className="mt-20 pt-10 border-t border-gray-200 flex flex-wrap justify-center gap-12 grayscale opacity-40">
          <div className="text-2xl font-bold font-manrope">HIPAA</div>
          <div className="text-2xl font-bold font-manrope">SOC2 Type II</div>
          <div className="text-2xl font-bold font-manrope">ISO 27001</div>
        </div>
      </div>
    </section>
  );
};

export default Security;
