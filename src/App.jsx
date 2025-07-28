
import { useEffect } from 'react';
import { useGameStore } from './store/gameStore';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './components/HomeScreen';
import Game from './components/Game';
import GameOverScreen from './components/GameOverScreen';
import WinScreen from './components/WinScreen';

function App() {
  const gameState = useGameStore((state) => state.gameState);
  const theme = useGameStore((state) => state.theme);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const renderContent = () => {
    switch (gameState) {
      case 'playing':
      case 'challenge':
        return <Game />;
      case 'gameOver':
        return <GameOverScreen />;
      case 'win':
        return <WinScreen />;
      case 'home':
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen font-sans">
      <Header />
      <main className="flex-grow flex items-center justify-center relative overflow-hidden">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;