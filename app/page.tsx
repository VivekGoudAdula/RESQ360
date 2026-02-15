
'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import Problem from '../components/Problem';
import Features from '../components/Features';
import Demo from '../components/Demo';
import Ecosystem from '../components/Ecosystem';
import Testimonials from '../components/Testimonials';
import Security from '../components/Security';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';
import ChatWidget from '../components/ChatWidget';
import BackToTop from '../components/BackToTop';


export default function Home() {
  return (
    <main className="relative bg-white overflow-hidden">
      <ScrollProgress />
      <Navbar />

      <section id="hero">
        <Hero />
      </section>

      <TrustedBy />

      <section id="problem">
        <Problem />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="how-it-works">
        <Demo />
      </section>

      <section id="ecosystem">
        <Ecosystem />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <Security />

      <section id="pricing">
        <Pricing />
      </section>

      <FAQ />

      <section id="download">
        <FinalCTA />
      </section>

      <Footer />

      <ChatWidget />
      <BackToTop />

    </main>
  );
}
