import React, { Component,Fragment, MouseEvent, MouseEventHandler } from "react";
import { GameArea } from "./ui/GameArea/GameArea";
import { InputForm } from "./ui/GameArea/components/InputForm";
import { songs } from "./data/songs.json";
import { song } from "./interfaces/song";
import { GameStatus } from "./ui/GameArea/components/GameStatus";
import { LosingScreen } from "./ui/LosingScreen/LosingScreen";
import { Artist } from './ui/GameArea/elements'

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
  }
  private songs: song[] = [...songs];
  private getRandomSong = (): song => {
    const len: number = this.songs.length;
    const randomSongIndex = Math.floor(len * Math.random())
    if (this.songs.length <= 0) this.songs = songs;
    const picked = this.songs[randomSongIndex]
    this.songs.splice(randomSongIndex, 1)
    return picked;
  };
  public state: AppState = {
    value: "",
    currentSong: this.getRandomSong(),
    secondTry: false,
    status: "",
    lost: false,
    score: 0,

  };
  public readonly handleChange: React.ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    this.setState({ value: e.target.value });
  };
  public readonly handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (this.state.value.length <= 0)
      return this.setState({ status: "Value can't be empty!" });
    const name = this.state.currentSong.name.toLowerCase();
    if (this.state.value.toLowerCase() !== name) {
      if (this.state.secondTry)
        return this.setState({
          lost: true
        });
      this.setState({
        value: "",
        secondTry: true,
        status: "Incorrect! Try Again..."
      });
      return;
      
    } else {
      this.setState({
        value: "",
        status:
          "Correct! Next Try... \n Your score is " + (this.state.score + 1),
        score: this.state.score + 1,
        secondTry: false, // reset the value back to false, whether or not it was true before
        currentSong: this.getRandomSong()
      });
    }
  };
  private generateSongInitials = ({ name }: song) => {
    const words = name.split(/\s/gi);
    const initials = words.map((v: string) => v.charAt(0));
    return initials.join(" ").toUpperCase();
  };

  private readonly replay: MouseEventHandler<HTMLButtonElement> = (e: MouseEvent<HTMLButtonElement>) => {
    this.setState({
      value: "",
      currentSong: this.getRandomSong(),
      secondTry: false,
      status: "You are trying again",
      lost: false,
      score: 0
    })
  }

  render() {
    return this.state.lost ? (
      <LosingScreen score={this.state.score} replay={this.replay} />
    ) : (
      <Fragment>
        <GameArea
          description={this.generateSongInitials(this.state.currentSong)}
        >
          <Artist>{this.state.currentSong.artist}</Artist>
        </GameArea>
        <InputForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          value={this.state.value}
        />
        <GameStatus status={this.state.status} />
      </Fragment>
    );
  }
}

export default App;
