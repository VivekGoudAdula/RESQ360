
'use client';

import React, { useEffect, useRef } from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import AmbulanceAnimation from './AmbulanceAnimation';

const FinalCTA: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-8 lg:py-10 overflow-hidden bg-gradient-to-br from-teal-600 via-teal-700 to-teal-900 section-fade-in font-display"
    >
      {/* Animated Radial Pulse Background */}
      <div className="absolute inset-0 bg-radial-pulse"></div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern-teal opacity-20"></div>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl animate-float-orb"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-teal-300/20 rounded-full blur-3xl animate-float-orb-reverse"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-b from-white to-teal-50 bg-clip-text text-transparent leading-tight animate-fade-in-up drop-shadow-md pb-2">
              Don't Wait For An{' '}
              <span className="block mt-1 text-white font-extrabold drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] tracking-wide">
                Emergency
              </span>
            </h2>

            <p className="text-lg md:text-xl text-teal-50/90 max-w-xl animate-fade-in-up-delay">
              Download RESQ360 today. It could save your life.
            </p>

            {/* App Store Buttons */}
            {/* Removed App Store and Google Play download buttons */}

            {/* Trust Indicator removed as requested */}
          </div>

          {/* Right - Ambulance Animation */}
          <AmbulanceAnimation />

        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .section-fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1s ease-out, transform 1s ease-out;
        }

        .section-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes radial-pulse {
          0%, 100% {
            background: radial-gradient(circle at 50% 50%, rgba(20, 184, 166, 0.3) 0%, transparent 70%);
          }
          50% {
            background: radial-gradient(circle at 50% 50%, rgba(20, 184, 166, 0.5) 0%, transparent 80%);
          }
        }

        .bg-radial-pulse {
          animation: radial-pulse 4s ease-in-out infinite;
        }

        .bg-grid-pattern-teal {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: grid-drift 30s linear infinite;
        }

        @keyframes grid-drift {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
        }

        @keyframes float-orb {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(40px, -40px) scale(1.1);
          }
        }

        @keyframes float-orb-reverse {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-30px, 30px) scale(1.15);
          }
        }

        .animate-float-orb {
          animation: float-orb 20s ease-in-out infinite;
        }

        .animate-float-orb-reverse {
          animation: float-orb-reverse 25s ease-in-out infinite;
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.2s both;
        }

        .animate-fade-in-up-delay {
          animation: fade-in-up 1s ease-out 0.4s both;
        }

        .animate-fade-in-up-delay-2 {
          animation: fade-in-up 1s ease-out 0.6s both;
        }

        .animate-fade-in-up-delay-3 {
          animation: fade-in-up 1s ease-out 0.8s both;
        }

        @keyframes float-phone {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(-2deg);
          }
        }

        .animate-float-phone {
          animation: float-phone 6s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }

        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      `}} />
    </section >
  );
};

export default FinalCTA;
