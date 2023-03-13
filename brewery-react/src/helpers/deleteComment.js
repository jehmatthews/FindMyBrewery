import axios from "axios";

export default function deleteComment(comment) {
  axios.post('/api/brewery/delete', {
    comment: comment
  });
  window.location.reload();
  console.log("deleted!")
};