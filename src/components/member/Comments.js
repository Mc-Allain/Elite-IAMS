import React, { Component } from 'react';

import Comment from './Comment.js';
import InputComment from './InputComment.js';

class Comments extends Component {
    state = {
        comment:
        {
            id: 0,
            newsId: 0,
            userId: 12345678,
            userName: "Casindad, Mc Allain",
            content: "",
            likes: 0,
            dateTimePosted: "",
            liked: false
        }
    }

    onSubmit = e => {
        const { addComment } = this.props;
        const { newsItem } = this.props;

        let comment = {...this.state.comment};
        comment.dateTimePosted = this.getDateTime();

        newsItem.comments.push(comment);
        addComment(newsItem);

        comment = this.state.comment;
        comment.id++; 
        comment.content = "";

        e.preventDefault();
    }

    onChange = e => {
        const comment = {...this.state.comment};
        comment.content = e.target.value;

        this.setState({comment});
    }

    constructor(props) {
        super(props);
        const { newsItem } = this.props;

        const comment = this.state.comment;
        comment.id = newsItem.comments.length;
        comment.newsId = newsItem.id;
    }

    render() { 
        const { newsItem, handleCommentLike } = this.props;      
        
        return (
            <React.Fragment>
                <div className="col-6 px-0">
                    <button className="btn btn-block btn-light"
                    data-toggle="collapse" data-target={"#comments" + newsItem.id}
                    aria-controls={"comments" + newsItem.id} aria-expanded="false"
                    aria-label="Toggle navigation">
                        <i className="fas fa-comment text-black-50"></i>
                        <span className="ml-3 text-dark">Comments</span>
                    </button>
                </div>

                <div className="col collapse border-top-lightgray p-3"
                id={"comments" + newsItem.id}>
                    {
                        newsItem.comments.map(comment =>
                            <Comment key={comment.id} comment={comment}
                            handleCommentLike={handleCommentLike}/>
                        )
                    }

                    <InputComment comment={this.state.comment}
                    onSubmit={this.onSubmit} onChange={this.onChange} />
                </div>
            </React.Fragment>
        );
    }

    getDateTime = () => {
        const month = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]

        const currentYear = new Date().getFullYear();
        const currentMonth = month[new Date().getMonth()];
        const currentDay = new Date().getDate();

        const currentHr = new Date().getHours();
        const currentMin = new Date().getMinutes();
        let currentDateTime = currentYear + "-" + currentMonth + "-" + currentDay + " "
        currentDateTime += currentHr + ":"+ currentMin
        currentDateTime += currentHr < 12 ? "am" : "pm"

        return currentDateTime;
    }
}
 
export default Comments;