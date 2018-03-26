import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import App from './App'
class Home extends Component {
  render() {
    return (
      <App>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Homessw Page</h1>
        </header>
      </div>
      </App>
    );
  }
}

export default Home;
