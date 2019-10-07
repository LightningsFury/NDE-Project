import React, { Component } from 'react';

export interface LeaderboardProps {

}

export interface LeaderboardState {

}

export class Leaderboard extends Component<LeaderboardProps, LeaderboardState> {
    render() {
        return (
            <div>
                <h1>You lost!</h1>
            </div>
        )
    }
}