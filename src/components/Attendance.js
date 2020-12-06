import React, { Component } from 'react';

import AttendanceTable from './AttendanceTable.js';

class Attendance extends Component {
    state = {  }
    render() { 
        return (
            <div className="col-lg-6 min-height-90 mt-5">
                <div className="text-center">
                    <h1 className="display-4">Attendance</h1>
                    <div className="title-underline bg-primary"></div>
                </div>
                <AttendanceTable />
            </div>
        );
    }
}
 
export default Attendance;