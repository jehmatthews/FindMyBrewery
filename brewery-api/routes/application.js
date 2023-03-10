const express = require('express');
const router = express.Router();
const addFavBrewery = require('../db/queries/insertFavs')

// insert a saved brewery into the fav table
router.post('/insert', (req, res) => {
  const breweryId = req.body.brewery; //row to insert
  addFavBrewery(breweryId);
});

module.exports = router;