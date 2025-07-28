

import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useGameStore } from '../store/gameStore';


import carImage from '../assets/car.png';

const Car = () => {
  const gameState = useGameStore((state) => state.gameState);
  const controls = useAnimation();
  const [jumped, setJumped] = useState(0);

  useEffect(() => {
    if (gameState === 'playing' && jumped > 0) {
      controls.start({
        y: [0, -100, 0], 
        scale: [1, 1.1, 1], 
        transition: { duration: 0.6, ease: "easeOut" },
      });
    }
  }, [jumped, gameState, controls]);
  
  useEffect(() => {
    if(gameState === 'playing') {
      setJumped(prev => prev + 1);
    }
  }, [gameState]);



  return (
    <motion.img
      src={carImage}
      alt="Player Car"
      animate={controls}
      className="absolute bottom-[10%] z-20 w-24 md:w-28 h-auto drop-shadow-2xl"
    />
  );
};

export default Car;