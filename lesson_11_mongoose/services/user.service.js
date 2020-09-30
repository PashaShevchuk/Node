const { UserModel } = require('../dataBase');


class UserService {
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


module.exports = new UserService();
