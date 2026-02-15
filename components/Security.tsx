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
      className={`relative ${className} perspective-1000`}
    >
      <div style={{ transform: "translateZ(50px)" }}>
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
  ];

  return (
    <section className="py-20 bg-[#020617] relative overflow-hidden">
      {/* "Great" Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Nebula Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary rounded-full nebula-blob" />
        <div className="absolute bottom-[0%] right-[-5%] w-[35%] h-[35%] bg-indigo-600 rounded-full nebula-blob" style={{ animationDelay: '-5s' }} />

        {/* Cyber Grid */}
        <div className="absolute inset-x-0 bottom-0 h-full cyber-grid opacity-20" />

        {/* Light Sweep */}
        <div className="absolute inset-0 light-sweep opacity-30" />

        {/* Floating Icons */}
        {floatingNodes.map((node, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              y: [0, -30, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: node.delay
            }}
            style={{ top: node.top, left: node.left }}
            className="absolute text-4xl text-primary/30"
          >
            {node.icon}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-poppins font-bold tracking-[0.25em]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            SECURITY INFRASTRUCTURE
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-7xl font-poppins font-black tracking-tight text-white leading-[1.1]"
          >
            Your Privacy, Our <span className="bg-gradient-to-tr from-primary via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">Priority</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto font-poppins font-medium tracking-wide"
          >
            Bank-level security for your emergency data
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {features.map((feature, index) => (
            <TiltCard key={index} className="flex-1 group h-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                className="h-full p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 hover:border-primary/40 hover:bg-white/[0.08]"
              >
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-125 opacity-0 group-hover:opacity-40 transition-opacity duration-500" />

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-20 h-20 bg-primary text-white rounded-3xl shadow-2xl flex items-center justify-center text-4xl relative z-10"
                    style={{
                      boxShadow: '0 15px 30px -5px rgba(59, 130, 246, 0.4)',
                    }}
                  >
                    {feature.icon}
                  </motion.div>
                </div>

                <div className="space-y-4">
                  <div className="px-2.5 py-1 bg-primary/20 text-primary text-[10px] font-poppins font-black tracking-widest rounded-full inline-block">
                    {feature.tag}
                  </div>
                  <h3 className="text-2xl font-poppins font-bold tracking-tight text-white">{feature.title}</h3>
                  <p className="text-gray-400 text-base leading-relaxed font-poppins">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>

        {/* Certifications Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 pt-10 border-t border-white/5"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            {[
              { name: "SOC2", sub: "Type II" },
              { name: "ISO 27001", sub: "Global" },
              { name: "HIPAA", sub: "Healthcare" },
              { name: "GDPR", sub: "Privacy" }
            ].map((cert, i) => (
              <div key={i} className="flex flex-col items-center group">
                <span className="text-xl font-black font-poppins text-white/20 group-hover:text-primary transition-colors cursor-default tracking-tighter uppercase shrink-0">
                  {cert.name}
                </span>
                <span className="text-[9px] font-bold font-poppins text-white/40 opacity-0 group-hover:opacity-100 transition-all uppercase tracking-[0.2em] -mt-1 shrink-0">
                  {cert.sub}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Security;
