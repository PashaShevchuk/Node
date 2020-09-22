const UserModel = require('../dataBase/models/user.model');


module.exports = {
  getAll: () => UserModel.findAll({
    attributes: ['id', 'first_name', 'last_name', 'email', 'login']
  }),

  findById: (id) => UserModel.findOne({
    where: { id },
    attributes: ['id', 'first_name', 'last_name', 'email', 'login']
  }),

  makeOne: (userObject) => UserModel.create(userObject).then(() => 'The user has been created'),

  updateById: (id, userObject) => UserModel.update(userObject, { where: { id } }).then(() => 'The user has been updated'),

  deleteById: (id) => UserModel.destroy({ where: { id } }).then(() => 'The user has been deleted'),

  findOneByParams: (findObject) => UserModel.findOne({ where: findObject })
};
