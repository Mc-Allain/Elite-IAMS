import { BrowserRouter as Router, Route} from 'react-router-dom';
import React from 'react';

import './App.css';

import Boot from './components/boot/Boot.js';
import Member from './components/member/Member.js';

function App() {
  return (
    <Router>
      <Route
      path="/"
      render={props => (
        <Boot />
      )} />
      <Route
      path="/Member"
      render={props => (
        <Member />
      )} />
    </Router>
  );
}

export default App;
