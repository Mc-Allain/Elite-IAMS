import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, { Component } from 'react';

import Navbar from '../Navbar.js';
import Container from './Container.js';

class Boot extends Component {
    state = {  }
    render() { 
        return (
            <Router>
                <Route
                path="/"
                render={props => (
                    <React.Fragment>
                         <Navbar />
                         <Container />
                    </React.Fragment>
                )} />
            </Router>
        );
    }
}
 
export default Boot;