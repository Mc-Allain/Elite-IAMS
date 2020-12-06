import React, { Component } from 'react';

class NewsInfo extends Component {
    state = {  }
    render() { 
        const { newsItem } = this.props;

        return (
            <div className="row border-top-lightgray min-height-30px align-items-center">
                <span className={this.getLikesCountClasses(newsItem.likes)}>
                    <i className="fas fa-thumbs-up fa-sm"></i>
                </span>
                <small>{newsItem.likes}</small>
                
                <span className={this.getCommentsCountClasses(newsItem.comments.length)}>
                    <i className="fas fa-comment fa-sm"></i>
                </span>
                <small>{newsItem.comments.length}</small>
                
                <i className="fas fa-clock fa-sm text-black-50 ml-auto mr-1"></i>
                <small className="mr-4">{newsItem.dateTimePosted}</small>
            </div>
        );
    }
    
    getLikesCountClasses = likes => {
        let classes = " ml-5 mr-1 "
        classes += likes > 0 ? "text-primary" : "text-black-50"
        return classes
    }

    getCommentsCountClasses = comments => {
        let classes= "ml-4 mr-1 "
        classes += comments > 0 ? "text-info" : "text-black-50"
        return classes
    }  
}
 
export default NewsInfo;