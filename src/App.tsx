import React from 'react';
import './App.scss';
import CaesarCypher from './components/CaesarCyper/CaesarCypher';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Introduction to information security</h1>
        <h2>INT 3213 1</h2>
      </header>
      <CaesarCypher/>
    </div>
  );
}

export default App;
