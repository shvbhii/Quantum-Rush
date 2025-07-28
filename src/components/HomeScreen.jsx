
import { motion } from 'framer-motion';
import { useGameStore } from '../store/gameStore';

const HomeScreen = () => {
  const startGame = useGameStore((state) => state.startGame);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-center flex flex-col items-center"
    >
      <h1 className="text-6xl md:text-8xl font-black tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-accent-light to-primary-light dark:from-accent-dark dark:to-primary-dark">
        Quantum Rush
      </h1>
      <p className="mt-2 text-lg md:text-xl text-gray-500 dark:text-gray-400">- By Shubhi Sharma -</p>
      <button
        onClick={startGame}
        className="mt-12 px-10 py-4 text-2xl font-bold text-white uppercase tracking-wider rounded-lg
                   bg-gradient-to-br from-primary-light to-accent-light 
                   dark:from-primary-dark dark:to-accent-dark 
                   hover:scale-105 transition-transform duration-300 shadow-lg shadow-primary-light/30 dark:shadow-primary-dark/30"
      >
        Start
      </button>
    </motion.div>
  );
};

export default HomeScreen;