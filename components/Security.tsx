'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { LuShieldCheck, LuLock, LuEyeOff, LuCpu, LuNetwork, LuDatabase } from 'react-icons/lu';

const TiltCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative flex flex-col ${className} perspective-1000`}
    >
      <div className="flex-1 flex flex-col" style={{ transform: "translateZ(50px)" }}>
        {children}
      </div>
    </motion.div>
  );
};

const Security: React.FC = () => {
  const features = [
    {
      icon: <LuLock />,
      title: "End-to-End Encryption",
      description: "Your data is always protected with bank-level AES-256 encryption.",
      tag: "PROTECTED",
    },
    {
      icon: <LuShieldCheck />,
      title: "GDPR Compliant",
      description: "Strict adherence to global privacy standards and data sovereignty.",
      tag: "COMPLIANT",
    },
    {
      icon: <LuEyeOff />,
      title: "Zero Data Selling",
      description: "We never monetize your private data. Your safety is our only currency.",
      tag: "PRIVATE",
    }
  ];

  const floatingNodes = [
    { icon: <LuCpu />, top: '5%', left: '10%', delay: 0 },
    { icon: <LuNetwork />, top: '25%', left: '90%', delay: 2 },
    { icon: <LuDatabase />, top: '65%', left: '5%', delay: 4 },
    { icon: <LuShieldCheck />, top: '75%', left: '85%', delay: 1 },
    { icon: <LuLock />, top: '40%', left: '50%', delay: 3 },
  ];

  return (
    <section className="pt-4 pb-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* 🔒 BOXED DARK SECTION */}
        <div className="bg-[#020617] rounded-[48px] py-16 px-6 relative overflow-hidden border border-gray-900 shadow-2xl">

          <div className="absolute inset-0 pointer-events-none overflow-hidden text-white">
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/20 rounded-full nebula-blob blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/20 rounded-full nebula-blob blur-[120px]" style={{ animationDelay: '-8s' }} />
            <div className="absolute inset-x-0 bottom-0 h-full cyber-grid opacity-10" />

            {/* Floating Icons */}
            {floatingNodes.map((node, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.3, 0],
                  y: [0, -50, 0],
                  x: [0, 20, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 15 + i * 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: node.delay
                }}
                style={{ top: node.top, left: node.left }}
                className="absolute text-5xl text-primary/40"
              >
                {node.icon}
              </motion.div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-10 space-y-3">
              <motion.h2
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-poppins font-black tracking-tight text-white leading-[1.1]"
              >
                Your Privacy, Our <span className="bg-gradient-to-tr from-primary via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">Priority</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-white/70 text-lg max-w-2xl mx-auto font-poppins font-medium tracking-wide"
              >
                Built for reliability, designed for life saving moments.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {features.map((feature, index) => (
                <TiltCard key={index} className="group hover-float-icon">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full p-6 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl transition-all duration-700 hover:bg-white/[0.08] hover:border-primary/40 flex flex-col relative overflow-hidden min-h-[280px]"
                  >
                    {/* Animated shimmer overlay */}
                    <div className="absolute inset-0 border-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    <div className="relative mb-4">
                      <div className="absolute inset-0 bg-primary/30 blur-[30px] rounded-full scale-150 opacity-0 group-hover:opacity-60 transition-all duration-700" />

                      <motion.div
                        className="w-16 h-16 bg-primary text-white rounded-2xl shadow-xl flex items-center justify-center text-3xl relative z-10 card-icon"
                        style={{
                          boxShadow: '0 15px 30px -8px rgba(59, 130, 246, 0.5)',
                        }}
                      >
                        {feature.icon}
                      </motion.div>
                    </div>

                    <div className="space-y-3 flex-1 flex flex-col justify-start">
                      <div>
                        <div className="px-2 py-0.5 bg-primary/20 text-primary text-[9px] font-poppins font-black tracking-widest rounded-full inline-block mb-2">
                          {feature.tag}
                        </div>
                        <h3 className="text-xl font-poppins font-black tracking-tight text-white mb-2 leading-tight group-hover:text-primary transition-colors duration-500">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-white/70 text-sm leading-relaxed font-poppins">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
