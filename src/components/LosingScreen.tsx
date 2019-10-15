import React, { Component } from "react";
import { HighScoreStore } from "../store/HighScore";
import { LeaderBoard } from "./LeaderBoard";

export interface LosingScreenProps {
  score: number;
}

export interface LosingScreenState {}

export class LosingScreen extends Component<
  LosingScreenProps,
  LosingScreenState
> {
  private highScore: number | undefined;
  private store: HighScoreStore;
  constructor(props: LosingScreenProps) {
    super(props);
    this.store = new HighScoreStore(props.score);
  }
  componentWillMount() {
    this.highScore = this.store.getHighScore();
  }
  render() {
    return (
      <div>
        <h1>You lost!</h1>
        <p>Your score: {this.props.score}</p>
        <p>Your high score: {this.highScore}</p>
        <LeaderBoard />
      </div>
    );
  }
}
