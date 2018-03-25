import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Project name</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li className="active"><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default App;
