
import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useGameStore } from '../store/gameStore';
import { useKeyPress } from '../hooks/useKeyPress';

const ChallengePopup = () => {
  const challengeKeys = useGameStore(state => state.challengeKeys);
  const completeChallenge = useGameStore(state => state.completeChallenge);
  const failGame = useGameStore(state => state.failGame);
  
  const [typedKeys, setTypedKeys] = useState([]);
  const [timeLeft, setTimeLeft] = useState(300); 
  
  useEffect(() => {
    if (timeLeft <= 0) {
      failGame();
      return;
    }
    const timerId = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 10);
    return () => clearInterval(timerId);
  }, [timeLeft, failGame]);

  const handleKeyPress = useCallback((key) => {
    if (typedKeys.length >= challengeKeys.length) return;
    
    const expectedKey = challengeKeys[typedKeys.length];
    
    
    if (key === expectedKey) {
      const newTypedKeys = [...typedKeys, key];
      setTypedKeys(newTypedKeys);

      if (newTypedKeys.length === challengeKeys.length) {
        setTimeout(() => completeChallenge(), 200);
      }
    } else if (key.toUpperCase() === expectedKey.toUpperCase() && !'()!@#$%^&*'.includes(expectedKey)) {
      
      const newTypedKeys = [...typedKeys, expectedKey]; 
      setTypedKeys(newTypedKeys);

      if (newTypedKeys.length === challengeKeys.length) {
        setTimeout(() => completeChallenge(), 200);
      }
    } else {
      setTimeout(() => failGame(), 100);
    }
  }, [typedKeys, challengeKeys, completeChallenge, failGame]);

  useKeyPress(handleKeyPress);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      
      className="absolute z-40 p-4 md:p-8 flex flex-col items-center gap-4 bg-light/90 dark:bg-dark/90 backdrop-blur-md rounded-2xl shadow-2xl w-11/12 max-w-2xl"
    >
      <div className="w-full h-2 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-green-400 to-red-500"
          initial={{ width: '100%' }}
          animate={{ width: `${(timeLeft / 300) * 100}%` }}
          transition={{ duration: 0.01, ease: 'linear' }}
        />
      </div>

      <h3 className="text-xl font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Type The Sequence!</h3>
      
      {/* --- CHANGE 3: Use a flexible grid layout for the keys --- */}
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-2 md:gap-4">
        {challengeKeys.map((key, index) => {
          const isTyped = index < typedKeys.length;
          return (
            <div
              key={index}
              className={`w-14 h-14 md:w-16 md:h-16 flex items-center justify-center text-3xl font-black rounded-lg
                         border-4 ${isTyped ? 'border-green-500 bg-green-500/20 text-green-500' : 'border-primary-light dark:border-primary-dark'}
                         transition-all duration-200`}
            >
              {key}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ChallengePopup;