const express = require('express');
const addComment = require('../db/queries/insertComments');
const router = express.Router();


// insert a saved brewery into the fav table
router.post('/comments', (req, res) => {
  const breweryId = req.body.brewery; //row to insert
  const comment = req.body.comment;
  addComment(breweryId, comment)
});

module.exports = router;