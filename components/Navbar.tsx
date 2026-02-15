
'use client';

import React, { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Download', href: '#download' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.05)] py-2.5' : 'bg-transparent py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <img
            src="/images/logo.png"
            alt="RESQ360 Logo"
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />

        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ y: -2, opacity: 0.8 }}
              onClick={(e) => scrollToSection(e, link.href)}
              className="relative text-[15px] font-bold text-dark tracking-tight transition-all duration-300 group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-emergency transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(220, 38, 38, 0.4)' }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3 bg-emergency text-white rounded-full font-black text-sm tracking-widest uppercase shadow-[0_4px_14px_0_rgba(220,38,38,0.39)] transition-all duration-300"
          >
            Get Started
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-3xl text-dark p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 lg:hidden overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-xl font-black text-dark hover:text-emergency transition-colors tracking-tight"
                >
                  {link.name}
                </a>
              ))}
              <button className="mt-4 w-full py-4 bg-emergency text-white rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-emergency/20">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
