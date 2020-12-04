import React, { Component } from 'react';

import AttendanceTable from './AttendanceTable.js'
import MemberSignin from './MemberSignin.js';
import AdminSignin from './AdminSignin.js';
import Signup from './Signup.js';

class Container extends Component {
    state = {  }
    render() { 
        return (
            <div className="container-fluid">
                <div id="attendance" className="row full-min-height bg-warning pt-5">
                    <div className="col-lg-6 height-90 py-5">
                        <div className="text-center">
                            <h1 className="display-4">Attendance</h1>
                            <div className="title-underline bg-primary"></div>
                        </div>
                        <AttendanceTable />
                    </div>

                    <div id="sign-in" className="col-lg-6 min-height-45">
                        <div className="row justify-content-center align-items-center my-4">
                            <MemberSignin />
                            <AdminSignin />
                            <Signup />
                        </div>
                    </div>
                </div>

                <div className="row bg-dark text-light min-height-30px fixed-bottom justify-content-end align-items-center">
                    <div className="col text-right pt-2 px-5">
                        <small>Copyright 2020 | Casindad</small>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Container;