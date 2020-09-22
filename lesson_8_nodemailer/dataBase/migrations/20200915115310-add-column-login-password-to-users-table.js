const { DataTypes } = require('sequelize');

const { USERS } = require('../../config/db-tables.enum');


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {

      return Promise.all([
        queryInterface.addColumn(USERS, 'login', {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        }, { transaction: t }),

        queryInterface.addColumn(USERS, 'password', {
          type: Sequelize.STRING,
          allowNull: false,
        }, { transaction: t })
      ]);
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {

      return Promise.all([
        queryInterface.removeColumn(USERS, 'login', { transaction: t }),

        queryInterface.removeColumn(USERS, 'password', { transaction: t })
      ]);
    });
  }
};
