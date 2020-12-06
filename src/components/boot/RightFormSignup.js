import React, { Component } from 'react';

class RightFormSignup extends Component {
    state = {  }
    render() { 
        return (
            <div className="col-xl-6 col-lg-9 col-sm-6">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text bg-primary text-light">Date of Birth</span>
                    </div>
                    <input type="date" className="form-control" maxLength="10" />
                </div>
                <div className="input-group my-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text bg-primary text-light">Civil Status</span>
                    </div>
                    <select className="form-control">
                        <option value="S">Single</option>
                        <option value="M">Married</option>
                        <option value="W">Widower/Widowed</option>
                    </select>
                </div>
                <div className="input-group my-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text bg-primary text-light">Password</span>
                    </div>
                    <input type="password" className="form-control" maxLength="16" />
                </div>
                <div className="input-group my-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text bg-primary text-light">Confirm Password</span>
                    </div>
                    <input type="password" className="form-control" maxLength="16" />
                </div>
                <div className="input-group my-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text bg-primary text-light">Mobile Number</span>
                    </div>
                    <input type="tel" className="form-control" maxLength="11" />
                </div>
            </div>
        );
    }
}
 
export default RightFormSignup;