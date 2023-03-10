const db = require('../connection');

const deleteFavourites = function(id) {
  return db.query(`DELETE FROM user_favourites
  WHERE brewery_id = $1 AND guest_id = 1`, [id])
  .then(data =>  {
    return data.rows
  });
}

module.exports = deleteFavourites