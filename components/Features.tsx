'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Lottie from 'lottie-react';

// Import animations
import detectionAnimation from '../src/assets/animations/detection.json';
import smartAlertsAnimation from '../src/assets/animations/smartalerts.json';
import gpsPrecisionAnimation from '../src/assets/animations/gpsprecision.json';
import ambulanceAnimation from '../src/assets/animations/ambulance.json';
import bloodDonorAnimation from '../src/assets/animations/blooddonor.json';
import familyAnimation from '../src/assets/animations/family.json';
import hospitalAnimation from '../src/assets/animations/Hospital.json';
import towingAnimation from '../src/assets/animations/towingservices.json';
import policeAnimation from '../src/assets/animations/Police car animation.json';

const Features: React.FC = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [activeStakeholderIdx, setActiveStakeholderIdx] = React.useState(0);

  const cards = [
    {
      title: "Instant Detection",
      description: "AI-powered sensors automatically detect accidents using your phone's accelerometer and GPS",
      animation: detectionAnimation
    },
    {
      title: "Smart Alerts",
      description: "Simultaneously alerts ambulances, hospitals, police, and family members with exact location",
      animation: smartAlertsAnimation
    },
    {
      title: "GPS Precision",
      description: "Real-time location tracking ensures responders know exactly where to find you",
      animation: gpsPrecisionAnimation
    },
    {
      title: "Multi-stakeholder Integration",
      description: "Connects hospitals, blood banks, mechanics, towing services on one platform",
      isCluster: true,
      clusterAnimations: [
        ambulanceAnimation,
        bloodDonorAnimation,
        hospitalAnimation,
        familyAnimation,
        policeAnimation,
        towingAnimation
      ]
    }
  ];

  // Logic to cycle through stakeholder animations
  React.useEffect(() => {
    if (sectionInView) {
      const interval = setInterval(() => {
        setActiveStakeholderIdx((prev) => (prev + 1) % 6);
      }, 2000); // Change every 2 seconds
      return () => clearInterval(interval);
    }
  }, [sectionInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-10 bg-white overflow-hidden"
      id="features"
      style={{
        cursor: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' style='font-size: 24px;'><text y='20'>❤️</text></svg>"), auto`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* 🟥 BOXED SECTION WITH DARKER RED TINT */}
        <div className="bg-red-100/40 rounded-[48px] py-16 px-6 relative overflow-hidden border border-red-200/50 shadow-[0_0_50px_rgba(220,38,38,0.03)]">

          {/* Subtle Red Dot Grid Texture */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.15]"
            style={{ backgroundImage: 'radial-gradient(#DC2626 1px, transparent 1px)', backgroundSize: '32px 32px' }}
          ></div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <motion.h2
                variants={headingVariants}
                initial="hidden"
                animate={sectionInView ? "visible" : "hidden"}
                className="text-4xl md:text-5xl font-bold text-black mb-4"
              >
                How <span className="text-[#DC2626] drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">RESQ360</span> saves lives
              </motion.h2>
              <motion.p
                variants={headingVariants}
                initial="hidden"
                animate={sectionInView ? "visible" : "hidden"}
                transition={{ delay: 0.1 }}
                className="text-lg text-gray-500 max-w-2xl mx-auto"
              >
                A comprehensive platform that connects everyone who matters
              </motion.p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={sectionInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {cards.map((card, idx) => (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 15px 30px rgba(0,0,0,0.05)"
                  }}
                  className="bg-white rounded-xl shadow-[0_5px_20px_rgb(0,0,0,0.03)] p-4 flex flex-col items-center text-center relative group transition-all duration-300 min-h-[240px]"
                >
                  {/* Red Accent Line on Left with Glow */}
                  <div className="absolute inset-y-0 left-0 w-[4px] bg-[#DC2626] rounded-l-xl group-hover:shadow-[4px_0_15px_rgba(220,38,36,0.6)] transition-all duration-300"></div>

                  <div className="w-full h-40 mb-1 flex items-center justify-center relative">
                    {!card.isCluster ? (
                      <div className="w-36 h-36">
                        <Lottie
                          animationData={card.animation}
                          loop={true}
                          autoplay={true}
                        />
                      </div>
                    ) : (
                      <div className="w-40 h-40 relative flex items-center justify-center">
                        {card.clusterAnimations?.map((anim, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8, y: 10 }}
                            animate={activeStakeholderIdx === i ? {
                              opacity: 1,
                              scale: 1,
                              y: 0,
                              transition: { duration: 0.5 }
                            } : {
                              opacity: 0,
                              scale: 0.8,
                              y: -10,
                              transition: { duration: 0.5 }
                            }}
                            className="absolute inset-0 flex items-center justify-center"
                            style={{ display: activeStakeholderIdx === i ? 'flex' : 'none' }}
                          >
                            <Lottie
                              animationData={anim}
                              loop={true}
                              autoplay={true}
                              className="w-full h-full"
                            />
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col flex-grow justify-center -mt-2">
                    <h3 className="text-lg font-bold text-black mb-1.5">{card.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed max-w-[280px]">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
