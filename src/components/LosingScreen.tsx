import React, { Component, ContextType } from "react";
import { HighScoreStore } from "../store/HighScore";
import { LeaderBoard } from "./LeaderBoard";
import { UsernameContext } from "../context/username";

export interface LosingScreenProps {
  score: number;
}

export interface LosingScreenState {}

export class LosingScreen extends Component<
  LosingScreenProps,
  LosingScreenState
> {
  static contextType = UsernameContext;
  context!: ContextType<typeof UsernameContext>;
  private highScore: number | undefined;
  private store: HighScoreStore | undefined;

  componentWillMount() {
    this.store = new HighScoreStore(this.props.score, this.context as string);
    this.highScore = this.store.getHighScore();
  }
  render() {
    return (
      <div>
        <h1>You lost!</h1>
        <p>Your score: {this.props.score}</p>
        <p>Your high score: {this.highScore}</p>
        <LeaderBoard highScore={this.highScore as number} />
      </div>
    );
  }
}
