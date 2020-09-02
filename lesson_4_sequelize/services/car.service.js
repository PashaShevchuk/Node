const {CarModel} = require('../models');

module.exports = {
  findAll: async () => {
    const cars = await CarModel.findAll({});
    if (!cars) {
      return {err: 'Cars not found'};
    }
    return cars;
  },

  findById: async (id) => {
    const car = await CarModel.findOne({where: {id: id}});
    if (!car) {
      return {err: 'Car not found'};
    }
    return car;
  },

  createCar: async (carObject) => {
    return CarModel.create(carObject);
  },

  updateCar: async (id, carObject) => {
    const car = await CarModel.findOne({where: {id: id}});
    if (!car) {
      return {err: 'Car not found'};
    }

    return CarModel.update(carObject, {where: {id: id}}).then(() => CarModel.findOne({where: {id: id}}));
  },

  deleteCar: async (id) => {
    const car = await CarModel.findOne({where: {id: id}});
    if (!car) {
      return {err: 'Car not found'};
    }

    return CarModel.destroy({where: {id: id}}).then(() => CarModel.findAll());
  },
};
