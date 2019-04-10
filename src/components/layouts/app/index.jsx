import React, { Component } from 'react';
import Navigator from './Navigator';

export default class ApplicationLayout extends Component {

  render() {
    const { children } = this.props;

    return (
      <div>
        <Navigator />
        {children}
      </div>
    );
  };
}