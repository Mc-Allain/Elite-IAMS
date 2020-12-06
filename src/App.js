import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React from 'react';

import './App.css';

import Boot from './components/boot/Boot.js';
import Member from './components/member/Member.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route
        exact path="/"
        render={props => (
          <Boot />
        )} />
        <Route
        exact path="/Member"
        render={props => (
          <Member />
        )} />
      </Switch>
    </Router>
  );
}

export default App;
