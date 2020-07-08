const User = require('../../models/user')

module.exports = {
    async findAllUsers() {
        return User.find()
    }
}