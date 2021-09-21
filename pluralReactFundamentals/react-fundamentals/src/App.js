import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import './bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div onClick={this.props.onClick}> This div has been clicked {this.props.clicks} times. </div>
    );
  }
}

export default App;
