import React, { Component, ContextType, MouseEventHandler } from "react";
import { HighScoreStore } from "../../store/HighScoreStore";
import { LeaderBoard } from "./components/LeaderBoard";
import { UsernameContext } from "../../context/username";
import { YouLost, Score, HighScore} from './elements'

export interface LosingScreenProps {
  score: number;
  replay: MouseEventHandler<HTMLButtonElement>;
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
        <button onClick={this.props.replay}>Replay</button>
        <YouLost>You lost!</YouLost>
        <Score>Your score: {this.props.score}</Score>
        <HighScore>Your high score: {this.highScore}</HighScore>
        <LeaderBoard highScore={this.highScore as number} />
      </div>
    );
  }
}
