const connection = require('../dataBase').getInstance();

module.exports = {
    findAll: async () => {
        const Car = connection.getModel('Car');
        return Car.findAll({});
    },
};
