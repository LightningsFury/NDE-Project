import React, { Component } from 'react';
import {GameArea} from './components/GameArea';
import {InputForm} from './components/InputForm';
import './App.css';
import {songs} from './data/songs.json';
import {song} from './interfaces/song'

export interface AppState {
  value: string;
  currentSong: song;
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.setState({
      currentSong: this.getRandomSong()
    })
  };
  public state: AppState = {
    value: '',
    currentSong: {
      name: '',
      artist: ''
    }
  };
  public readonly handleChange: React.ChangeEventHandler<HTMLInputElement> = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({value: e.target.value})
  };
  public readonly handleSubmit: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({value: ''})
  }; 
  private generateSongInitials = ({name}: song) => {
    const words = name.split(/\s/gi);
    const initials = words.map((v: string) => v.charAt(0));
    return initials.join(' ').toUpperCase();
  }
  private  getRandomSong = (): song => {
    const len: number = songs.length;
    return songs[Math.floor(len * Math.random())]
  }
  render() {
    return (
      <React.Fragment>
          <GameArea description={this.generateSongInitials(this.state.currentSong)}>
            <p>{this.state.currentSong.artist}</p>
          </GameArea>
          <InputForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} value={this.state.value} />
      </React.Fragment>
    );
  }
}

export default App;