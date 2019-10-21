import React, { Component } from 'react';
import {Initials} from './elements'

export interface GameAreaProps {
  description: string;
}

export class GameArea extends Component<GameAreaProps> {
  render() {
    return (
        <React.Fragment>
            <Initials>{this.props.description}</Initials>
            <hr />
            {this.props.children}
        </React.Fragment>
    );
  }
}
