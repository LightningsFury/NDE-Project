import React, { Component } from 'react';
import {gameArea} from './components/gameArea'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <gameArea description={'test'} />
        </header>      
      </div>
    );
  }
}

export default App;
