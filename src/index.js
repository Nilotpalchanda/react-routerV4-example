import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css';
// import App from './components/App';
import HomeStyle from './components/HomeStyle';
import About from './components/About';

import registerServiceWorker from './registerServiceWorker';

class Main extends React.Component {
    render() {
        return (
		  <Router>
		      
		  		  <Switch>
				      <Route exact path="/" component={HomeStyle} />
				      <Route path="/about" component={About} />
				  </Switch>
			   
  		  </Router>
        );
    }
}

ReactDOM.render(<Main/>, document.getElementById('root'));
registerServiceWorker();
