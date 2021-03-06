import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CommentsFeed from './CommentsFeed';
import Like from './Like';


const Feed = props => {
    if (props.feedData.length === 0) return null;
    const feedArr = Object.values(props.feedData.postList);
   


    return (
        <div className ="feedArr--container">
            {feedArr.reverse().map(post => {
                return (
                    <div className="feed__container">
                        <Link to={`/profile/${post.userId}`} className="feed__user--container">
                            <div className='feedUser__icon'> <img className='feed__userimg' src={post.user_info.profileimgurl} alt='user__img'/></div>
                            <div className='feedUser__user'>{post.user_info.username}</div>
                        </Link>
                        <div className='image-container'> 
                                <div className='image'><img src={post.postimgurl} alt="feed-img"/> </div>
                        </div>
                        <div className='icon-container'>
                            <Like postId={post.id} {...props}/>
                            <div className={`likes_num${post.id} likes_num`}>{post.LikesNum} likes</div>
                        </div>
                        <div className="comments__outer">
                            <div className='personalPost-container'>
                                <Link to={`/profile/${post.userId}`} className="comment__userLink"><div className='commentsFeed__user'>{post.user_info.username}</div></Link>
                                <div className='commentsFeed__description'>{post.description}</div>
                            </div>
                            <CommentsFeed postId={post.id} {...props}/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}


const mapStateToProps = state => {
    return {
        posts: state.props,
    };
};

export default connect (
    mapStateToProps,
)(
    Feed
);