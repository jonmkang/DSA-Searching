import React from 'react';
import logo from './logo.svg';
import './App.css';
import LinearSearch from './component/linearSearch'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LinearSearch/ >
      </header>
    </div>
  );
}

export default App;
