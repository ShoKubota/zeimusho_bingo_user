import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@freee_jp/vibes/css';
import { Button } from '@freee_jp/vibes'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button>雛形</Button>
      </header>
    </div>
  );
}

export default App;
