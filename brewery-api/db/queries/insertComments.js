const db = require('../connection');

function addComment(id, comment) {
  return db.query(`INSERT INTO reviews (guest_id, brewery_id, comment)
  VALUES ($1, $2, $3) RETURNING *`, [1, id, comment])
  .then((results) => {
    console.log(results.rows)
    return results.rows
  })
  .catch((error) => {
    console.log(error.message)
  });
};

module.exports = addComment;