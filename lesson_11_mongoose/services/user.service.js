const { UserModel } = require('../dataBase');


class UserService {
  getAll() {
    return UserModel.find({});
  }

  create(objectToCreate) {
    return new UserModel(objectToCreate).save();
  }

  updateById(id, objectToUpdate) {
    return UserModel.findByIdAndUpdate(id, objectToUpdate, { new: true });
  }

  deleteById(id) {
    return UserModel.findByIdAndDelete(id);
  }
}


module.exports = new UserService();
