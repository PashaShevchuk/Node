const UserModel = require('../dataBase/models/user.model');

// Models can be defined in two equivalent ways in Sequelize:
// 1. Calling sequelize.define(modelName, attributes, options);
// 2. Extending Model and calling init(attributes, options);
// I use the second way.
// There's an update method for the Model and a separate update method for an Instance (record). Model.update() updates
// all matching records and returns an array. Instance.update() updates the record and returns an instance object.

module.exports = {
  getAll: () => UserModel.findAll({
    attributes: ['id', 'first_name', 'last_name', 'email', 'login', 'avatar']
  }),

  findById: (id) => UserModel.findOne({
    where: { id },
    attributes: ['id', 'first_name', 'last_name', 'email', 'login', 'avatar']
  }),

  // 1 method
  // makeOne: (userObject) => UserModel.create(userObject).then((user) => 'The user has been created'),

  // 2 method, if we need to return an object.
  makeOne: async (userObject, transaction) => {
    await UserModel.create(userObject, { transaction });

    return await UserModel.findOne({
      where: userObject,
      attributes: ['id', 'first_name', 'last_name', 'email', 'login', 'avatar'],
      transaction
    });
  },

  // 2 method
  updateById: async (id, userObject, transaction) => {
    await UserModel.update(userObject, { where: { id }, transaction });

    return await UserModel.findOne({
      where: { id },
      attributes: ['id', 'first_name', 'last_name', 'email', 'login', 'avatar'],
      transaction
    });
  },

  deleteById: (id) => UserModel.destroy({ where: { id } }).then(() => 'The user has been deleted'),

  findOneByParams: (findObject) => UserModel.findOne({ where: findObject }),
};
