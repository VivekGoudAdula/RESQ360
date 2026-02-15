'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    HiOutlineTruck,
    HiOutlineBuildingOffice2,
    HiOutlineBeaker,
    HiOutlineUserGroup,
    HiOutlineShieldCheck,
    HiOutlineWrench,
    HiOutlineCog,
    HiOutlineChartBar
} from 'react-icons/hi2';

const services = [
    {
        title: "Ambulance Services",
        description: "Instant ambulance dispatch with real-time tracking and coordination for critical emergency response.",
        icon: <HiOutlineTruck />,
        color: "red"
    },
    {
        title: "Hospital Finder",
        description: "Locate nearby hospitals with emergency facilities and get instant navigation support.",
        icon: <HiOutlineBuildingOffice2 />,
        color: "blue"
    },
    {
        title: "Blood Banks",
        description: "Check real-time blood availability in nearby blood banks and request urgently when needed.",
        icon: <HiOutlineBeaker />,
        color: "pink"
    },
    {
        title: "Family Alerts",
        description: "Automatically notify selected family members via app, SMS, and call during emergencies.",
        icon: <HiOutlineUserGroup />,
        color: "indigo"
    },
    {
        title: "Police Dispatch",
        description: "Immediate police notification and dispatch for emergency situations requiring law enforcement.",
        icon: <HiOutlineShieldCheck />,
        color: "teal"
    },
    {
        title: "Mechanic Services",
        description: "Connect with nearby mechanics for roadside assistance and vehicle emergency repairs.",
        icon: <HiOutlineWrench />,
        color: "orange"
    },
    {
        title: "Towing Services",
        description: "Quick towing service dispatch to safely transport your vehicle from the accident site.",
        icon: <HiOutlineCog />,
        color: "cyan"
    },
    {
        title: "Real-Time Analytics",
        description: "Monitor emergency response metrics and track all stakeholder coordination in real-time.",
        icon: <HiOutlineChartBar />,
        color: "green"
    }
];

const Ecosystem: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section className="py-12 bg-white font-poppins relative overflow-hidden">
            {/* Subtle background decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-emergency/10 rounded-full blur-[100px] -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-emergency/10 rounded-full blur-[100px] -ml-48 -mb-48" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight"
                    >
                        Complete Emergency <span className="text-emergency">Ecosystem</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-text-secondary font-medium max-w-2xl mx-auto"
                    >
                        All the help you need, connected instantly
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                            className="group bg-white backdrop-blur-md p-6 rounded-[20px] border border-gray-100 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-5px_rgba(220,38,38,0.3)] hover:border-emergency/40 transition-all duration-300 flex flex-col items-start text-left relative overflow-hidden"
                        >
                            {/* Card Accent Glow */}
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-emergency/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className={`text-2xl mb-4 p-2.5 rounded-xl bg-emergency/10 text-emergency group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                                {service.icon}
                            </div>

                            <h3 className="text-base font-bold text-[#0F172A] mb-2 group-hover:text-emergency transition-colors duration-300">
                                {service.title}
                            </h3>

                            <p className="text-gray-600 text-[14px] leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Ecosystem;
