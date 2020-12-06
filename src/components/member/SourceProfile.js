import React, { Component } from 'react';

class SourceProfile extends Component {
    state = {  }
    render() { 
        const { source } = this.props;

        return (
            <div className="d-flex align-items-center border-lightgray rounded-pill py-2">
                <i className="fas fa-user text-primary ml-4"></i>
                <h6 className="my-auto ml-4">
                    {"From: " + source.userId + " | " + source.userName}
                </h6>
            </div>
        );
    }
}
 
export default SourceProfile;