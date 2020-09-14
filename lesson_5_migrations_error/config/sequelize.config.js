const {Sequelize} = require('sequelize');

module.exports = new Sequelize('auto_shop', 'root', '022894', {
  host: 'localhost', dialect: 'mysql'
});
