import React, { Component } from 'react';

import Attendance from '../Attendance.js';
import News from './News.js';

class Container extends Component {
    state = {  }
    render() { 
        return (
            <div id="top" className="container-fluid">
                <div id="attendance" className="row full-min-height bg-warning pt-4">
                    <Attendance/>

                    <div id="news" className="col-lg-6 min-height-90 mt-5">
                        <div className="text-center">
                            <h1 className="display-4">News</h1>
                            <div className="title-underline bg-primary"></div>
                        </div>

                        <News />
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Container;