const db = require('../connection');

// function that uses a query and promises to insert into the database
const addFavBrewery = function(id) {
  return db.query(`INSERT INTO favourites (guest_id, brewery_id)
  VALUES ($1, $2) RETURNING *`, [id.guest_id, id.brewery_id])
  .then((results) => {
    return results.rows
  })
  .catch((error) => {
    console.log(error.message)
  });
};

module.exports = { addFavBrewery }