const {
  userService: { getAll, findById, makeOne, updateById, deleteById }
} = require('../services');
const { hashPassword } = require('../helpers');


module.exports = {
  fetchAll: async (req, res, next) => {
    try {
      const users = await getAll();

      res.json(users);

    } catch (e) {
      next(e);
    }
  },

  findOne: async (req, res, next) => {
    try {
      const user = await findById(+req.params.id);

      res.json(user);

    } catch (e) {
      next(e);
    }
  },

  createOne: async (req, res, next) => {
    try {
      const user = req.body;

      user.password = await hashPassword(user.password);

      const messageAboutCreatingUser = await makeOne(user);

      res.status(201).send(messageAboutCreatingUser);

    } catch (e) {
      next(e);
    }
  },

  updateOne: async (req, res, next) => {
    try {
      const user = req.user;

      if (!user.password) {
        const userToUpdate = { ...user, ...req.body };
        const messageAboutUpdatingUser = await updateById(+req.params.id, userToUpdate);

        res.send(messageAboutUpdatingUser);

      } else {
        user.password = await hashPassword(user.password);

        const userToUpdate = { ...user, ...req.body };

        const messageAboutUpdatingUser = await updateById(+req.params.id, userToUpdate);

        res.send(messageAboutUpdatingUser);
      }

    } catch (e) {
      next(e);
    }
  },

  deleteOne: async (req, res, next) => {
    try {
      const messageAboutDeletingUser = await deleteById(+req.params.id);

      res.status(200).send(messageAboutDeletingUser);

    } catch (e) {
      next(e);
    }
  },
};
