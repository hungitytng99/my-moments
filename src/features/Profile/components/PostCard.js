
import React from 'react';
import { Button } from 'reactstrap';
import './PostCard.scss';
function PostCard(props) {
  const { post } = props;
  const valuePost = post[Object.keys(post)[0]];
  const photo = valuePost.images[0];
  const commentsCount = valuePost.comments.length;
  const likesCount = valuePost.liked;
  return (
    <div className="photo">
      <img src={photo.url} alt={photo.alt} />
      <div className="photo__overlay">
        <div className="photo__actions">
          <div className="photo__liked">
            <i className="photo__liked-icon fas fa-heart"></i>
            <div className="photo__liked-count">{likesCount}</div>
          </div>
          <div className="photo__comment">
            <i className="photo__comment-icon fas fa-comment"></i>
            <div className="photo__comment-count">{commentsCount}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;