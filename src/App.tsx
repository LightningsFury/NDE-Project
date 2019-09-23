import React, { Component } from 'react';
import {GameArea} from './components/GameArea'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <GameArea description={'test'} />
        </header>      
      </div>
    );
  }
}

export default App;
