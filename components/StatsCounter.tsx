'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface CounterProps {
    value: number;
    suffix?: string;
    duration?: number;
}

const Counter: React.FC<CounterProps> = ({ value, suffix = "", duration = 2 }) => {
    const [hasAnimated, setHasAnimated] = useState(false);
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());
    const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

    useEffect(() => {
        if (inView && !hasAnimated) {
            const controls = animate(count, value, {
                duration: duration,
                ease: "easeOut",
            });
            setHasAnimated(true);
            return controls.stop;
        }
    }, [inView, value, count, duration, hasAnimated]);

    return (
        <motion.span
            ref={ref}
            className="inline-block"
            animate={hasAnimated ? { scale: [1, 1.1, 1] } : {}}
            transition={{ delay: duration, duration: 0.5 }}
        >
            <motion.span>{rounded}</motion.span>
            {suffix}
        </motion.span>
    );
};

const StatsCounter: React.FC = () => {
    const stats = [
        { label: "Users Protected", value: 12000, suffix: "+" },
        { label: "Faster Response", value: 50, suffix: "%", prefix: "30-" },
        { label: "Avg Alert Time", value: 43, suffix: "sec" },
        { label: "Monitoring", value: 24, suffix: "/7" },
    ];

    return (
        <section className="relative w-full py-24 overflow-hidden bg-gradient-to-r from-[#028090] to-[#014751]">
            {/* Wave Background Animation */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="wave-animation" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center text-white">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="space-y-4"
                        >
                            <div className="text-5xl md:text-7xl font-poppins font-black tracking-tight drop-shadow-lg">
                                {stat.prefix}
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </div>
                            <p className="text-teal-100 text-lg md:text-xl font-poppins font-medium uppercase tracking-widest opacity-80">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsCounter;
