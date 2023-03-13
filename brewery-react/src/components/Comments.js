import React, { useState, useEffect } from "react";
import axios from "axios";
import '../styles/comments.scss';
import Navigation from './Navigation';
import insertComment from '../helpers/insertComment';

export default function CommentsPage(props) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    axios
      .get(`/api/breweries/comments/${props.id}`)
      .then((response) => {
        console.log("response", response);
        setComments(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSubmit = (event) => {
    insertComment(props.id, newComment)
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
            {comments ? (
              <ol>
                {comments.map((comments, index) => (
                  <div className="comment" key={index}>{comments.comment}</div>
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


