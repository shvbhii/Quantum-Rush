
import { motion } from 'framer-motion';
import { useGameStore, hurdleTypes } from '../store/gameStore';

const Hurdle = () => {
  
  const currentLevel = useGameStore(state => state.currentLevel);
  const gameState = useGameStore(state => state.gameState);
  

  if (gameState === 'home' || gameState === 'win') return null;
  
  
  if (currentLevel < 1 || currentLevel > hurdleTypes.length) return null;

  const hurdle = hurdleTypes[currentLevel - 1];

  return (
    <motion.div
      key={currentLevel}
      initial={{ y: -200, scale: 0, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, delay: 0.5 }}
      className="absolute bottom-[45%] z-10 flex items-center justify-center"
    >
      <div className={`relative ${hurdle.style}`}>
        {/* Special case for spikes */}
        {hurdle.name === 'Spikes' && (
          <>
            <div className="w-0 h-0 border-l-[10px] border-l-transparent border-b-[16px] border-b-gray-400 border-r-[10px] border-r-transparent"></div>
            <div className="w-0 h-0 border-l-[10px] border-l-transparent border-b-[16px] border-b-gray-400 border-r-[10px] border-r-transparent"></div>
            <div className="w-0 h-0 border-l-[10px] border-l-transparent border-b-[16px] border-b-gray-400 border-r-[10px] border-r-transparent"></div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Hurdle;