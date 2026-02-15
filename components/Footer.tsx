'use client';

import React, { useEffect, useRef } from 'react';
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('footer-visible');

            // Staggered animation for columns
            const columns = entry.target.querySelectorAll('.footer-column');
            columns.forEach((col, idx) => {
              setTimeout(() => {
                col.classList.add('column-visible');
              }, idx * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="relative z-20 pt-16 pb-8 bg-gradient-to-b from-teal-900 via-gray-900 to-gray-950 text-white footer-fade-in">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-float-slow pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-float-slower pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div className="space-y-6 footer-column">
            <div className="flex items-center gap-3 group">
              <span className="text-5xl animate-pulse-glow">⚡</span>
              <h3 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                RESQ360
              </h3>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Your life-saving emergency response system
            </p>
            <div className="flex gap-4">
              {[
                { Icon: FaTwitter, href: '#', label: 'Twitter', color: 'hover:bg-blue-500/20 hover:border-blue-400' },
                { Icon: FaInstagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-500/20 hover:border-pink-400' },
                { Icon: FaLinkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-600/20 hover:border-blue-500' },
                { Icon: FaFacebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-700/20 hover:border-blue-600' }
              ].map(({ Icon, href, label, color }, idx) => (
                <a
                  key={idx}
                  href={href}
                  aria-label={label}
                  className={`social-icon w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 hover:scale-125 hover:rotate-12 hover:shadow-lg hover:shadow-indigo-500/50 group ${color}`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <Icon className="text-gray-400 group-hover:text-white transition-all duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Product */}
          <div className="footer-column">
            <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider relative inline-block">
              Product
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </h4>
            <ul className="space-y-3.5 text-sm">
              {['Features', 'How It Works', 'Pricing', 'Download', 'Security'].map((item, idx) => (
                <li key={item} className="link-item" style={{ animationDelay: `${idx * 0.05}s` }}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-flex items-center gap-2 group relative"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 transition-all duration-300 group-hover:w-4"></span>
                    <span className="relative overflow-hidden">
                      {item}
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="footer-column">
            <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider relative inline-block">
              Company
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </h4>
            <ul className="space-y-3.5 text-sm">
              {['About Us', 'Careers', 'Press Kit', 'Blog', 'Contact'].map((item, idx) => (
                <li key={item} className="link-item" style={{ animationDelay: `${idx * 0.05}s` }}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-flex items-center gap-2 group relative"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 transition-all duration-300 group-hover:w-4"></span>
                    <span className="relative overflow-hidden">
                      {item}
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className="footer-column">
            <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider relative inline-block">
              Legal
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </h4>
            <ul className="space-y-3.5 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'].map((item, idx) => (
                <li key={item} className="link-item" style={{ animationDelay: `${idx * 0.05}s` }}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-flex items-center gap-2 group relative"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 transition-all duration-300 group-hover:w-4"></span>
                    <span className="relative overflow-hidden">
                      {item}
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm relative">
          <p className="text-gray-400 hover:text-white transition-colors duration-300">
            © 2024 RESQ360. All rights reserved.
          </p>
          <p className="text-gray-400 flex items-center gap-2 hover:text-white transition-colors duration-300">
            Made in India
          </p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .footer-fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .footer-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .footer-column {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .column-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .link-item {
          opacity: 0;
          animation: fadeInUp 0.5s ease-out forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .social-icon {
          animation: floatSocial 3s ease-in-out infinite;
        }

        @keyframes floatSocial {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(30px, -30px);
          }
        }

        @keyframes float-slower {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-30px, -20px);
          }
        }

        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }

        .animate-float-slower {
          animation: float-slower 25s ease-in-out infinite;
        }

        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradient-x 3s ease infinite;
        }

        @keyframes pulse-glow {
          0%, 100% {
            filter: drop-shadow(0 0 5px rgba(99, 102, 241, 0.5));
          }
          50% {
            filter: drop-shadow(0 0 15px rgba(99, 102, 241, 0.8));
          }
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.2);
          }
          50% {
            transform: scale(1);
          }
          75% {
            transform: scale(1.1);
          }
        }

        .animate-heartbeat {
          animation: heartbeat 1.5s ease-in-out infinite;
        }

        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: grid-move 20s linear infinite;
        }

        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
      `}} />
    </footer >
  );
};

export default Footer;
