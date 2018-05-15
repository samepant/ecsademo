import React from 'react'
import ReactDOM from 'react-dom'
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import LandingPage from './LandingPage'
import TeamPage from './team/teamPage'
import './App.css'

ReactDOM.render(
  <Router>
    <Switch>
      <Route location={window.location} key={window.location.key} exact path="/" component={LandingPage} />
      <Route location={window.location} key={window.location.key} path="/team" component={TeamPage} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
