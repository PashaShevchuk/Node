const { Model, DataTypes } = require('sequelize');

const sequelize = require('../index');
const { OAUTH } = require('../../config/db-tables.enum');
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
  },

  refresh_token: {
    type: DataTypes.STRING,
  },

  user_id: {
    type: DataTypes.INTEGER,
    foreignKey: true
  },

  created_at: {
    type: DataTypes.STRING,
    defaultValue: new Date().toISOString()
  },

}, {
  sequelize,
  modelName: OAUTH,
  tableName: OAUTH,
  timestamps: false
});

OauthModel.belongsTo(UserModel, { foreignKey: 'user_id' });

module.exports = OauthModel;
