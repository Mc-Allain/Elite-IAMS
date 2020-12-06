import React, { Component } from 'react';

import SourceProfile from './SourceProfile.js';
import NewsInfo from './NewsInfo.js';
import LikeButton from './LikeButton.js';
import Comments from './Comments.js';

class NewsItem extends Component {
    state = {  }
    render() { 
        const { newsItem, handleNewsLike, addComment, handleCommentLike } = this.props;

        return (
            <div className="col bg-light min-height-10 my-2 pt-2">
                <SourceProfile source={newsItem} />
                <div className="my-3 mx-auto w-90">
                    <p>
                        {newsItem.content}
                    </p>
                </div>
    
                <NewsInfo newsItem={newsItem} />

                <div className="row border-top-lightgray min-height-30px">
                    <LikeButton source={newsItem}
                    handleLike={handleNewsLike} />
                    <Comments newsItem={newsItem}
                    addComment={addComment} handleCommentLike={handleCommentLike}/>
                </div>
            </div>
        );
    }  
}
 
export default NewsItem;