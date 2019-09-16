import React, { Component } from 'react';

export class gameArea extends Component {
  render() {
    return (
        <React.Fragment>
            <p>{this.props.description}</p>
        </React.Fragment>
    );
  }
}
