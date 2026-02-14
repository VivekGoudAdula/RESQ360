
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenAI } from "@google/genai";
import { FaSpinner, FaMagic } from 'react-icons/fa';

interface VeoVideoProps {
  prompt: string;
  resolution?: '720p' | '1080p';
  aspectRatio?: '16:9' | '9:16';
  className?: string;
  autoPlay?: boolean;
}

const VeoVideo: React.FC<VeoVideoProps> = ({ 
  prompt, 
  resolution = '720p', 
  aspectRatio = '16:9',
  className = '',
  autoPlay = true
}) => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [status, setStatus] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateVideo = async () => {
    setIsGenerating(true);
    setError(null);
    setStatus('Initializing AI model...');

    try {
      // Use the injected process.env.API_KEY directly
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      setStatus('Prompting Veo for simulation...');
      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: prompt,
        config: {
          numberOfVideos: 1,
          resolution: resolution,
          aspectRatio: aspectRatio
        }
      });

      setStatus('AI is dreaming up your video... This may take a minute.');
      
      let retryCount = 0;
      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 10000));
        retryCount++;
        
        if (retryCount === 2) setStatus('Adding cinematic details...');
        if (retryCount === 4) setStatus('Polishing the emergency response visuals...');
        if (retryCount === 6) setStatus('Almost there, finalizing frames...');
        
        operation = await ai.operations.getVideosOperation({ operation: operation });
      }

      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (!downloadLink) throw new Error("Video generation failed.");

      setStatus('Fetching secure video stream...');
      const response = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
      if (!response.ok) throw new Error("Could not download video. Please check API permissions.");
      
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setVideoUrl(url);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to generate video.");
    } finally {
      setIsGenerating(false);
    }
  };

  useEffect(() => {
    generateVideo();
  }, []);

  return (
    <div className={`relative overflow-hidden bg-gray-900 flex items-center justify-center ${className}`}>
      <AnimatePresence mode="wait">
        {isGenerating ? (
          <motion.div 
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center text-center p-8 space-y-6"
          >
            <div className="relative">
              <FaSpinner className="text-5xl text-primary animate-spin" />
              <FaMagic className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-accent text-xl animate-pulse" />
            </div>
            <div className="space-y-2">
              <p className="text-white font-bold text-lg">{status}</p>
              <p className="text-white/40 text-xs uppercase tracking-widest">Veo 3.1 AI Generation</p>
            </div>
          </motion.div>
        ) : error ? (
          <motion.div 
            key="error"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-8 text-center space-y-4"
          >
            <p className="text-emergency font-bold">{error}</p>
            <button 
              onClick={generateVideo}
              className="px-6 py-2 bg-primary text-white rounded-xl text-sm font-bold"
            >
              Retry Generation
            </button>
          </motion.div>
        ) : videoUrl ? (
          <motion.video
            key="video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            src={videoUrl}
            autoPlay={autoPlay}
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default VeoVideo;
