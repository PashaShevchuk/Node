const {
  carService: { getAll, findById, makeOne, updateById, deleteById }
} = require('../services');


module.exports = {
  fetchAll: async (req, res) => {
    try {
      const cars = await getAll();

      res.json(cars);

    } catch (e) {
      res.status(400).end(e.message);
    }
  },

  findOne: async (req, res) => {
    try {
      const car = await findById(+req.params.id);

      res.json(car);

    } catch (e) {
      res.status(400).end(e.message);
    }
  },

  createOne: async (req, res) => {
    try {
      const messageAboutCreatingCar = await makeOne(req.body);

      res.status(201).send(messageAboutCreatingCar);

    } catch (e) {
      res.status(400).end(e.message);
    }
  },

  updateOne: async (req, res) => {
    try {
      const car = req.car;
      const carToUpdate = { ...car, ...req.body };
      const messageAboutUpdatingCar = await updateById(+req.params.id, carToUpdate);

      res.send(messageAboutUpdatingCar);

    } catch (e) {
      res.status(400).end(e.message);
    }
  },

  deleteOne: async (req, res) => {
    try {
      const messageAboutDeletingCar = await deleteById(+req.params.id);

      res.status(200).send(messageAboutDeletingCar);

    } catch (e) {
      res.status(400).end(e.message);
    }
  },
};
