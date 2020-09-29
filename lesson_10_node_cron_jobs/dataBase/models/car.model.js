const { Model, DataTypes } = require('sequelize');

const sequelize = require('../index');
const { CARS } = require('../../configs/db-tables.enum');


class CarModel extends Model {
}

CarModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  model: {
    type: DataTypes.STRING,
    allowNull: false
  },

  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  year: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

}, {
  sequelize,
  modelName: 'car',
  tableName: CARS,
  timestamps: false
});

module.exports = CarModel;
