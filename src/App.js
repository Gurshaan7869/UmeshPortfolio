import { useState } from 'react';
import { useEffect } from 'react';
import Mainpage from './Components/Mainpage';
import Animation from './Components/Animation/Animation';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request or other loading logic
    setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Change this timeout to simulate loading time
  }, []);
  return (
    <div className="App">
       {isLoading ? (
        <Animation />
      ) : (
      <Mainpage/>)}
    </div>
  );
}

export default App;
