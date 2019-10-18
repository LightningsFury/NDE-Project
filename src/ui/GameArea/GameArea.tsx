import React, { Component } from 'react';

export interface GameAreaProps {
  description: string;
}

export class GameArea extends Component<GameAreaProps> {
  render() {
    return (
        <React.Fragment>
            <h1>{this.props.description}</h1>
            <hr />
            {this.props.children}
        </React.Fragment>
    );
  }
}
