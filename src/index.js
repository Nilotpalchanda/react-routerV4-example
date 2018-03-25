import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import './index.css';
// import App from './components/App';
import Home from './components/Home';
import About from './components/About';

import registerServiceWorker from './registerServiceWorker';

class App extends React.Component {
    render() {
        return (
		  <Router>
			    <div>
			       <nav className="navbar navbar-default">
			        <div className="container-fluid">
			          <div className="navbar-header">
			            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
			              <span className="sr-only">Toggle navigation</span>
			              <span className="icon-bar"></span>
			              <span className="icon-bar"></span>
			              <span className="icon-bar"></span>
			            </button>
			            <NavLink className="navbar-brand" to="/">Project name</NavLink>
			          </div>
			          <div id="navbar" className="navbar-collapse collapse">
			            <ul className="nav navbar-nav">
			              <li><NavLink to="/" exact activeStyle={{fontWeight: 'bold',color: 'red'}}>Home</NavLink></li>
			              <li><NavLink to="/about" activeStyle={{fontWeight: 'bold',color: 'red'}}>About</NavLink></li>
			            </ul>
			          </div>
			        </div>
			      </nav>
			      <Route exact path="/" component={Home} />
			      <Route path="/about" component={About} />
			    </div>
  		</Router>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
