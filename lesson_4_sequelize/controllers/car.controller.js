const {carService} = require('../services');

module.exports = {
  fetchAll: async (req, res) => {
    try {
      const cars = await carService.findAll();
      res.json(cars);
    } catch (e) {
      res.json(e.message);
    }
  },

  findCar: async (req, res) => {
    try {
      const car = await carService.findById(+req.params.id);
      res.json(car);
    } catch (e) {
      res.json(e.message);
    }
  },

  create: async (req, res) => {
    try {
      const createdCar = await carService.createCar(req.body);
      res.status(201).json(createdCar);
    } catch (e) {
      res.json(e.message);
    }
  },

  update: async (req, res) => {
    try {
      const updatedCar = await carService.updateCar(+req.params.id, req.body);
      res.json(updatedCar);
    } catch (e) {
      res.json(e.message);
    }
  },

  delete: async (req, res) => {
    try {
      const messageAboutDeletingCar  = await carService.deleteCar(+req.params.id);
      res.status(200).send(messageAboutDeletingCar);
    } catch (e) {
      res.json(e.message);
    }
  },
};
