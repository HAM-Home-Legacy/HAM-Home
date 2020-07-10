const Users = require("../../models/user");

module.exports = {
  async findAllUsers() {
    return Users.find({});
  },
  async createUser(userAccount) {
    return Users.create(userAccount);
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
};
