import React, { Component } from 'react';

import Navbar from '../Navbar.js';
import Container from './Container.js';
import Footer from '../Footer.js';

class Boot extends Component {
    state = {
        navs:
        [
            {
                id: 1,
                text: "Attendance",
                link: "#attendance"
            },
            {
                id: 2,
                text: "Sign in",
                link: "#sign-in"
            },
            {
                id: 3,
                text: "Sign up",
                link: "#sign-up"
            }
        ]
    }
    render() { 
        return (
            <React.Fragment>
                <Navbar navs={this.state.navs}/>
                <Container />
                <Footer />
            </React.Fragment>
        );
    }
}
 
export default Boot;