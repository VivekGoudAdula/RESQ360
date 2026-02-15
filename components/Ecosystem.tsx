'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    HiOutlineEye,
    HiOutlineMapPin,
    HiOutlineBellAlert,
    HiOutlineBeaker,
    HiOutlineUserGroup,
    HiOutlineClipboardDocumentCheck,
    HiOutlineBuildingOffice2,
    HiOutlineChatBubbleLeftRight
} from 'react-icons/hi2';

const services = [
    {
        title: "Live Emergency Monitoring",
        description: "Monitor real-time emergency activities and stay informed during critical situations instantly.",
        icon: <HiOutlineEye />,
        color: "blue"
    },
    {
        title: "Real-Time GPS Tracking",
        description: "Track responders and loved ones live with accurate location updates and fast coordination.",
        icon: <HiOutlineMapPin />,
        color: "teal"
    },
    {
        title: "One-Tap SOS",
        description: "Trigger an emergency alert instantly and share your location with response teams in seconds.",
        icon: <HiOutlineBellAlert />,
        color: "red"
    },
    {
        title: "Blood Bank Availability",
        description: "Check real-time blood stock in nearby hospitals and request urgently when needed.",
        icon: <HiOutlineBeaker />,
        color: "pink"
    },
    {
        title: "Family Alert System",
        description: "Automatically notify selected family members via app, SMS, and call during emergencies.",
        icon: <HiOutlineUserGroup />,
        color: "indigo"
    },
    {
        title: "Secure Medical History",
        description: "Store and access medical records securely for faster and safer emergency treatment.",
        icon: <HiOutlineClipboardDocumentCheck />,
        color: "green"
    },
    {
        title: "Nearby Hospitals & Services",
        description: "Find hospitals, police stations, and pharmacies nearby with instant navigation support.",
        icon: <HiOutlineBuildingOffice2 />,
        color: "orange"
    },
    {
        title: "Emergency Chat & Support",
        description: "Chat directly with emergency teams and receive real-time guidance before help arrives.",
        icon: <HiOutlineChatBubbleLeftRight />,
        color: "cyan"
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
        <section className="py-24 bg-[#F8FAFC] font-poppins relative overflow-hidden">
            {/* Subtle background decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -ml-48 -mb-48" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight"
                    >
                        Complete Emergency Ecosystem
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-primary text-xl font-medium"
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
                            className="group bg-white/70 backdrop-blur-md p-8 rounded-[24px] border border-gray-100 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] hover:border-primary/20 transition-all duration-300 flex flex-col items-start text-left relative overflow-hidden"
                        >
                            {/* Card Accent Glow */}
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className={`text-3xl mb-6 p-3 rounded-2xl bg-primary/5 text-primary group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                                {service.icon}
                            </div>

                            <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-primary transition-colors duration-300">
                                {service.title}
                            </h3>

                            <p className="text-gray-500 text-sm leading-relaxed">
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
