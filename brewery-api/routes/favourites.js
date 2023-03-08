const express = require('express');
const router = express.Router();
const getFavourites = require('../db/queries/getFavouritesById')

router.get('/favourites', (req, res) => {
  getFavourites()
    .then(favourites => {
      res.json(favourites);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
  });
});

module.exports = router;