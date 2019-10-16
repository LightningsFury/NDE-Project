import React, { Component, Fragment } from "react";
import { UsernameContext } from "../context/username";
import { LeaderBoardStore } from "../store/LeaderBoardStore";
import { User } from "../interfaces/user";

export interface LeaderBoardProps {
  highScore: number;
}
export interface LeaderBoardState {}

export class LeaderBoard extends Component<LeaderBoardProps, LeaderBoardState> {
  public state: LeaderBoardState = {};
  constructor(props: LeaderBoardProps) {
    super(props);
  }
  private users: User[] | undefined;
  private store: LeaderBoardStore | undefined;
  private position: number | undefined;
  private static readonly formatLeaderBoard: Function = (
    lb: User[],
    username: string | undefined
  ): React.ReactNode[] => {
    const lbInOrder = LeaderBoard.sort(lb);
    return lbInOrder.map((v: User) => (
      <li key={v.username}>
        {v.username === username ? (
          <Fragment>
            <b>You</b>
            {" - " + v.highScore}
          </Fragment>
        ) : (
          `${v.username} - ${v.highScore}`
        )}
      </li>
    ));
  };
  private static readonly sort: Function = (lb: User[]): User[] =>
    lb.sort((a: User, b: User) => b.highScore - a.highScore);
  private getPosition(username: string) {
    const sorted = LeaderBoard.sort(this.users);
    let position: number = 0;
    sorted.forEach((v: User, i: number) => {
      if (v.username === username) return (position = i);
    });
    return position + 1;
  }
  render() {
    return (
      <div>
        <h3>Leaderboard</h3>
        <UsernameContext.Consumer>
          {(username: string | undefined) => {
            const user: User = {
              username: username as string,
              highScore: this.props.highScore
            };
            this.store = new LeaderBoardStore(user);
            this.store.register();
            this.users = this.store.getUsers();
            const position = this.getPosition(username as string);
            return (
              <Fragment>
                <ol>{LeaderBoard.formatLeaderBoard(this.users, username)}</ol>
                <p>{position ? `Your position is ${position}` : null}</p>
              </Fragment>
            );
          }}
        </UsernameContext.Consumer>
      </div>
    );
  }
}
