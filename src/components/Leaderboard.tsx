import React, { Component } from "react";
import { UsernameContext } from "../context/username";
import { LeaderBoardStore } from "../store/LeaderBoardStore";
import { User } from "../interfaces/user";

export interface LeaderBoardProps {
  highScore: number;
}
export interface LeaderBoardState {}

export class LeaderBoard extends Component<LeaderBoardProps, LeaderBoardState> {
  constructor(props: LeaderBoardProps) {
    super(props);
  }
  private store: LeaderBoardStore | undefined;
  private static readonly formatLeaderBoard: Function = (
    lb: User[]
  ): React.ReactNode[] => {
    const lbInOrder = lb.sort((a: User, b: User) => b.highScore - a.highScore);
    return lbInOrder.map((v: User) => (
      <li key={v.username}>{`${v.username} - ${v.highScore}`}</li>
    ));
  };
  render() {
    return (
      <div>
        <UsernameContext.Consumer>
          {(username: string | undefined) => {
            const user: User = {
              username: username as string,
              highScore: this.props.highScore
            };
            this.store = new LeaderBoardStore(user);
            this.store.register();
            return (
              <ol>{LeaderBoard.formatLeaderBoard(this.store.getUsers())}</ol>
            );
          }}
        </UsernameContext.Consumer>
      </div>
    );
  }
}
