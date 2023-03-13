import axios from "axios";

export default function insertComment(id, comment) {
  axios.post('/api/brewery/comments', {
    brewery: id,
    comment: comment
  });
  console.log("it worked!")
};
