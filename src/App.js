import React from 'react';
import logo from './logo.svg';
import './App.css';
import video from './furniture.mp4'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This App Is Nothing!</p>
        <video className="videoo" autoPlay height="350" width="350" controls><source src={video}></source></video>
      </header>
    </div>
  );
}

export default App;
