import React, { Component } from 'react';

class Navbar extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-primary fixed-top">
                    <a className="navbar-brand" href="#attendance">Elite IAMS</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample04">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item d-lg-none">
                                <a className="nav-link text-light" href="#attendance">Attendance</a>
                            </li>
                            <li className="nav-item d-lg-none">
                                <a className="nav-link text-light" href="#sign-in">Sign in</a>
                            </li>
                            <li className="nav-item d-xl-none">
                                <a className="nav-link text-light" href="#sign-up">Sign up</a>
                            </li>
                        </ul>
                    </div>

                   
                </nav>
            </React.Fragment>
        );
    }
}
 
export default Navbar;