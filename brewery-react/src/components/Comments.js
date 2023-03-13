import React, { useState } from 'react';
import '../styles/comments.scss';

const CommentsPage = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment('');
  };

  return (
    <Wrapper>
      <title>Comments</title>
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-comment">Leave a comment:</label>
        <textarea
          id="new-comment"
          value={newComment}
          onChange={(event) => setNewComment(event.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {comments.length > 0 ? (
        <CommentList>
          {comments.map((comment, index) => (
            <Comment key={index}>{comment}</Comment>
          ))}
        </CommentList>
      ) : (
        <NoComments>No comments yet.</NoComments>
      )}
    </Wrapper>
  );
};

export default CommentsPage;

