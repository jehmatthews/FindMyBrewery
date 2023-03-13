const express = require('express');
const deleteComment = require('../db/queries/deleteComment');
const router = express.Router();

// insert a saved brewery into the fav table
router.post('/delete', (req, res) => {
  const comment = req.body.comment; //row to delete
  deleteComment(comment)
});

module.exports = router;