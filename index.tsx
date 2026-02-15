
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Problem from './components/Problem';
import Features from './components/Features';
import Demo from './components/Demo';
import FeatureGrid from './components/FeatureGrid';
import Ecosystem from './components/Ecosystem';
import Security from './components/Security';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';

const App = () => {
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

      <FeatureGrid />
      <Ecosystem />
      <Security />

      <section id="pricing">
        <Pricing />
      </section>

      <FAQ />

      <section id="download">
        <FinalCTA />
      </section>

      <Footer />

      <BackToTop />
    </main>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
