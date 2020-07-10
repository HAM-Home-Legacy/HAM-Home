const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
  },
  numberOfRooms: {
    type: Number,
  },
  state: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  //   userId: { type: mongoose.Schema.Types.ObjectId, ref: User.modelName },
});

module.exports = mongoose.model('Post', postSchema);

// // Func to Create a post for testing
// async function createPost(title, numberOfRooms, state, description, price) {
//   const post = new Post({
//     title,
//     numberOfRooms,
//     state,
//     description,
//     price,
//   });
//   const result = await post.save();
//   console.log(result);
// }

// createPost(
//   '1994-05-23',
//   '08:00 AM',
//   'Ghazela',
//   '5efda8a469557a42107407d0'
// );
