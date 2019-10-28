import React, { Component,Fragment, MouseEvent, MouseEventHandler } from "react";
import { GameArea } from "./ui/GameArea/GameArea";
import { InputForm } from "./ui/GameArea/components/InputForm";
import { songs } from "./data/songs.json";
import { song } from "./interfaces/song";
import { GameStatus } from "./ui/GameArea/components/GameStatus";
import { LosingScreen } from "./ui/LosingScreen/LosingScreen";
import { Artist } from './ui/GameArea/elements'

export interface AppState {
  value: string; // the value of what is typed in the input box
  currentSong: song; 
  status: string; // the text at the bottom which shows tells the player the game state
  secondTry: boolean; // whether the user is on the second try or not
  lost: boolean; //  whether the player has lost or not
  score: number;
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
  }
  // a local clone of the songs list to be mutated 
  private songs: song[] = [...songs];
  // generates a random song using a random decimal number and then removes it from the songs variable
  private getRandomSong = (): song => {
    const len: number = this.songs.length;
    const randomSongIndex = Math.floor(len * Math.random())
    if (this.songs.length <= 0) this.songs = songs;
    const picked = this.songs[randomSongIndex]
    this.songs.splice(randomSongIndex, 1)
    return picked;
  };
  // the default state the app begins in
  public state: AppState = {
    value: "",
    currentSong: this.getRandomSong(),
    secondTry: false,
    status: "",
    lost: false,
    score: 0,

  };
  // this runs every time the user types something while focused on the input box, and sets the value of the text of the input box.
  public readonly handleChange: React.ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    this.setState({ value: e.target.value });
  };
  // this runs when the input is submitted. It checks whether the answer is right or wrong, and sets the game state according to that
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
          "Correct! Next Try... \n Your score is " + (this.state.score + (this.state.secondTry ? 1 : 3)),
        score: this.state.score + (this.state.secondTry ? 1 : 3),
        secondTry: false, // reset the value back to false, whether or not it was true before
        currentSong: this.getRandomSong()
      });
    }
  };
  // takes the song name and returns it's initials by splitting the name by its spaces and then mapping the array to the first letter of each item
  private static generateSongInitials = ({ name }: song) => {
    const words = name.split(/\s/gi);
    const initials = words.map((v: string) => v.charAt(0));
    return initials.join(" ").toUpperCase();
  };

  // the function that runs when the replace button is pressed; resets all the app state back to default
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
  // the function that returns the components to be rendered. If player has lost, it returns the LosingScreen component, else it returns the main components for the game.
  render() {
    return this.state.lost ? (
      <LosingScreen score={this.state.score} replay={this.replay} />
    ) : (
      <Fragment>
        <GameArea
          description={App.generateSongInitials(this.state.currentSong)}
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
