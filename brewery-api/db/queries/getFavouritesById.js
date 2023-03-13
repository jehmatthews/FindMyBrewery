const db = require('../connection');

function getFavouritesById() {
  return db.query(`SELECT *
  FROM user_favourites
  JOIN breweries ON brewery_id = breweries.id
  WHERE  guest_id = 1`)
    .then(data => {
      return data.rows;
    });
};

module.exports = getFavouritesById;