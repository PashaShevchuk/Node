const { DataTypes } = require('sequelize');

const { USERS } = require('../../configs/db-tables.enum');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(USERS, {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
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
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(USERS);
  }
};
