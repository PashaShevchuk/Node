const UserModel = require('../dataBase/models/user.model');

module.exports = {
  findAllUsers: async () => UserModel.findAll(),

  findById: async (id) => UserModel.findOne({where: {id}}),

  createUser: async (userObject) => UserModel.create(userObject),

  updateUserById: async (id, userObject) => UserModel.update(userObject, {where: {id}}).then(() => 'The user has been updated'),

  deleteUserById: async (id) => UserModel.destroy({where: {id}}).then(() => 'The user has been deleted')
};
