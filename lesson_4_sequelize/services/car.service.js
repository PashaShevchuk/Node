const connection = require('../dataBase').getInstance();
const {CarModel} = require('../models');

module.exports = {
    findAll: async () => {
        const car = CarModel.findAll({});
        return car;
    },
    // findAll: async () => {
    //     const Car = connection.getModel('Car');
    //     return Car.findAll({});
    // },
    //
    // createCar: async (carObject) => {
    //     const Car = connection.getModel('Car');
    //     return Car.create(carObject, {returning: true});
    // }
};
