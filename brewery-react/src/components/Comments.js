import React, { useState } from 'react';
import '../styles/comments.scss';
import Navigation from './Navigation';

export default function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment('');
  };

  return (
    <div className="comments-section">
      <Navigation />
      <div className="comments">
        <form onSubmit={handleSubmit}>
          <label className="comment-command" htmlFor="new-comment"></label>
            <textarea
              id="new-comment"
              value={newComment}
              onChange={(event) => setNewComment(event.target.value)}
              placeholder="Leave your comment.."
              required
            />
          <button type="submit">Submit</button>
        </form>
        <div className="submitted-comments">
          <div className="comments-title">Comments:</div>
            {comments.length > 0 ? (
              <ol>
                {comments.map((comment, index) => (
                  <div className="comment" key={index}>{comment}</div>
                ))}
              </ol>
            ) : (
              <div className="no-comment">No comments yet.</div>
            )}
        </div>
      </div>
    </div>
  );
};


