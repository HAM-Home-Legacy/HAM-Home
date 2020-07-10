const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Image = require('./image');

const postSchema = new Schema({
  title: {
    type: String,
  },
  numberOfRooms: {
    type: String,
  },
  state: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: String,
  },
  email: {
    type: String,
  },
  imageId: { type: mongoose.Schema.Types.ObjectId, ref: Image.modelName },
});

module.exports = mongoose.model('Post', postSchema);
