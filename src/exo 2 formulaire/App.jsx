/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react';
import { Input } from './components/input';

// exercice 2
function App() {
  const [duration, setDuration] = useState(5);
  const [secondesLeft, setSecondLeft] = useState(duration);

  const handleChange = v => {
    setDuration(v);
    setSecondLeft(v);
  };

  useEffect(() => {
    setSecondLeft(duration);
    const timer = setInterval(() => {
      setSecondLeft(v => {
        if (v <= 1) {
          clearInterval(timer);
          return 0;
        }
        return v - 1;
      });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [duration]);

  return (
    <div className="vstack gap-2">
      <Input value={duration} onChange={handleChange} placeholder={'Timer...'} />
      <p>Décompte : {secondesLeft} </p>
    </div>
  );
}

export default App;
