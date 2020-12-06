import React, { Component } from 'react';

class AttendanceTable extends Component {
    state = {
        attendees:
        [
            {
                idNo: 12345678,
                lName: "Casindad",
                fName: "Mc Allain",
                mName: "Sanchez"
            },
            {
                idNo: 87654321,
                lName: "Casindad",
                fName: "Rhian Kisses",
                mName: "Sanchez"
            },
            {
                idNo: 13572468,
                lName: "Casindad",
                fName: "Marilou",
                mName: "Sanchez"
            },
            {
                idNo: 24681357,
                lName: "Casindad",
                fName: "Rio",
                mName: "Sanchez"
            },
            {
                idNo: 13245768,
                lName: "Casindad",
                fName: "Remelinda",
                mName: "Sanchez"
            }
        ]
    }
    render() { 
        return (
            <table className="table table-bordered table-light max-w-95 mx-auto mt-5"
                data-toggle="table"
                data-pagination="true"
                data-search="true">
                <thead className="thead-dark">
                    <tr>
                        <th>ID Number</th>
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>Middle Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.attendees.map(attendee =>
                            <tr key={attendee.idNo}>
                                {
                                    <React.Fragment>
                                        <td>{attendee.idNo}</td>
                                        <td>{attendee.lName}</td> 
                                        <td>{attendee.fName}</td> 
                                        <td>{attendee.mName}</td> 
                                    </React.Fragment>                    
                                }
                            </tr>
                        )
                    }
                </tbody>
            </table>
        );
    }
}
 
export default AttendanceTable;