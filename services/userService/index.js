const Users = require("../../models/user");

module.exports = {
  async findAllUsers() {
    return Users.find({});
  },
  async createUser(userAccount) {
    Users.find(
      { email: userAccount.email, phoneNumber: userAccount.phoneNumber },
      (err, docs) => {
        if (docs.length > 0) {
          console.log(docs);
          return "User Exists";
        } else {
          return Users.create(userAccount);
        }
      }
    );
  },
  async updateUser(user) {
    return Users.update({ _id: user._id }, user);
  },
  async checkUser(user) {
    return Users.find(user);
  },
  async findUser(user) {
    return Users.find(user);
  },
  async addPost(object) {
    return Users.find({ email: object.email }, (err, docs) => {
      if (docs[0].posts === "") {
        var posts = JSON.stringify(object.post);
      } else {
        var posts = docs[0].posts + "," + JSON.stringify(object.post);
      }
      Users.updateOne({ email: object.email }, { posts }, (err) => {
        if (!err) {
          console.log("user updated");
        }
      });
    });
  },
};
