import React, { Component } from 'react';
import {GameArea} from './components/GameArea';
import {InputForm} from './components/InputForm';
import './App.css';
import {songs} from './data/songs.json';
import {song} from './interfaces/song'
import {GameStatus} from './components/GameStatus'
import {Leaderboard} from './components/Leaderboard'

export interface AppState {
  value: string;
  currentSong: song;
  status: string;
  secondTry: boolean;
  lost: boolean;
  score: number;
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
  };
  private getRandomSong = (): song => {
    const len: number = songs.length;
    return songs[Math.floor(len * Math.random())]
  }
  public state: AppState = {
    value: '',
    currentSong: this.getRandomSong(),
    secondTry: false,
    status: '',
    lost: false,
    score: 0
  };
  public readonly handleChange: React.ChangeEventHandler<HTMLInputElement> = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({value: e.target.value})
  };
  public readonly handleSubmit: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = this.state.currentSong.name.toLowerCase();
    if (this.state.value.toLowerCase() !== name) {
      if (this.state.secondTry) return this.setState({
        lost: true
      })
      this.setState({
        value: '',
        secondTry: true, 
        status: 'Incorrect! Try Again...'
      })
      return;
    } else {
      this.setState({
        value: '',
        status: 'Correct! Next Try... \n Your score is '+(this.state.score + 1),
        score: this.state.score + 1,
        currentSong: this.getRandomSong()
      })
    }
  }; 
  private generateSongInitials = ({name}: song) => {
    const words = name.split(/\s/gi);
    const initials = words.map((v: string) => v.charAt(0));
    return initials.join(' ').toUpperCase();
  }

  render() {
    return this.state.lost ? <Leaderboard /> : (
      <React.Fragment>
          <GameArea description={this.generateSongInitials(this.state.currentSong)}>
            <p>{this.state.currentSong.artist}</p>
          </GameArea>
          <InputForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} value={this.state.value} />
          <GameStatus status={this.state.status} />
      </React.Fragment>
    );
  }
}

export default App;