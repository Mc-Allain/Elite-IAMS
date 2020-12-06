import React, { Component } from 'react';

import Attendance from '../Attendance.js';
import MemberSignin from './MemberSignin.js';
import AdminSignin from './AdminSignin.js';
import Signup from './Signup.js';

class Container extends Component {
    state = {  }
    render() { 
        return (
            <div className="container-fluid">
                <div id="attendance" className="row full-min-height bg-warning pt-4">
                    <Attendance />

                    <div id="sign-in" className="col-lg-6 min-height-45 pt-5">
                        <div className="row justify-content-center align-items-center">
                            <MemberSignin />
                            <AdminSignin />
                            <Signup />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Container;