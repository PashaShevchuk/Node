const {
  emailService,
  carService: { getAll, findById, makeOne, updateById, deleteById }
} = require('../services');
const { CREATE_CAR, DELETE_CAR } = require('../configs/email-action.enum');


module.exports = {
  fetchAll: async (req, res, next) => {
    try {
      const cars = await getAll();

      res.json(cars);

    } catch (e) {
      next(e);
    }
  },

  findOne: async (req, res, next) => {
    try {
      const car = await findById(+req.params.id);

      res.json(car);

    } catch (e) {
      next(e);
    }
  },

  createOne: async (req, res, next) => {
    try {
      const { body, user } = req;

      const messageAboutCreatingCar = await makeOne({ ...body, user_id: user.id });

      await emailService.sendMail(user.email, CREATE_CAR, {
        userName: user.email,
        carModel: body.model.toUpperCase()
      });

      res.status(201).send(messageAboutCreatingCar);

    } catch (e) {
      next(e);
    }
  },

  updateOne: async (req, res, next) => {
    try {
      const { car, user } = req;
      const carToUpdate = { ...car, ...req.body, user_id: user.id };

      const messageAboutUpdatingCar = await updateById(+req.params.id, carToUpdate);

      res.send(messageAboutUpdatingCar);

    } catch (e) {
      next(e);
    }
  },

  deleteOne: async (req, res, next) => {
    try {
      const { car, user } = req;

      const messageAboutDeletingCar = await deleteById(+req.params.id);

      await emailService.sendMail(user.email, DELETE_CAR, {
        userName: user.email,
        carModel: car.model.toUpperCase()
      });

      res.status(200).send(messageAboutDeletingCar);

    } catch (e) {
      next(e);
    }
  },
};
