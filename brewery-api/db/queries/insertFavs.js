const db = require('../connection');

// function that uses a query and promises to insert into the database
  function addFavBrewery(id) {
  return db.query(`INSERT INTO user_favourites (guest_id, brewery_id)
  VALUES ($1, $2) RETURNING *`, [1, id])
  .then((results) => {
    console.log(results.rows)
    return results.rows
  })
  .catch((error) => {
    console.log(error.message)
  });
};

module.exports = addFavBrewery;