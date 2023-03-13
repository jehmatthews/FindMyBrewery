const express = require('express');
const getCommentsById = require('../db/queries/getCommentsById');
const router = express.Router();

router.get('/comments/:id', (req, res) => {
  id = req.params.id
  stringId = id.toString()
  console.log(id)

  getCommentsById(id)
    .then(comments => {
      res.json(comments);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
  });
});

module.exports = router;