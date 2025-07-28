
import { create } from 'zustand';


const simpleKeys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const complexKeys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()'.split('');



const levelConfig = {
  1: { numKeys: 3, keySet: simpleKeys },
  2: { numKeys: 4, keySet: simpleKeys },
  3: { numKeys: 5, keySet: simpleKeys },
  4: { numKeys: 6, keySet: complexKeys },
  5: { numKeys: 7, keySet: complexKeys },
};


const generateRandomKeys = (level) => {
  if (!levelConfig[level]) { 
    return ['A', 'B', 'C'];
  }
  
  const { numKeys, keySet } = levelConfig[level];
  let keys = [];
  for (let i = 0; i < numKeys; i++) {
    keys.push(keySet[Math.floor(Math.random() * keySet.length)]);
  }
  return keys;
};

export const hurdleTypes = [
    { name: 'Cones', style: 'bg-orange-500 w-8 h-12 rounded-t-full' },
    { name: 'Barrier', style: 'bg-yellow-400 w-24 h-8 border-2 border-black' },
    { name: 'Spikes', style: 'bg-gray-600 w-20 h-4 flex justify-around items-end overflow-hidden'},
    { name: 'Pothole', style: 'bg-black w-20 h-6 rounded-full border-4 border-gray-700' },
    { name: 'Metal Block', style: 'bg-gradient-to-br from-gray-400 to-gray-600 w-20 h-10 border-2 border-gray-700' },
];

export const useGameStore = create((set, get) => ({
  
  gameState: 'home', 
  theme: 'dark',
  currentLevel: 0,
  carPosition: 0, 
  challengeKeys: [],
  
  
  startGame: () => set({
    gameState: 'playing',
    currentLevel: 1,
    
    challengeKeys: generateRandomKeys(1)
  }),
  
  triggerChallenge: () => set({ gameState: 'challenge' }),
  
  completeChallenge: () => {
    const currentLevel = get().currentLevel;
    if (currentLevel >= 5) {
      set({ gameState: 'win' });
    } else {
      const nextLevel = currentLevel + 1;
      set({
        gameState: 'playing',
        currentLevel: nextLevel,
        
        challengeKeys: generateRandomKeys(nextLevel),
      });
    }
  },
  
  failGame: () => set({ gameState: 'gameOver' }),

  restartGame: () => set({ gameState: 'home', currentLevel: 0 }),
  
  toggleTheme: () => set(state => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
}));