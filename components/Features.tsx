
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiBell, HiStatusOnline, HiLocationMarker, HiUserGroup } from 'react-icons/hi';

const featureList = [
  {
    icon: <HiBell />,
    title: 'Instant Detection',
    desc: 'Advanced smartphone sensors detect impact force and vehicle orientation in real-time.',
    color: 'bg-primary'
  },
  {
    icon: <HiStatusOnline />,
    title: 'Smart Alerts',
    desc: 'Cloud-based routing sends alerts simultaneously to nearest hospitals, police, and family.',
    color: 'bg-accent'
  },
  {
    icon: <HiLocationMarker />,
    title: 'GPS Precision',
    desc: 'Accurate location tracking even in low network areas using multi-satellite triangulation.',
    color: 'bg-emergency'
  },
  {
    icon: <HiUserGroup />,
    title: 'Full Coordination',
    desc: 'Bridges the gap between rescue teams, insurance, and medical staff for seamless triage.',
    color: 'bg-warning'
  }
];

const Features: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl mb-6">Built for <span className="text-primary">Reliability.</span></h2>
          <p className="text-text-secondary text-lg max-w-2xl">Every feature is designed with one goal: to shave off precious seconds from the response time when every second counts.</p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {featureList.map((f, idx) => (
            <motion.div 
              key={idx}
              variants={item}
              whileHover={{ x: 10 }}
              className="p-8 bg-white rounded-3xl border-l-[6px] border-primary shadow-sm hover:shadow-xl transition-all flex gap-6 items-start group"
            >
              <div className={`w-16 h-16 shrink-0 rounded-2xl ${f.color} flex items-center justify-center text-white text-3xl group-hover:rotate-12 transition-transform`}>
                {f.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-dark mb-3">{f.title}</h3>
                <p className="text-text-secondary leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
