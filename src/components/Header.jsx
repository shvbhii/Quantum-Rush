
import React from 'react';
import { useGameStore } from '../store/gameStore';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Header = () => {
  
  
  
  const theme = useGameStore(state => state.theme);
  const toggleTheme = useGameStore(state => state.toggleTheme);
  

  return (
    <header className="absolute top-0 left-0 right-0 p-4 z-50 flex justify-between items-center bg-transparent">
      <div className="text-left">
        <h1 className="text-2xl md:text-4xl font-black tracking-wider uppercase text-accent-light dark:text-accent-dark drop-shadow-lg">
          Quantum Rush
        </h1>
        <p className="text-sm md:text-base text-gray-400 dark:text-gray-500">
          - By Shubhi Sharma -
        </p>
      </div>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-primary-light/50 dark:bg-primary-dark/50 text-white hover:bg-primary-light dark:hover:bg-primary-dark transition-colors"
        aria-label="Toggle Theme"
      >
        <motion.div
          key={theme}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
        </motion.div>
      </button>
    </header>
  );
};

export default React.memo(Header);