import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
    <div>
      This div has been clicked {this.props.clicks} times.
    </div>
  );
  }
}

export default App;
