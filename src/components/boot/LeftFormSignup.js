import React, { Component } from 'react';

class LeftFormSignup extends Component {
    state = {  }
    render() { 
        return (
            <div className="col-xl-6 col-lg-9 col-sm-6">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text bg-primary text-light">ID Number</span>
                    </div>
                    <input type="text" className="form-control" maxLength="8" />
                </div>
                <div className="input-group my-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text bg-primary text-light">Last Name</span>
                    </div>
                    <input type="text" className="form-control" maxLength="30" />
                </div>
                <div className="input-group my-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text bg-primary text-light">First Name</span>
                    </div>
                    <input type="text" className="form-control" maxLength="30" />
                </div>
                <div className="input-group my-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text bg-primary text-light">Middle Name</span>
                    </div>
                    <input type="text" className="form-control" maxLength="30" />
                </div>
                <div className="input-group my-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text bg-primary text-light">Civil Status</span>
                    </div>
                    <select className="form-control">
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                    </select>
                </div>
            </div>
        );
    }
}
 
export default LeftFormSignup;