import React  from 'react';

import { NavLink } from 'react-router-dom'

const Header = (props) => (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <NavLink className="navbar-brand" to="/">Projects name</NavLink>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
                    <li><NavLink to="/" exact activeStyle={{fontWeight: 'bold',color: 'red'}}>Home</NavLink></li>
                    <li><NavLink to="/about" activeStyle={{fontWeight: 'bold',color: 'red'}}>About</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    );


export default Header;
