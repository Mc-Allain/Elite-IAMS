import React, { Component } from 'react';

import LeftFormSignup from './LeftFormSignup.js';
import RightFormSigup from './RightFormSignup.js';

class Signup extends Component {
    state = {  }
    render() { 
        return (
            <div id="sign-up" className="col pt-5">
                <div className="card card-body bg-transparent border-0">
                    <div className="card-title text-center">
                        <h2>Sign up</h2>
                        <p>Please input your credentials.</p>
                    </div>
                    <form>
                        <div className="row justify-content-center">
                            <LeftFormSignup />
                            <RightFormSigup />
                        </div>
                        <div className="w-100 d-flex justify-content-between">
                            <button type="submit" className="btn btn-outline-dark font-weight-bold w-45 mx-auto">Submit</button>
                            <button type="reset" className="btn btn-outline-dark font-weight-bold w-45 mx-auto">Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default Signup;