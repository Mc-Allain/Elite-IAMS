import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, { Component } from 'react';

import './App.css';

import Boot from './components/boot/Boot.js';
import Member from './components/member/Member.js';

function App() {
  return (
    <Router>
      <Route
      path="/Elite-IAMS"
      render={props => (
        <Boot />
      )} />
      <Route
      path="/Elite-IAMS-Member"
      render={props => (
        <Member />
      )} />
    </Router>
  );
}

export default App;
