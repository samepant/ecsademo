import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import LandingPage from './LandingPage'
import TeamPage from './team/teamPage'
import './App.css'

ReactDOM.render(
  <Router>
    <div>
      <Route location={window.location} key={window.location.key} exact path={`${process.env.PUBLIC_URL}/`} component={LandingPage} />
      <Route location={window.location} key={window.location.key} exact path={`${process.env.PUBLIC_URL}/`} component={TeamPage} />
    </div>
  </Router>,
  document.getElementById('root')
);
