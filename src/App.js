import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counting></Counting>
    </div>
  );
}

function Counting () {
  const [count, setCount] = useState(0)
  const increaseHandler = ()=>{
    setCount(count + 1);
  }
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increaseHandler}>Increase</button>
    </div>
  );
}

export default App;
