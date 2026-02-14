
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HiChatBubbleLeftRight } from 'react-icons/hi2';

const ChatWidget: React.FC = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl z-40 group animate-bounce"
    >
      <HiChatBubbleLeftRight className="text-2xl" />
      <span className="absolute right-full mr-4 bg-dark text-white px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Chat with Support
      </span>
      {/* Pulse effect */}
      <div className="absolute inset-0 rounded-full border-4 border-primary animate-ping opacity-20"></div>
    </motion.button>
  );
};

export default ChatWidget;
