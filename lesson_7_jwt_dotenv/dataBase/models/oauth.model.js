const { Model, DataTypes } = require('sequelize');

const sequelize = require('../index');
const UserModel = require('./user.model');


class OauthModel extends Model {
}

OauthModel.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

  access_token: {
    type: DataTypes.STRING,
    allowNull: false
  },

  refresh_token: {
    type: DataTypes.STRING,
    allowNull: false
  },

  user_id: {
    type: DataTypes.INTEGER,
    foreignKey: true
  },

  created_at: {
    type: DataTypes.STRING,
    default: new Date().toISOString()
  },

}, {
  sequelize,
  modelName: 'oauth',
  tableName: 'OAuth',
  timestamps: false
});

OauthModel.belongsTo(UserModel, { foreignKey: 'user_id' });

module.exports = OauthModel;
