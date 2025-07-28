
import { useEffect } from 'react';

export const useKeyPress = (callback) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      
      if (event.key.length === 1) {
        callback(event.key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [callback]);
};