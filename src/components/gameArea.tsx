import React, { Component } from 'react';

export interface GameAreaProps {
  description: string;
}

export class GameArea extends Component<GameAreaProps> {
  render() {
    return (
        <React.Fragment>
            <p>{this.props.description}</p>
        </React.Fragment>
    );
  }
}
