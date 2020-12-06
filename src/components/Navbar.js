import React, { Component } from 'react';

class Navbar extends Component {
    state = {  }
    render() { 
        const { navs } = this.props;

        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-primary fixed-top">
                    <a className="navbar-brand" href="#attendance">Elite IAMS</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#navbars" aria-controls="navbars" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbars">
                        <ul className="navbar-nav ml-auto">
                            {
                                navs.map(nav =>
                                    <li key={nav.id} className={this.getItemClasses(nav.text)}>
                                        <a className={this.getLinkClasses(nav.text)}
                                            href={nav.link}>{nav.text}</a>
                                    </li>
                                )
                            }
                        </ul>
                    </div>       
                </nav>
            </React.Fragment>
        );
    }

    getItemClasses = text => {
        let classes = "nav-item ";
        classes += text === "Sign up" ? "d-xl-none" :
            text.startsWith("Profile") || text === "Sign out" || text === "Top" ? "" : "d-lg-none"
        return classes;
    }

    getLinkClasses = text => {
        let classes = "nav-link "
        classes += text === "Sign out" ? "text-danger" :
        text.startsWith("Profile") ? "text-info" :
        text === "Top" ? "text-warning": "text-light"
        return classes;
    }
}
 
export default Navbar;