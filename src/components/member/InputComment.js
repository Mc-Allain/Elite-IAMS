import React, { Component } from 'react';

class InputComment extends Component {
    state = {  }
    render() { 
        const { comment, onSubmit, onChange } = this.props;
        
        return (
            <form onSubmit={onSubmit}>
                <div className="input-group">
                    <input type="text" className="pl-3 w-75 border-lightgray"
                    placeholder="Please input your comment here..."
                    value={comment.content}
                    onChange={onChange}></input>
                    <div className="input-group-append w-25">
                        <button type="submit" className="btn btn-dark btn-block">Submit</button>
                    </div>
                </div>
            </form>
        );
    }
}
 
export default InputComment;