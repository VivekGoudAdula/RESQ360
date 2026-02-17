
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPlay, FaShieldAlt, FaAmbulance, FaUserFriends, FaHospital, FaTruck, FaPhoneAlt, FaCheckCircle, FaMapMarkerAlt, FaBolt, FaHeart } from 'react-icons/fa';
import { MdGpsFixed, MdSpeed } from 'react-icons/md';
import Lottie from 'lottie-react';
import bikeAnimation from '../src/assets/animations/Bike Riding.json';
import truckAnimation from '../src/assets/animations/Truck.json';
import ambulanceAnimation from '../src/assets/animations/ambulance.json';
import hospitalAnimation from '../src/assets/animations/Hospital.json';
import bloodBankAnimation from '../src/assets/animations/blooddonor.json';
import familyAnimation from '../src/assets/animations/family.json';
import policeAnimation from '../src/assets/animations/Police car animation.json';
import towingAnimation from '../src/assets/animations/towingservices.json';

const StatItem = ({ icon, value, suffix = '', prefix = '', label }: {
  icon: React.ReactNode,
  value: string,
  suffix?: string,
  prefix?: string,
  label: string
}) => {
  const [count, setCount] = useState(0);
  const target = parseFloat(value);

  useEffect(() => {
    let start = 0;
    const end = target;
    const duration = 2000;
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(progress * (end - start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [target]);

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-emergency/5 flex items-center justify-center text-emergency border border-emergency/10 shadow-sm shrink-0">
        {React.cloneElement(icon as React.ReactElement, { className: 'text-base sm:text-xl' })}
      </div>
      <div className="flex flex-col min-w-0">
        <p className="text-2xl sm:text-3xl lg:text-4xl font-manrope font-black text-dark leading-none tracking-tighter flex items-center gap-0.5">
          <span className="text-emergency">{prefix}</span>
          <span className="text-dark">{value.includes('.') ? count.toFixed(1) : Math.floor(count)}</span>
          <span className="text-emergency">{suffix}</span>
        </p>
        <p className="text-[8px] sm:text-[10px] text-text-secondary font-manrope font-black uppercase tracking-widest leading-none mt-1 truncate">{label}</p>
      </div>
    </div>
  );
};

const Hero: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [isCrashed, setIsCrashed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isRevolving, setIsRevolving] = useState(false);
  const [isNotifying, setIsNotifying] = useState(false);
  const [isHelpReceived, setIsHelpReceived] = useState(false);
  const [isFinalRevolve, setIsFinalRevolve] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const [currentNotifyStep, setCurrentNotifyStep] = useState(0);
  const [rotatingIndex, setRotatingIndex] = useState(0);
  const [restartTrigger, setRestartTrigger] = useState(0);

  // Dedicated timer for hero text rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setRotatingIndex(prev => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const notificationSteps = [
    { name: 'Ambulance Services', animation: ambulanceAnimation },
    { name: 'Hospital Finder', animation: hospitalAnimation },
    { name: 'Blood Banks', animation: bloodBankAnimation },
    { name: 'Family Alerts', animation: familyAnimation },
    { name: 'Police Dispatch', animation: policeAnimation },
    { name: 'Towing Services', animation: towingAnimation }
  ];

  useEffect(() => {
    if (inView) {
      // 1. Moderate Loading phase (3s)
      const loadTimer = setTimeout(() => setIsLoading(false), 3000);

      // 2. Deliberate Crash phase (Simulation complete at 9s total: 3s load + ~6s animation)
      const crashTimer = setTimeout(() => setIsCrashed(true), 9000);

      return () => {
        clearTimeout(loadTimer);
        clearTimeout(crashTimer);
      };
    }
  }, [inView, restartTrigger]);

  // Handle the countdown and transition
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isCrashed && countdown > 0 && !isNotifying) {
      interval = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
    } else if (isCrashed && countdown === 0 && !isNotifying && !isRevolving) {
      setIsRevolving(true);
      setIsNotifying(true);
      setCurrentNotifyStep(0);

      const notifyTimer = setTimeout(() => {
        setIsRevolving(false);
      }, 800);

      return () => clearTimeout(notifyTimer);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isCrashed, countdown, isNotifying, isRevolving]);

  // Handle sequential notification animations (More deliberate 3s interval)
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isNotifying && currentNotifyStep < notificationSteps.length - 1) {
      interval = setInterval(() => {
        setCurrentNotifyStep(prev => prev + 1);
      }, 3000);
    } else if (isNotifying && currentNotifyStep === notificationSteps.length - 1) {
      const timer = setTimeout(() => {
        setIsFinalRevolve(true);
        setTimeout(() => {
          setIsNotifying(false);
          setIsHelpReceived(true);
        }, 400);
        setTimeout(() => {
          setIsFinalRevolve(false);
        }, 800);
      }, 3000);
      return () => clearTimeout(timer);
    }
    return () => clearInterval(interval);
  }, [isNotifying, currentNotifyStep, notificationSteps.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const handleRestart = () => {
    setIsLoading(true);
    setIsCrashed(false);
    setIsRevolving(false);
    setIsNotifying(false);
    setIsHelpReceived(false);
    setIsFinalRevolve(false);
    setCountdown(10);
    setCurrentNotifyStep(0);
    setRestartTrigger(prev => prev + 1);
  };

  return (
    <div
      ref={ref}
      className="relative min-h-screen lg:min-h-[85vh] pt-20 lg:pt-32 pb-16 lg:pb-20 overflow-hidden flex items-start lg:items-center"
    >
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#dc2626 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emergency/5 blur-[120px] rounded-full -ml-32 -mt-32 animate-pulse"></div>
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-dark/5 blur-[100px] rounded-full -mb-16"></div>

      {/* Floating Geometric Accents */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-[15%] w-12 h-12 border border-emergency/20 rounded-full hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-40 left-[5%] w-8 h-8 border border-dark/20 rotate-45 hidden lg:block"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-6 sm:space-y-8 relative z-10 flex flex-col items-center text-center mt-4 lg:mt-12 lg:max-w-xl lg:ml-auto lg:pl-24"
        >
          <div className="space-y-4 w-full flex flex-col items-center">
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-5xl lg:text-6xl font-poppins font-black leading-tight sm:leading-none text-dark tracking-tighter uppercase"
            >
              EVERY SECOND <span className="text-emergency">COUNTS.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg lg:text-2xl font-manrope font-black text-dark/70 tracking-tight uppercase"
            >
              AI accident <span className="text-emergency">rescue system</span>
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center w-full"
            >
              <div className="min-h-[4rem] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={rotatingIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex items-center gap-3 px-6 py-2 bg-emergency/5 border-l-4 border-emergency rounded-r-xl shadow-sm"
                  >
                    <FaBolt className="text-emergency text-lg sm:text-xl animate-pulse shrink-0" />
                    <p className="text-sm sm:text-base lg:text-lg text-dark font-manrope font-black uppercase tracking-wider">
                      {[
                        "Instant alerts",
                        "automatic accident detection",
                        "Multi Stake Holder Coordination"
                      ][rotatingIndex]}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="flex flex-row items-center justify-center gap-4 py-2 w-full">
            <motion.button
              whileHover={{ y: -3, backgroundColor: 'rgba(220,38,38,1)', color: '#ffffff', borderColor: 'transparent', scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleRestart}
              className="px-8 sm:px-10 py-4 bg-white text-emergency border-2 border-emergency rounded-xl font-manrope font-black text-xs tracking-widest uppercase transition-all flex items-center gap-3 group shadow-lg shadow-emergency/5"
            >
              <FaPlay className="text-[10px] group-hover:text-white transition-colors" /> Watch Demo
            </motion.button>
          </motion.div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="pt-6 sm:pt-8 flex flex-wrap justify-center items-center gap-y-6 gap-x-4 sm:gap-x-12 lg:gap-14 border-t border-gray-100 w-full overflow-visible">
            <StatItem
              icon={<MdSpeed />}
              value="30"
              suffix="s"
              prefix="<"
              label="Response Time"
            />

            <div className="h-8 w-[1px] bg-gray-100 shrink-0 hidden sm:block"></div>

            <StatItem
              icon={<FaHeart />}
              value="12"
              suffix="K+"
              label="Lives Saved"
            />


          </motion.div>
        </motion.div>
        {/* </motion.div> */}

        {/* Right Phone Mockup Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1.02 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="relative flex justify-center lg:justify-end lg:pr-12"
        >
          <div className="relative w-[260px] md:w-[290px]">

            {/* 3D Planetary Energy Rings */}
            <AnimatePresence mode="wait">
              {isRevolving && (
                <div key="rings-initial" className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center" style={{ perspective: 2000 }}>
                  {[
                    { rx: 75, rz: 0, color: 'rgba(2,128,144,0.6)', size: 520 },
                    { rx: 65, rz: 35, color: 'rgba(239,68,68,0.4)', size: 480 },
                    { rx: 85, rz: -35, color: 'rgba(16,185,129,0.4)', size: 550 },
                    { rx: 45, rz: 15, color: 'rgba(59,130,246,0.4)', size: 460 }
                  ].map((config, i) => (
                    <motion.div
                      key={i}
                      initial={{
                        rotateX: config.rx,
                        rotateZ: config.rz,
                        rotateY: 0,
                        opacity: 0,
                        scale: 0.8
                      }}
                      animate={{
                        rotateY: 360,
                        opacity: [0, 1, 0],
                        scale: [0.8, 1.1, 1],
                      }}
                      exit={{ opacity: 0, scale: 1.2 }}
                      transition={{
                        duration: 0.8,
                        ease: "linear",
                        delay: i * 0.05
                      }}
                      className="absolute rounded-full border-[2.5px]"
                      style={{
                        inlineSize: config.size,
                        blockSize: config.size,
                        transformStyle: 'preserve-3d',
                        borderColor: config.color,
                        boxShadow: `0 0 25px ${config.color}`,
                        background: `radial-gradient(circle, transparent 70%, ${config.color.replace('0.4', '0.05').replace('0.6', '0.05')} 100%)`,
                      }}
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, ease: "linear", repeat: 1 }}
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full blur-[4px]"
                        style={{
                          backgroundColor: config.color.replace('0.4', '1').replace('0.6', '1'),
                          boxShadow: `0 0 15px ${config.color.replace('0.4', '1').replace('0.6', '1')}`
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              )}
              {isFinalRevolve && (
                <div key="rings-final" className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center" style={{ perspective: 2000 }}>
                  {[
                    { rx: -75, rz: 0, color: 'rgba(2,128,144,0.6)', size: 520 },
                    { rx: -65, rz: -35, color: 'rgba(239,68,68,0.4)', size: 480 },
                    { rx: -85, rz: 35, color: 'rgba(16,185,129,0.4)', size: 550 },
                    { rx: -45, rz: -15, color: 'rgba(59,130,246,0.4)', size: 460 }
                  ].map((config, i) => (
                    <motion.div
                      key={i}
                      initial={{
                        rotateX: config.rx,
                        rotateZ: config.rz,
                        rotateY: 0,
                        opacity: 0,
                        scale: 0.8
                      }}
                      animate={{
                        rotateY: 360,
                        opacity: [0, 1, 0],
                        scale: [0.8, 1.1, 1],
                      }}
                      exit={{ opacity: 0, scale: 1.2 }}
                      transition={{
                        duration: 0.8,
                        ease: "linear",
                        delay: i * 0.05
                      }}
                      className="absolute rounded-full border-[2.5px]"
                      style={{
                        inlineSize: config.size,
                        blockSize: config.size,
                        transformStyle: 'preserve-3d',
                        borderColor: config.color,
                        boxShadow: `0 0 25px ${config.color}`,
                        background: `radial-gradient(circle, transparent 70%, ${config.color.replace('0.4', '0.05').replace('0.6', '0.05')} 100%)`,
                      }}
                    >
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 0.8, ease: "linear", repeat: 1 }}
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full blur-[4px]"
                        style={{
                          backgroundColor: config.color.replace('0.4', '1').replace('0.6', '1'),
                          boxShadow: `0 0 15px ${config.color.replace('0.4', '1').replace('0.6', '1')}`
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              )}
            </AnimatePresence>

            {/* Realistic Phone Body with Halo Glow */}
            <motion.div
              animate={{
                rotateY: (isHelpReceived || isFinalRevolve) ? 720 : (isNotifying || isRevolving) ? 360 : 0,
                x: (isCrashed && !isRevolving && !isNotifying && !isFinalRevolve && !isHelpReceived) ? [0, -10, 10, -10, 10, 0] : 0,
                rotate: (isCrashed && !isRevolving && !isNotifying && !isFinalRevolve && !isHelpReceived) ? [0, -1, 1, -1, 1, 0] : 0,
                scale: (isRevolving || isFinalRevolve) ? [1, 0.8, 1] : 1,
                boxShadow: isHelpReceived
                  ? [
                    "0 0 20px rgba(34, 197, 94, 0.4), 0 0 60px rgba(34, 197, 94, 0.2)",
                    "0 0 40px rgba(34, 197, 94, 0.6), 0 0 80px rgba(34, 197, 94, 0.3)",
                    "0 0 20px rgba(34, 197, 94, 0.4), 0 0 60px rgba(34, 197, 94, 0.2)"
                  ]
                  : (isCrashed || isNotifying)
                    ? [
                      "0 0 20px rgba(239, 68, 68, 0.4), 0 0 60px rgba(239, 68, 68, 0.2)",
                      "0 0 40px rgba(239, 68, 68, 0.6), 0 0 80px rgba(239, 68, 68, 0.3)",
                      "0 0 20px rgba(239, 68, 68, 0.4), 0 0 60px rgba(239, 68, 68, 0.2)"
                    ]
                    : [
                      "0 0 20px rgba(2, 128, 144, 0.4), 0 0 60px rgba(2, 128, 144, 0.2)",
                      "0 0 40px rgba(2, 128, 144, 0.6), 0 0 80px rgba(2, 128, 144, 0.3)",
                      "0 0 20px rgba(2, 128, 144, 0.4), 0 0 60px rgba(2, 128, 144, 0.2)"
                    ]
              }}
              transition={{
                rotateY: isFinalRevolve || isRevolving ? { duration: 0.8, ease: "easeInOut" } : { duration: 0.4 },
                scale: isFinalRevolve || isRevolving ? { duration: 0.8, ease: "easeInOut" } : { duration: 0.4 },
                boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative z-10 p-[10px] bg-[#1a1a1a] rounded-[54px] border-[1px] border-white/10"
              style={{ perspective: 1200 }}
            >
              {/* Hardware Buttons */}
              <div className="absolute -left-[3px] top-24 w-[3px] h-12 bg-gradient-to-b from-gray-600 to-gray-800 rounded-l-md border-y border-white/5"></div>
              <div className="absolute -left-[3px] top-40 w-[3px] h-12 bg-gradient-to-b from-gray-600 to-gray-800 rounded-l-md border-y border-white/5"></div>
              <div className="absolute -right-[3px] top-32 w-[3px] h-16 bg-gradient-to-b from-gray-600 to-gray-800 rounded-r-md border-y border-white/5"></div>

              {/* Inner Bezel / Screen Housing */}
              <div className="bg-black rounded-[46px] p-2 overflow-hidden aspect-[9/19.5] relative ring-1 ring-white/5 shadow-inner">

                {/* Screen Content Container */}
                <div className="h-full w-full overflow-hidden relative rounded-[38px]">

                  {/* Status Bar */}
                  <div className={`absolute top-0 left-0 w-full h-8 px-6 flex items-center justify-between z-50 text-[10px] font-bold ${(!isCrashed && !isNotifying && !isHelpReceived) ? 'text-white/80' : 'text-dark/70'}`}>
                    <span>9:41</span>
                    <div className="flex gap-1.5 items-center">
                      <div className="flex gap-0.5 items-end">
                        <div className={`w-0.5 h-1 ${(!isCrashed && !isNotifying && !isHelpReceived) ? 'bg-white/30' : 'bg-dark/40'} rounded-full`}></div>
                        <div className={`w-0.5 h-1.5 ${(!isCrashed && !isNotifying && !isHelpReceived) ? 'bg-white/30' : 'bg-dark/40'} rounded-full`}></div>
                        <div className={`w-0.5 h-2 ${(!isCrashed && !isNotifying && !isHelpReceived) ? 'bg-white/80' : 'bg-dark/70'} rounded-full`}></div>
                        <div className={`w-0.5 h-3 ${(!isCrashed && !isNotifying && !isHelpReceived) ? 'bg-white/80' : 'bg-dark/70'} rounded-full`}></div>
                      </div>
                      <div className={`w-5 h-2.5 border-[1px] ${(!isCrashed && !isNotifying && !isHelpReceived) ? 'border-white/30' : 'border-dark/30'} rounded-[2px] p-[1px] flex items-center`}>
                        <div className={`w-full h-full ${(!isCrashed && !isNotifying && !isHelpReceived) ? 'bg-white/80' : 'bg-dark/80'} rounded-[1px]`}></div>
                      </div>
                    </div>
                  </div>

                  {/* Dynamic Island / Notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-[60] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-gray-900 rounded-full absolute right-4"></div>
                  </div>

                  <AnimatePresence mode="wait">
                    {isHelpReceived ? (
                      <motion.div
                        key="help-received"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-full w-full bg-white p-6 flex flex-col items-center justify-center text-center space-y-6"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 200, damping: 10 }}
                          className="w-24 h-24 bg-success rounded-full flex items-center justify-center shadow-xl shadow-success/20"
                        >
                          <FaCheckCircle className="text-white text-5xl" />
                        </motion.div>
                        <div className="space-y-2">
                          <h3 className="text-2xl font-black text-dark uppercase tracking-tighter">Help Received</h3>
                          <p className="text-sm text-text-secondary leading-relaxed">Emergency units have reached the site. Your safety is our priority.</p>
                        </div>
                        <div className="flex gap-3 w-full mt-4">
                          <div className="flex-1 p-4 bg-slate-50 rounded-2xl border border-gray-100 shadow-sm">
                            <p className="text-[10px] text-text-secondary font-bold uppercase tracking-widest mb-1">Team</p>
                            <p className="text-sm font-black text-success uppercase">Active</p>
                          </div>
                          <div className="flex-1 p-4 bg-slate-50 rounded-2xl border border-gray-100 shadow-sm">
                            <p className="text-[10px] text-text-secondary font-bold uppercase tracking-widest mb-1">Site</p>
                            <p className="text-sm font-black text-success uppercase">Secured</p>
                          </div>
                        </div>
                      </motion.div>
                    ) : isNotifying ? (
                      <motion.div
                        key="notifying"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.4 }}
                        className="h-full w-full bg-slate-50 p-6 flex flex-col items-center"
                      >
                        <div className="pt-8 pb-4 w-full text-center">
                          <motion.h3
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="text-lg font-black text-emergency uppercase tracking-[0.2em]"
                          >
                            SENDING ALERTS.....
                          </motion.h3>
                        </div>

                        <div className="flex-1 flex flex-col items-center justify-center w-full">
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={currentNotifyStep}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 1.1 }}
                              transition={{ duration: 0.8, ease: "easeInOut" }}
                              className="flex flex-col items-center"
                            >
                              <div className="w-48 h-48">
                                <Lottie
                                  animationData={notificationSteps[currentNotifyStep].animation}
                                  loop={false}
                                  initialSegment={[0, 100]}
                                />
                              </div>
                              <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="mt-6 text-sm font-black text-dark uppercase tracking-widest border-b-2 border-primary/20 pb-1"
                              >
                                {notificationSteps[currentNotifyStep].name}
                              </motion.p>
                            </motion.div>
                          </AnimatePresence>
                        </div>

                        <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden mb-12">
                          <motion.div
                            className="h-full bg-primary"
                            initial={{ inlineSize: "0%" }}
                            animate={{ inlineSize: `${((currentNotifyStep + 1) / notificationSteps.length) * 100}%` }}
                            transition={{ duration: 3, ease: "linear" }}
                          />
                        </div>
                      </motion.div>
                    ) : !isCrashed ? (
                      <motion.div
                        key="simulation"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="h-full w-full bg-slate-900 relative flex flex-col justify-end"
                      >
                        <AnimatePresence>
                          {isLoading ? (
                            <motion.div
                              key="loading"
                              exit={{ opacity: 0 }}
                              className="absolute inset-0 z-50 bg-dark flex flex-col items-center justify-center space-y-6"
                            >
                              <div className="relative">
                                {/* Glow background */}
                                <div className="absolute inset-0 bg-white/30 blur-3xl rounded-full transform scale-[2.5] animate-pulse"></div>
                                <div className="relative w-32 h-32 flex items-center justify-center">
                                  <img
                                    src="/images/logo.png"
                                    alt="RESQ360 Logo"
                                    className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.8)]"
                                  />
                                </div>
                              </div>
                              <div className="space-y-3 text-center">
                                <p className="text-white font-black tracking-[0.3em] text-sm uppercase">RESQ360</p>
                                <div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden mx-auto">
                                  <motion.div
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "100%" }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-full h-full bg-emergency"
                                  />
                                </div>
                              </div>
                            </motion.div>
                          ) : null}
                        </AnimatePresence>

                        {/* Night Sky - Stars & Shooting Stars */}
                        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                          {[...Array(40)].map((_, i) => (
                            <motion.div
                              key={i}
                              animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.2, 1] }}
                              transition={{ duration: 2 + Math.random() * 4, repeat: Infinity }}
                              className="absolute bg-white rounded-full"
                              style={{
                                inlineSize: (Math.random() * 2 + 1) + 'px',
                                blockSize: (Math.random() * 2 + 1) + 'px',
                                insetBlockStart: Math.random() * 60 + '%',
                                insetInlineStart: Math.random() * 100 + '%',
                                boxShadow: '0 0 4px rgba(255,255,255,0.8)'
                              }}
                            />
                          ))}
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={`shooting-${i}`}
                              initial={{ x: "0%", y: "0%", opacity: 0 }}
                              animate={{
                                x: ["0%", "200%"],
                                y: ["0%", "150%"],
                                opacity: [0, 1, 0]
                              }}
                              transition={{
                                duration: 1.5,
                                delay: i * 4,
                                repeat: Infinity,
                                repeatDelay: 2 + Math.random() * 5
                              }}
                              className="absolute w-12 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent rotate-[35deg]"
                              style={{
                                insetBlockStart: (10 + Math.random() * 30) + '%',
                                insetInlineStart: (Math.random() * 30) + '%'
                              }}
                            />
                          ))}
                        </div>

                        {/* Solid White Glowing Moon */}
                        <div className="absolute top-16 right-6 w-12 h-12 bg-white rounded-full shadow-[0_0_30px_rgba(255,255,255,0.6)] opacity-95 z-0">
                        </div>

                        {/* Clouds */}
                        <motion.div
                          initial={{ x: 0 }}
                          animate={{ x: -30 }}
                          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                          className="absolute top-8 left-0 w-full flex justify-around opacity-30 z-0"
                        >
                          <div className="w-16 h-5 bg-white rounded-full blur-md"></div>
                          <div className="w-20 h-6 bg-white rounded-full blur-lg mt-6"></div>
                          <div className="w-14 h-4 bg-white rounded-full blur-md ml-12"></div>
                        </motion.div>

                        {/* Detailed Buildings with improved animations */}
                        <div className="absolute bottom-10 left-0 w-full flex items-end gap-1 px-1 opacity-40 pointer-events-none z-0">
                          {[
                            { h: 'h-24', w: 'w-10', wink: 3 },
                            { h: 'h-40', w: 'w-12', wink: 5 },
                            { h: 'h-32', w: 'w-9', wink: 2 },
                            { h: 'h-48', w: 'w-14', wink: 6 },
                            { h: 'h-36', w: 'w-10', wink: 4 }
                          ].map((b, i) => (
                            <div key={i} className={`${b.h} ${b.w} bg-slate-800 rounded-t-sm relative flex flex-wrap content-start gap-1 p-1`}>
                              {[...Array(12)].map((_, j) => (
                                <motion.div
                                  key={j}
                                  animate={{ opacity: [0.3, 0.9, 0.3] }}
                                  transition={{ duration: 1 + Math.random() * 5, repeat: Infinity, delay: Math.random() * 5 }}
                                  className="w-1.5 h-1.5 bg-yellow-200/60 rounded-[1px] shadow-[0_0_2px_rgba(254,240,138,0.5)]"
                                />
                              ))}
                            </div>
                          ))}
                        </div>

                        {/* Road */}
                        <div className="absolute bottom-2 left-0 w-full h-12 bg-slate-800/40 flex items-center">
                        </div>

                        {/* Truck Simulation (From Left) */}
                        {!isLoading && (
                          <motion.div
                            initial={{ x: -240, y: 0 }}
                            animate={{ x: -20 }}
                            transition={{ duration: 5, ease: "linear" }}
                            className="absolute bottom-[-45px] left-0 w-64 h-64 z-10"
                          >
                            <div className="w-full h-full overflow-hidden" style={{ clipPath: 'inset(0 0 15% 0)' }}>
                              <Lottie animationData={truckAnimation} loop={true} />
                            </div>
                          </motion.div>
                        )}

                        {/* Bike Simulation (From Right) */}
                        {!isLoading && (
                          <motion.div
                            initial={{ x: 280, y: 0, scaleX: -1, rotate: 0 }}
                            animate={{
                              x: 40,
                              rotate: [0, 0, -85],
                              y: [0, 0, 20]
                            }}
                            transition={{
                              duration: 5.8,
                              times: [0, 0.8, 1],
                              ease: "easeInOut"
                            }}
                            className="absolute bottom-3 left-0 w-36 h-36 z-20"
                          >
                            <div className="w-full h-full overflow-hidden" style={{ clipPath: 'inset(0 0 15% 0)' }}>
                              <Lottie animationData={bikeAnimation} loop={true} />
                            </div>
                          </motion.div>
                        )}

                        {/* Impact Flash Overlay */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={isCrashed ? { opacity: [0, 1, 0] } : {}}
                          transition={{ duration: 0.2 }}
                          className="absolute inset-0 bg-white z-50 pointer-events-none"
                        />

                        <div className="mb-48 text-center z-30">
                          <p className="text-white/40 text-[10px] font-mono animate-pulse tracking-widest">{isLoading ? 'INITIALIZING...' : 'SENSORS ACTIVE'}</p>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="crash-ui"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4 }}
                        className="bg-white h-full p-6 flex flex-col items-center justify-center text-center space-y-6"
                      >
                        {/* Detection Status Icons */}
                        <div className="flex gap-4 mb-2">
                          <div className="flex flex-col items-center gap-1.5">
                            <div className="w-10 h-10 rounded-xl bg-emergency/10 flex items-center justify-center text-emergency border border-emergency/20 shadow-sm">
                              <MdSpeed className="text-xl" />
                            </div>
                            <span className="text-[9px] font-black text-emergency uppercase tracking-wider">Impact</span>
                          </div>
                          <div className="flex flex-col items-center gap-1.5">
                            <div className="w-10 h-10 rounded-xl bg-emergency/10 flex items-center justify-center text-emergency border border-emergency/20 shadow-sm">
                              <MdGpsFixed className="text-xl animate-pulse" />
                            </div>
                            <span className="text-[9px] font-black text-emergency uppercase tracking-wider">GPS Active</span>
                          </div>
                        </div>

                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 200, damping: 10 }}
                          className="w-20 h-20 bg-emergency rounded-full flex items-center justify-center shadow-lg shadow-emergency/50 animate-pulse"
                        >
                          <FaShieldAlt className="text-white text-4xl" />
                        </motion.div>

                        <div className="space-y-2">
                          <h3 className="text-2xl font-black text-dark uppercase tracking-tighter leading-none">Crash Detected</h3>
                          <p className="text-sm text-text-secondary leading-tight font-medium">Emergency signals transmitting...</p>
                          <div className="py-2">
                            <p className="text-5xl font-black text-emergency tabular-nums tracking-tight">
                              00:{countdown < 10 ? `0${countdown}` : countdown}
                            </p>
                          </div>
                        </div>

                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mt-2 border border-gray-100">
                          <motion.div
                            initial={{ inlineSize: "100%" }}
                            animate={{ inlineSize: "0%" }}
                            transition={{ duration: 10, ease: "linear" }}
                            className="h-full bg-emergency"
                          />
                        </div>

                        <div className="w-full pt-4">
                          <button
                            className="w-full py-4 bg-success/10 backdrop-blur-md border border-success/30 rounded-2xl font-bold text-success cursor-default transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)] animate-pulse"
                          >
                            I am Safe
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Dynamic Glowing Accents */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] -z-10 pointer-events-none">
              <motion.div
                animate={{
                  backgroundColor: isHelpReceived ? 'rgba(34,197,94,0.15)' : (isCrashed || isNotifying) ? 'rgba(239,68,68,0.15)' : 'rgba(2,128,144,0.15)',
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 blur-[120px] rounded-full"
              />
              <motion.div
                animate={{
                  backgroundColor: isHelpReceived ? 'rgba(34,197,94,0.1)' : (isCrashed || isNotifying) ? 'rgba(239,68,68,0.1)' : 'rgba(59,130,246,0.1)',
                  scale: [1.2, 1, 1.2],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute inset-0 blur-[80px] rounded-full"
              />
            </div>


          </div>
        </motion.div>
      </div>
    </div >
  );
};

export default Hero;
