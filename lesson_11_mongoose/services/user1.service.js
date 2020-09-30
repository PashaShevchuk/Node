const UserModel = require('../dataBase/models/user1.model');


class User1Service {
  getAll() {
    return UserModel.find({});
  }

  create(objectToCreate) {
    return new UserModel(objectToCreate).save();
  }

  deleteById(id) {
    return UserModel.findByIdAndDelete(id);
  }
}


module.exports = new User1Service();
