const {CarModel} = require('../models');

module.exports = {
  findAll: async () => {
    return CarModel.findAll({});
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
