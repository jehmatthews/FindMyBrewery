const express = require('express');
const router = express.Router();
const deleteFavourites = require('../db/queries/deleteFavourites')

// insert a saved brewery into the fav table
router.post('/delete', (req, res) => {
  const breweryId = req.body.brewery; //row to delete
  deleteFavourites(breweryId)
});

module.exports = router;