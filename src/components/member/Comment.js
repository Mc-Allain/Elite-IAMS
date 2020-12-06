import React, { Component } from 'react';

import SourceProfile from './SourceProfile.js';
import LikeButton from './LikeButton.js';

class Comment extends Component {
    state = {  }
    render() {
        const { comment, handleCommentLike } = this.props;

        return (
            <div className="mb-3 border-lightgray">
                <div className="px-2 pt-2">
                    <SourceProfile source={comment} />
                    <div className="mt-2 mx-auto w-90">
                        <p>
                            {comment.content}
                        </p>
                    </div>
                </div>     

                <div className="row border-top-lightgray min-height-30px align-items-center mx-auto">
                    <LikeButton source={comment} handleLike={handleCommentLike}/>

                    <span className={this.getLikesCountClasses(comment.likes)}>
                        <i className="fas fa-thumbs-up fa-sm"></i>
                    </span>
                    <small>{comment.likes}</small>

                    <i className="fas fa-clock fa-sm text-black-50 ml-auto mr-1"></i>
                    <small className="mr-4">{comment.dateTimePosted}</small>
                </div>
            </div>
        );
    }

    getLikesCountClasses = likes => {
        let classes = " ml-2 mr-1 "
        classes += likes > 0 ? "text-primary" : "text-black-50"
        return classes
    }
}
 
export default Comment;