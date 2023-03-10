const express = require('express');
const router = express.Router();
const getFavouritesById = require('../db/queries/getFavouritesById');

router.get('/favourites', (req, res) => {
  getFavouritesById()
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