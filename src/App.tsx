import React, { Component } from 'react';
import {GameArea} from './components/GameArea';
import {InputForm} from './components/InputForm';
import './App.css';
import {songs} from './data/songs.json';

export interface AppState {
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
    this.setState({value: e.target.value})
  };
  public readonly handleSubmit: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({value: ''})
  }; 
  private generateSongInitials = (songName: string) => {
    const words = songName.split(/\s/gi);
    const initials = words.map((v: string) => v.charAt(0));
    console.log(initials)
    return initials.join(' ').toUpperCase();
  }
  private getRandomSong = () => {
    const len = songs.length;
    console.log(songs);
    return songs[len * Math.random()]
  }
  render() {
    return (
      <React.Fragment>
          <GameArea description={this.generateSongInitials(this.getRandomSong().name)}>
            <p>{'aaa'}</p>
          </GameArea>
          <InputForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} value={this.state.value} />
      </React.Fragment>
    );
  }
}

export default App;
