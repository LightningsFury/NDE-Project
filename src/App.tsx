import React, { Component } from 'react';
import {GameArea} from './components/GameArea';
import {InputForm} from './components/InputForm';
import './App.css';

interface AppState {
  value: string;
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
  };
  public state: AppState = {
    value: ''
  };
  public readonly handleChange: React.ChangeEventHandler<HTMLInputElement> = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({value: e.target.value + ' it\'s time to stop '})
  };
  public readonly handleSubmit: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({value: ''})
  }; 
  render() {
    return (
      <React.Fragment>
          <GameArea description={'test'}>
            <p>{'aaa'}</p>
          </GameArea>
          <InputForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} value={this.state.value} />
      </React.Fragment>
    );
  }
}

export default App;
