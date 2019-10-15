import React, { Component } from "react";
import { UsernameContext } from "../context/username";

export interface LeaderBoardProps {}
export interface LeaderBoardState {}

export class LeaderBoard extends Component<LeaderBoardProps, LeaderBoardState> {
  render() {
    return (
      <div>
        <UsernameContext.Consumer>
          {username => {
            return <p>Your name is {username}</p>;
          }}
        </UsernameContext.Consumer>
      </div>
    );
  }
}
