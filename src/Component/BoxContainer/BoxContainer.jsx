import React, { Component } from 'react';
import Box from '../Box/Box';
import './BoxContainer.css';

export default class BoxContainer extends Component {
  static defaultProps = {
    numBoxes: 20,
    allColors: ['purple', 'green', 'red', 'orange', 'blue', 'pink'],
  };
  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
      <Box colors={this.props.allColors} />
    ));
    return <div className="BoxContainer">{boxes}</div>;
  }
}
