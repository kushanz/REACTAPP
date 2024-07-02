import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0);

  const clickEvent = () => {
    setCount((count) => count + 1);
  };

  return (
    <>
      <Header />
      <div>{count}</div>
      <button className="btn btn-primary" onClick={clickEvent}>
        CLick Me
      </button>
    </>
  );
}

export default App;
