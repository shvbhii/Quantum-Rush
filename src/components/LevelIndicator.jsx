
import { AnimatePresence, motion } from 'framer-motion';
import { useGameStore } from '../store/gameStore';

const LevelIndicator = () => {
    const currentLevel = useGameStore((state) => state.currentLevel);

    if (currentLevel === 0) return null;

    return (
        <div className="absolute top-24 md:top-28 left-1/2 -translate-x-1/2 z-30">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentLevel}
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 30, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-2 rounded-full bg-black/30 text-white font-bold text-xl backdrop-blur-sm"
                >
                    HURDLE {currentLevel} / 5
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default LevelIndicator;