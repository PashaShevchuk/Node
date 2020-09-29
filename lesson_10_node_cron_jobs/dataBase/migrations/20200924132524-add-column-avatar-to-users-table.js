const { DataTypes } = require('sequelize');

const { USERS } = require('../../configs/db-tables.enum');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(USERS, 'avatar', { type: DataTypes.STRING, });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(USERS, 'login');
  }
};
