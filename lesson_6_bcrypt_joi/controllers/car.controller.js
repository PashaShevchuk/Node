const {
  carService: {findAllCar, findById, createCar, updateCarById, deleteCarById}
} = require('../services');


module.exports = {
  fetchAll: async (req, res) => {
    try {
      const cars = await findAllCar();
      res.json(cars);

    } catch (e) {
      res.status(400).end(e.message);
    }
  },

  findOneCar: async (req, res) => {
    try {
      const car = await findById(+req.params.id);
      res.json(car);

    } catch (e) {
      res.status(400).end(e.message);
    }
  },

  createOneCar: async (req, res) => {
    try {
      const messageAboutCreatingCar = await createCar(req.body);
      res.status(201).send(messageAboutCreatingCar);

    } catch (e) {
      res.status(400).end(e.message);
    }
  },

  updateOneCar: async (req, res) => {
    try {
      const car = req.car;
      const carToUpdate = {...car, ...req.body};
      const messageAboutUpdatingCar = await updateCarById(+req.params.id, carToUpdate);

      res.send(messageAboutUpdatingCar);

    } catch (e) {
      res.status(400).end(e.message);
    }
  },

  deleteOneCar: async (req, res) => {
    try {
      const messageAboutDeletingCar = await deleteCarById(+req.params.id);
      res.status(200).send(messageAboutDeletingCar);

    } catch (e) {
      res.status(400).end(e.message);
    }
  },
};
