const CarModel = require('../dataBase/models/car.model');


module.exports = {
  getAll: () => CarModel.findAll(),

  findById: (id) => CarModel.findOne({ where: { id } }),

  makeOne: (carObject) => CarModel.create(carObject).then(() => 'The car has been created'),

  updateById: (id, carObject) => CarModel.update(carObject, { where: { id } }).then(() => 'The car has been updated'),

  deleteById: (id) => CarModel.destroy({ where: { id } }).then(() => 'The car has been deleted')
};
