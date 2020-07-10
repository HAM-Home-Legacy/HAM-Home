const Post = require('../../models/post');

module.exports = {
    async findAllPosts() {
        return Post.find({})
    },
    async findByFilter(filter) {
        return Post.find(filter)
    }
}
// module.exports = {
//   async savePost() {
//     const post = new Post({
//       title,
//       numberOfRooms,
//       state,
//       description,
//       price,
//     });
//     const result = await post.save();
//     console.log(result);
//   },
// };

// module.exports = createPost(
//   'Entire Appartment',
//   5,
//   'las vegas',
//   'Beautiful large appartment',
//   520
// );
// Func to Create a post for testing

