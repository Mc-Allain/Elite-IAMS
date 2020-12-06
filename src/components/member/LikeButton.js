import React, { Component } from 'react';

class LikeButton extends Component {
    state = {  }
    render() { 
        const { source, handleLike } = this.props;

        return (
            <div className="col-6 px-0 border-right-lightgray">
                <button className={this.getLikeButtonClasses(source.liked)}
                onClick={handleLike.bind(this, source)}>
                    <i className="fas fa-thumbs-up"></i>
                    <span className={this.getLikeTextClasses(source.liked)}>Like</span>
                </button>
            </div>
        );
    }

    getLikeButtonClasses = liked => {
        let classes = "btn btn-block btn-light "
        classes += liked === true ? "text-primary" : "text-black-50"
        return classes;
    }

    getLikeTextClasses = liked => {
        let classes = "ml-3 "
        classes += liked === true ? "text-primary" : "text-dark"
        return classes;
    }
}
 
export default LikeButton;