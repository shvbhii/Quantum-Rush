
import { motion } from 'framer-motion';
import { useGameStore } from '../store/gameStore';

const GameOverScreen = () => {
  const restartGame = useGameStore((state) => state.restartGame);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center p-8 rounded-lg bg-light/80 dark:bg-dark/80 backdrop-blur-sm shadow-2xl"
    >
      <h2 className="text-7xl font-black text-red-500">Game Over</h2>
      <div className="mt-8 flex gap-4 justify-center">
        <button
          onClick={restartGame}
          className="px-6 py-3 text-lg font-bold text-white bg-green-500 hover:bg-green-600 rounded-lg transition-colors"
        >
          Restart
        </button>
        <button
          onClick={() => window.location.reload()} 
          className="px-6 py-3 text-lg font-bold text-white bg-gray-500 hover:bg-gray-600 rounded-lg transition-colors"
        >
          Exit
        </button>
      </div>
    </motion.div>
  );
};

export default GameOverScreen;