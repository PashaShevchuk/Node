const { Model, DataTypes } = require('sequelize');
const sequelize = require('../index');


class UserModel extends Model {
}

UserModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },

  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },

  login: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

}, {
  sequelize,
  modelName: 'user',
  tableName: 'users',
  timestamps: false
});

module.exports = UserModel;
