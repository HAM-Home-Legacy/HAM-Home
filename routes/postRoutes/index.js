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
router.post('/search', async (req, res) => {
  try {
    const filteredPosts = await services.postService.findByFilter(req.body)
    console.log(filteredPosts)
    res.send(filteredPosts)
  } catch (error) {
    res.send(error)
  }
});

module.exports = router;
