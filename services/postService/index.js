const Post = require("../../models/post");

module.exports = {
  async findAllPosts() {
    return Post.find({});
  },
  async findByFilter(filter) {
    return Post.find(filter);
  },
  async createPost(post) {
    return Post.create(post);
  },
};
