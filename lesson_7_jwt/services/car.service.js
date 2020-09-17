const CarModel = require('../dataBase/models/car.model');

module.exports = {
  findAllCar: () => CarModel.findAll(),

  findById: (id) => CarModel.findOne({where: {id}}),

  createCar: (carObject) => CarModel.create(carObject).then(() => 'The car has been created'),

  updateCarById: (id, carObject) => CarModel.update(carObject, {where: {id}}).then(() => 'The car has been updated'),

  deleteCarById: (id) => CarModel.destroy({where: {id}}).then(() => 'The car has been deleted')
};
