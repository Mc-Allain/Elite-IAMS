import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, { Component } from 'react';

import './App.css';

import Boot from './components/boot/Boot.js';

function App() {
  return (
    <Router>
      <Route
      path="/Elite-IAMS"
      render={props => (
        <Boot />
      )} />
    </Router>
  );
}

export default App;
