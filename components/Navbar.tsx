
'use client';

import React, { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Pricing', href: '#pricing' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Only update state if the boolean value would change
      if (currentScrollY > 20 && lastScrollY <= 20) {
        setIsScrolled(true);
      } else if (currentScrollY <= 20 && lastScrollY > 20) {
        setIsScrolled(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "circOut" }
    }
  };

  const linkContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5
      }
    }
  };

  const linkVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 w-full z-50 transition-[padding,background-color,box-shadow,backdrop-filter] duration-500 ease-in-out will-change-[padding,background-color] ${isScrolled
        ? 'bg-white/90 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.05)] py-2.5'
        : 'bg-transparent py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          onClick={(e) => scrollToSection(e, '#hero')}
          className="flex items-center gap-2 group relative"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Subtle Glow Background for Logo */}
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150" />

          <div className="relative z-10 p-2 rounded-2xl bg-white/10 group-hover:bg-white transition-all duration-500 shadow-sm border border-transparent group-hover:border-primary/20 group-hover:rotate-6">
            <img
              src="/images/logo.png"
              alt="RESQ360 Logo"
              className="h-10 w-auto object-contain"
            />
          </div>

          <div className="flex flex-col -gap-1">
            <span className="text-2xl font-black tracking-tighter text-dark leading-none group-hover:text-primary transition-colors italic">RESQ360</span>
          </div>
        </motion.a>

        {/* Desktop Nav */}
        <motion.nav
          variants={linkContainerVariants}
          className="hidden lg:flex items-center gap-10"
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              variants={linkVariants}
              whileHover={{ y: -2, scale: 1.05 }}
              onClick={(e) => scrollToSection(e, link.href)}
              className="relative text-[15px] font-black text-dark tracking-tighter uppercase transition-all duration-300 group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-primary rounded-full transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </motion.nav>



        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-2xl text-dark p-2 hover:bg-gray-50 rounded-xl transition-colors"
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
                  className="text-xl font-bold text-dark hover:text-primary transition-colors tracking-tight flex items-center justify-between group"
                >
                  {link.name}
                  <div className="w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
