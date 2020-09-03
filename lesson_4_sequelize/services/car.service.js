const {CarModel} = require('../models');

module.exports = {
  findAllCar: async () => CarModel.findAll(),

  findById: async (id) => CarModel.findOne({where: {id: id}}),

  createCar: async (carObject) => CarModel.create(carObject),

  updateCarById: async (id, carObject) => CarModel.update(carObject, {where: {id: id}}).then(() => 'The car has been updated'),

  deleteCarById: async (id) => CarModel.destroy({where: {id: id}}).then(() => 'The car has been deleted')
};
