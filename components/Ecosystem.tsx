'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaAmbulance, FaHospital, FaTint, FaUserFriends, 
  FaShieldAlt, FaWrench, FaTruckPickup, FaChartBar 
} from 'react-icons/fa';

const services = [
  { icon: <FaAmbulance />, name: 'Ambulance Services', desc: 'Nearest provider dispatched instantly.' },
  { icon: <FaHospital />, name: 'Hospital Finder', desc: 'Route optimization to trauma centers.' },
  { icon: <FaTint />, name: 'Blood Banks', desc: 'Real-time inventory for rare types.' },
  { icon: <FaUserFriends />, name: 'Family Alerts', desc: 'Instant multi-channel notifications.' },
  // Fix: replaced FaPolice with FaShieldAlt as FaPolice is not exported from react-icons/fa
  { icon: <FaShieldAlt />, name: 'Police Dispatch', desc: 'Automated legal crash reporting.' },
  { icon: <FaWrench />, name: 'Mechanic Services', desc: 'On-site minor repair assistance.' },
  { icon: <FaTruckPickup />, name: 'Towing Services', desc: 'Swift roadside vehicle recovery.' },
  { icon: <FaChartBar />, name: 'Data Analytics', desc: 'Detailed post-crash impact reports.' },
];

const Ecosystem: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl">Complete Emergency <span className="text-primary">Ecosystem</span></h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">Everything you need to survive and recover, connected in one unified platform.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:border-primary/30 transition-all group"
            >
              <div className="text-4xl text-primary mb-6 group-hover:rotate-[360deg] transition-transform duration-700">
                {s.icon}
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">{s.name}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;