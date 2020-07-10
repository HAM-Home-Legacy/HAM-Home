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
};
