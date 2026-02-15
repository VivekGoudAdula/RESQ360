'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    HiMapPin, HiBellAlert,
    HiBeaker, HiClipboardDocument, HiDevicePhoneMobile
} from 'react-icons/hi2';

const FeatureGrid = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } }
    };

    return (
        <section className="py-24 bg-white font-poppins relative overflow-hidden">
            {/* Background soft glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl lg:text-7xl font-black tracking-tighter text-dark"
                    >
                        Everything You Need <br />
                        <span className="text-primary italic">In One App</span>
                    </motion.h2>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-4 grid-rows-none md:grid-rows-3 gap-6 auto-rows-[300px]"
                >
                    {/* Large Box: Phone Recording */}
                    <motion.div
                        variants={item}
                        className="md:col-span-2 md:row-span-2 bg-[#F8FAFC] rounded-[3rem] p-10 overflow-hidden relative group border border-gray-100 shadow-sm"
                    >
                        <div className="h-full flex flex-col justify-between relative z-10">
                            <div className="space-y-3">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-2xl">
                                    <HiDevicePhoneMobile />
                                </div>
                                <h3 className="text-3xl font-black text-dark">Live Experience</h3>
                                <p className="text-text-secondary font-medium">Watch RESQ360 in action across all emergency scenarios.</p>
                            </div>
                        </div>

                        {/* Phone Mockup Animation */}
                        <motion.div
                            whileHover={{ rotate: -2, scale: 1.05 }}
                            className="absolute -right-10 -bottom-20 w-[300px] h-[500px] bg-dark rounded-[3rem] border-8 border-gray-200 shadow-2xl p-4 transition-transform duration-500"
                        >
                            <div className="w-full h-full bg-[#1e293b] rounded-[2rem] relative overflow-hidden">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-b-xl" />
                                <div className="p-6 space-y-4">
                                    <div className="h-8 w-1/2 bg-white/10 rounded-lg animate-pulse" />
                                    <div className="h-32 w-full bg-primary/20 rounded-2xl flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-primary/40 animate-ping" />
                                    </div>
                                    <div className="space-y-2">
                                        {[1, 2, 3].map(i => <div key={i} className="h-4 w-full bg-white/5 rounded-full" />)}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Medium Box 1: GPS Tracking */}
                    <motion.div
                        variants={item}
                        className="md:col-span-2 md:row-span-1 bg-white rounded-[3rem] p-10 overflow-hidden relative group border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                    >
                        <div className="flex flex-col md:flex-row justify-between h-full">
                            <div className="space-y-3 md:w-1/2">
                                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 text-xl">
                                    <HiMapPin />
                                </div>
                                <h4 className="text-2xl font-black text-dark tracking-tight">Real-time GPS Tracking</h4>
                                <p className="text-sm text-text-secondary font-medium">Precision tracking for rapid response teams.</p>
                            </div>
                            <div className="flex-1 relative mt-6 md:mt-0">
                                <div className="absolute inset-0 bg-gray-50 rounded-2xl overflow-hidden">
                                    <div className="absolute inset-0 opacity-20 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-122.4194,37.7749,12,0/400x400?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.0_vY893_3m93_3m93_3m93_3m93')] bg-cover" />
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                                        transition={{ repeat: Infinity, duration: 4 }}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/10 rounded-full border border-primary/20"
                                    />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(2,195,154,0.5)]" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Medium Box 2: One-tap SOS */}
                    <motion.div
                        variants={item}
                        className="md:col-span-1 md:row-span-1 bg-white rounded-[3rem] p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col items-center justify-center gap-6 group"
                    >
                        <div className="text-center">
                            <h4 className="font-black text-dark mb-1">One-tap SOS</h4>
                            <p className="text-xs text-text-secondary font-medium">Instant activation</p>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-24 h-24 rounded-full bg-red-500 shadow-[0_15px_30px_-5px_rgba(239,68,68,0.4)] flex items-center justify-center text-white text-3xl font-black relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-white/20 animate-pulse" />
                            SOS
                        </motion.button>
                    </motion.div>

                    {/* Small Box 1: Blood Bank */}
                    <motion.div
                        variants={item}
                        className="md:col-span-1 md:row-span-1 bg-white rounded-[3rem] p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-between group"
                    >
                        <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 text-xl">
                            <HiBeaker />
                        </div>
                        <div>
                            <h4 className="font-black text-dark">Blood Bank</h4>
                            <p className="text-xs text-text-secondary font-medium">Real-time inventory</p>
                        </div>
                    </motion.div>

                    {/* Small Box 2: Family Alerts */}
                    <motion.div
                        variants={item}
                        className="md:col-span-2 md:row-span-1 bg-white rounded-[3rem] p-10 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center gap-8 group overflow-hidden"
                    >
                        <div className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center text-primary text-3xl shrink-0 group-hover:rotate-12 transition-transform duration-500">
                            <HiBellAlert />
                        </div>
                        <div className="space-y-4 flex-1">
                            <div>
                                <h4 className="text-2xl font-black text-dark italic leading-none">Family Alerts</h4>
                                <p className="text-sm text-text-secondary font-medium mt-1">Multi-channel instant notifies.</p>
                            </div>
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center font-bold text-xs">
                                        {String.fromCharCode(64 + i)}
                                    </div>
                                ))}
                                <div className="w-10 h-10 rounded-full border-2 border-white bg-primary/10 flex items-center justify-center text-primary text-xs font-black">
                                    +5
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Small Box 3: Medical History */}
                    <motion.div
                        variants={item}
                        className="md:col-span-2 md:row-span-1 bg-dark rounded-[3rem] p-10 border border-gray-800 shadow-2xl flex items-center justify-between group"
                    >
                        <div className="space-y-2">
                            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-500">
                                <HiClipboardDocument />
                            </div>
                            <h4 className="text-2xl font-black text-white italic">Medical History</h4>
                            <p className="text-sm text-gray-400 font-medium max-w-[200px]">Securely synced, instantly available for trauma care.</p>
                        </div>
                        <div className="w-32 h-32 bg-white/5 rounded-2xl border border-white/10 rotate-12 group-hover:rotate-6 transition-transform duration-700 flex flex-col p-4 gap-2">
                            <div className="h-2 w-full bg-white/20 rounded-full" />
                            <div className="h-2 w-3/4 bg-white/10 rounded-full" />
                            <div className="h-2 w-1/2 bg-white/10 rounded-full" />
                            <div className="mt-auto h-6 w-6 rounded-full bg-primary/40 animate-pulse" />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default FeatureGrid;
