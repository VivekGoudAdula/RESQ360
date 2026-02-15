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
    <section className="py-12 bg-[#020617] relative overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10 space-y-3">
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
            className="text-white/70 text-xl max-w-2xl mx-auto font-poppins font-medium tracking-wide"
          >
            Bank-level security for your emergency data
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {features.map((feature, index) => (
            <TiltCard key={index} className="group hover-float-icon">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl transition-all duration-700 hover:bg-white/[0.08] hover:border-primary/40 flex flex-col relative overflow-hidden"
              >
                {/* Animated shimmer overlay */}
                <div className="absolute inset-0 border-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-primary/30 blur-[40px] rounded-full scale-150 opacity-0 group-hover:opacity-60 transition-all duration-700" />

                  <motion.div
                    className="w-24 h-24 bg-primary text-white rounded-[2rem] shadow-2xl flex items-center justify-center text-5xl relative z-10 card-icon"
                    style={{
                      boxShadow: '0 20px 40px -10px rgba(59, 130, 246, 0.5)',
                    }}
                  >
                    {feature.icon}
                  </motion.div>
                </div>

                <div className="space-y-6 flex-1 flex flex-col justify-center">
                  <div>
                    <div className="px-3 py-1 bg-primary/20 text-primary text-[10px] font-poppins font-black tracking-widest rounded-full inline-block mb-4">
                      {feature.tag}
                    </div>
                    <h3 className="text-3xl font-poppins font-black tracking-tight text-white mb-4 leading-tight group-hover:text-primary transition-colors duration-500">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-white/70 text-[18px] leading-relaxed font-poppins">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>

        {/* Improved Certifications Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20">
            {[
              { name: "SOC2", sub: "Type II Certified" },
              { name: "ISO 27001", sub: "Global Standard" },
              { name: "HIPAA", sub: "Healthcare Ready" },
              { name: "GDPR", sub: "Privacy Minded" }
            ].map((cert, i) => (
              <div key={i} className="flex flex-col items-center group relative cursor-default">
                <span className="text-4xl font-poppins font-black text-white group-hover:text-primary transition-all duration-500 tracking-tighter uppercase shrink-0 px-2">
                  {cert.name}
                </span>
                <span className="text-[12px] font-bold font-poppins text-white/70 group-hover:text-white transition-all duration-500 uppercase tracking-[0.3em] mt-1 shrink-0">
                  {cert.sub}
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Security;
