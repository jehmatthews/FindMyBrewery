const db = require('../connection');

function getFavouritesById() {
  console.log('hello')
  return db.query(`SELECT brewery_id
  FROM user_favourites
  WHERE  guest_id = 1`)
    .then(data => {
      return data.rows;
    });
};

module.exports = getFavouritesById;