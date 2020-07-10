const express = require('express');

const router = express.Router();
const services = require('../../services');

const Post = require('../../models/post');

router.post('/', (req, res) => {
  var post = new Post(req.body);
  post.save((err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
  res.end();
  // });
});
router.get('/:id', (req, res) => {});

module.exports = router;
