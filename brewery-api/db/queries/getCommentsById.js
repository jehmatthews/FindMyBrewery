const db = require('../connection');

function getCommentsById(id) {
  return db.query(`SELECT * FROM reviews WHERE brewery_id = '${id}';`)
    .then(data => {
      return data.rows;
    });
};

module.exports = getCommentsById;