const {DataTypes} = require('sequelize');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('users', 'login', {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        }, {transaction: t}),
        queryInterface.addColumn('users', 'password', {
          type: Sequelize.STRING,
          allowNull: false,
        }, {transaction: t})
      ]);
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('users', 'login', {transaction: t}),
        queryInterface.removeColumn('users', 'password', {transaction: t})
      ]);
    });
  }
};
