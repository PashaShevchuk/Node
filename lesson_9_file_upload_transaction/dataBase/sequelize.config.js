const { Sequelize } = require('sequelize');

const { DB_NAME, DB_USER, DB_PASSWORD } = require('../configs/config');


module.exports = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: 'localhost', dialect: 'mysql'
});
