
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { emoji: '🚗', title: 'Impact', time: '0s', desc: 'Crash detected via smartphone sensors' },
  { emoji: '📡', title: 'Alerts', time: '5s', desc: 'Multi-channel emergency broadcast' },
  { emoji: '🚑', title: 'Action', time: '30s', desc: 'Medical teams dispatched instantly' },
];

const Demo: React.FC = () => {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-white mb-4">How It <span className="text-primary">Works</span></h2>
          <p className="text-white/60 text-lg">Our systematic approach ensures rapid life-saving coordination.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-center">
          {/* Steps (Left 2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="p-6 glass-card rounded-3xl flex items-center gap-6 group hover:bg-white/10 transition-all border-white/5"
              >
                <div className="text-4xl group-hover:scale-110 transition-transform">{step.emoji}</div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-accent text-[10px] font-black uppercase tracking-widest">{step.time}</span>
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Visual Simulation (Right 3 cols) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-3 aspect-video rounded-[40px] overflow-hidden border border-white/10 shadow-3xl relative bg-gradient-to-br from-primary-dark/50 to-dark"
          >
            {/* Visual representation of a digital map */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
               <div className="w-full h-full relative">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                  
                  {/* Pulsing Alert Hub */}
                  <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 bg-emergency rounded-full blur-xl opacity-60 animate-pulse"></div>
                    <div className="w-4 h-4 bg-emergency rounded-full relative z-10 shadow-[0_0_20px_#DC2626]"></div>
                  </div>

                  {/* Animated Paths */}
                  <svg className="w-full h-full relative z-0" viewBox="0 0 400 200">
                    <motion.path 
                      d="M100 100 L200 60 L320 120" 
                      stroke="#02C39A" 
                      strokeWidth="2" 
                      fill="none" 
                      strokeDasharray="8,8"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.path 
                      d="M100 100 L180 140 L280 160" 
                      stroke="#028090" 
                      strokeWidth="2" 
                      fill="none" 
                      strokeDasharray="8,8"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                    />
                    {/* Destination Nodes */}
                    <circle cx="320" cy="120" r="5" fill="#02C39A" />
                    <circle cx="280" cy="160" r="5" fill="#028090" />
                  </svg>

                  {/* Node Labels */}
                  <div className="absolute top-[30%] right-[15%] text-accent text-[10px] font-bold uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-full border border-accent/20">Nearest Trauma Center</div>
                  <div className="absolute bottom-[20%] right-[25%] text-primary text-[10px] font-bold uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full border border-primary/20">Police Response</div>
               </div>
            </div>
            
            {/* UI Overlay */}
            <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-8">
              <div className="flex justify-end">
                <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-3">
                  <span className="w-2 h-2 bg-success rounded-full animate-ping"></span>
                  <span className="text-[10px] text-white font-bold tracking-widest uppercase">System Online</span>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-black/60 backdrop-blur-md self-start p-4 rounded-3xl border border-white/10 shadow-2xl">
                <div className="w-10 h-10 bg-emergency/20 rounded-2xl flex items-center justify-center text-emergency text-xl">
                   📡
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] text-white/50 font-black uppercase tracking-widest">Protocol Delta</p>
                  <p className="text-xs text-white font-bold italic">Simultaneous Alerts Dispatched</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 bg-white/5 px-10 py-5 rounded-full border border-white/10 hover:bg-white/10 transition-all cursor-default">
            <span className="text-white/70 font-medium">Verified Response Accuracy</span>
            <span className="text-4xl font-extrabold text-accent">99.8%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
