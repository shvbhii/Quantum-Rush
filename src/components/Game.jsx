
import { useEffect } from 'react';
import { useGameStore } from '../store/gameStore';
import Road from './Road';
import Car from './Car';
import Hurdle from './Hurdle';
import ChallengePopup from './ChallengePopup';
import LevelIndicator from './LevelIndicator';
import { AnimatePresence } from 'framer-motion';

const Game = () => {
    
    const gameState = useGameStore(state => state.gameState);
    const triggerChallenge = useGameStore(state => state.triggerChallenge);
    

  
  useEffect(() => {
    if (gameState === 'playing') {
      const timer = setTimeout(() => {
        triggerChallenge();
      }, 2000); 
      return () => clearTimeout(timer);
    }
  }, [gameState, triggerChallenge]);

  return (
    <div className="w-full h-full perspective-[800px] flex items-center justify-center">
      <Road isMoving={gameState === 'playing'} />
      <Car />
      <Hurdle />
      <LevelIndicator />
      <AnimatePresence>
        {gameState === 'challenge' && <ChallengePopup />}
      </AnimatePresence>
    </div>
  );
};

export default Game;