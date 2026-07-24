import { motion } from 'motion/react';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <a href="#" className={`group flex items-center gap-3 ${className}`}>
      <motion.div 
        whileHover={{ scale: 1.05, rotate: 2 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(255,69,0,0.6)]"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="logo-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FACC15" />
              <stop offset="50%" stopColor="#F97316" />
              <stop offset="100%" stopColor="#EA580C" />
            </linearGradient>
            <linearGradient id="logo-grad-2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#B45309" />
              <stop offset="50%" stopColor="#EA580C" />
              <stop offset="100%" stopColor="#F97316" />
            </linearGradient>
          </defs>
          {/* Main D Shape with slanted left stem */}
          <path d="M25 15 L65 15 C85 15 95 30 90 55 C85 80 60 85 35 85 L15 85 Z" fill="url(#logo-grad-1)" />
          {/* Inner Cutout matching the slant */}
          <path d="M40 35 L58 35 C68 35 72 42 70 52 C68 62 60 65 50 65 L32 65 Z" fill="#050505" />
          {/* Dynamic Red Swoosh overlapping the bottom */}
          <path d="M5 90 C 40 100 85 85 100 50 C 85 85 45 100 15 80 Z" fill="url(#logo-grad-2)" />
        </svg>
      </motion.div>
      <span className="text-2xl md:text-3xl font-display font-bold tracking-wider text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-highlight group-hover:to-primary transition-all duration-300">
        DAVRAJ
      </span>
    </a>
  );
}
