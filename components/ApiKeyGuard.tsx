'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaKey, FaShieldAlt } from 'react-icons/fa';

// Removed local declare global for aistudio as it conflicts with existing environment definitions.
// We will access window.aistudio via casting to any where needed.

const ApiKeyGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hasKey, setHasKey] = useState<boolean | null>(null);

  useEffect(() => {
    const checkKey = async () => {
      // Fix: cast window to any to access aistudio which is pre-configured in the environment
      const selected = await (window as any).aistudio.hasSelectedApiKey();
      setHasKey(selected);
    };
    checkKey();
  }, []);

  const handleOpenKey = async () => {
    // Fix: cast window to any to access aistudio which is pre-configured in the environment
    await (window as any).aistudio.openSelectKey();
    // Proceed immediately per instructions to avoid race condition
    setHasKey(true);
  };

  if (hasKey === null) return null;

  if (!hasKey) {
    return (
      <div className="fixed inset-0 z-[100] bg-dark flex items-center justify-center p-6">
        <div className="max-w-md w-full glass-card p-10 rounded-[40px] text-center space-y-8 border-primary/30">
          <div className="w-20 h-20 bg-primary/20 rounded-3xl flex items-center justify-center mx-auto text-primary text-4xl">
            <FaShieldAlt />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-manrope font-extrabold text-white">Unlock RESQ360 AI</h2>
            <p className="text-white/60 text-sm leading-relaxed">
              To experience the AI-powered video simulations, you must select your own Google Cloud API key. 
              Please ensure billing is enabled for your project.
            </p>
            <a 
              href="https://ai.google.dev/gemini-api/docs/billing" 
              target="_blank" 
              className="text-primary text-xs font-bold hover:underline block"
            >
              Learn about Billing Documentation
            </a>
          </div>
          <button 
            onClick={handleOpenKey}
            className="w-full py-4 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-primary-dark transition-all shadow-xl shadow-primary/20"
          >
            <FaKey /> Select Paid API Key
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ApiKeyGuard;