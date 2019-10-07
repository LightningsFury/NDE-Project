import React, { Component } from 'react';

export interface LeaderboardProps {
    score: number;
}

export interface LeaderboardState {

}

export class Leaderboard extends Component<LeaderboardProps, LeaderboardState> {
    render() {
        return (
            <div>
                <h1>You lost!</h1>
                <p>Your score {this.props.score}</p>
            </div>
        )
    }
}