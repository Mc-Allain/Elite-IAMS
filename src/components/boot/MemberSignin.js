import React, { Component } from 'react';

class MemberSignin extends Component {
    state = {  }
    render() { 
        return (
            <div className="col-xl-6 col-lg-9 col-md-6 col-sm-6">
                <div className="card card-body bg-transparent border-0">
                    <div className="card-title text-center">
                        <h2>Member Sign in</h2>
                        <p>Please input your credentials.</p>
                    </div>

                    <form>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text bg-primary text-light">ID Number</span>
                            </div>
                            <input type="text" className="form-control" maxLength="8" />
                        </div>
                        <div className="input-group my-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text bg-primary text-light">Password</span>
                            </div>
                            <input type="password" className="form-control" maxLength="16" />
                        </div>
                        <div className="w-100 d-flex justify-content-center">
                            <button type="submit" className="btn btn-outline-dark font-weight-bold w-90 mx-auto">Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default MemberSignin;