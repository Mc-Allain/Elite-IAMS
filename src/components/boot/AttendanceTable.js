import React, { Component } from 'react';

class AttendanceTable extends Component {
    state = {  }
    render() { 
        return (
            <table className="table table-light mt-5">
                <tbody>
                    <tr>
                        <th>1st Column</th>
                        <th>2nd Column</th>
                        <th>3rd Column</th>
                    </tr>
                    <tr>
                        <td>1st Column</td>
                        <td>2nd Column</td>
                        <td>3rd Column</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}
 
export default AttendanceTable;