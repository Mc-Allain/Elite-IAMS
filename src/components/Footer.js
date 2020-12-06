import React, { Component } from 'react';

class Footer extends Component {
    state = {  }
    render() { 
        return (
            <div className="row bg-dark text-light min-height-30px fixed-bottom justify-content-end align-items-center">
                <div className="col text-right pt-2 px-5">
                    <small>Copyright 2020 | Casindad</small>
                </div>
            </div>
        );
    }
}
 
export default Footer;