import React, { Component } from 'react';
import {GameArea} from './components/GameArea';
import {InputForm} from './components/InputForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <GameArea description={'test'} />
          <InputForm />
        </header>      
      </div>
    );
  }
}

export default App;
