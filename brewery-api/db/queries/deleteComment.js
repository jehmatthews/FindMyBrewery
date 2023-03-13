const db = require('../connection');

const deleteComment = function(comment) {
  return db.query(`DELETE FROM reviews
  WHERE comment = $1 AND guest_id = 1`, [comment])
  .then(data =>  {
    return data.rows
  });
}

module.exports = deleteComment