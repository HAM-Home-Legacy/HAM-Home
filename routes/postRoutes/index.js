const express = require("express");

const router = express.Router();
const services = require("../../services");

const Post = require("../../models/post");

router.post("/createPost", async (req, res) => {
  try {
    let post = await services.postService.createPost(req.body);
    res.send(post);
  } catch (error) {
    res.send(error);
  }
});
router.post("/search", async (req, res) => {
  try {
    const filteredPosts = await services.postService.findByFilter(req.body);
    res.send(filteredPosts);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
