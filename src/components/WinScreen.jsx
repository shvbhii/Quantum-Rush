
import { motion } from 'framer-motion';
import { useGameStore } from '../store/gameStore';

const WinScreen = () => {
  const restartGame = useGameStore((state) => state.restartGame);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="text-center p-8 rounded-lg bg-light/80 dark:bg-dark/80 backdrop-blur-sm shadow-2xl"
    >
      <h2 className="text-7xl font-black animate-celebrate">YOU WIN!</h2>
      <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">All hurdles cleared. You have god-like reflexes!</p>
      <div className="mt-8 flex gap-4 justify-center">
        <button
          onClick={restartGame}
          className="px-8 py-3 text-lg font-bold text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
        >
          Play Again
        </button>
      </div>
    </motion.div>
  );
};

export default WinScreen;