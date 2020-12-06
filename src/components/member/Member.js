import React, { Component } from 'react';

import Navbar from '../Navbar.js';
import Container from './Container.js';
import Footer from '../Footer.js';

class Member extends Component {
    state = {
        navs:
        [
            {
                id: 1,
                text: "Top",
                link: "#top"
            },
            {
                id: 2,
                text: "Attendance",
                link: "#attendance"
            },
            {
                id: 3,
                text: "News",
                link: "#news"
            },
            {
                id: 4,
                text: "Profile: Casindad, Mc Allain",
                link: ""
            },
            {
                id: 5,
                text: "Sign out",
                link: "/Elite-IAMS"
            },
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
 
export default Member;