const {
  userService: { getAll, findById, makeOne, updateById, deleteById }
} = require('../services');
const { hashPassword } = require('../helpers');


module.exports = {
  fetchAll: async (req, res) => {
    try {
      const users = await getAll();

      res.json(users);

    } catch (e) {
      res.status(400).end(e.message);
    }
  },

  findOne: async (req, res) => {
    try {
      const user = await findById(+req.params.id);

      res.json(user);

    } catch (e) {
      res.status(400).end(e.message);
    }
  },

  createOne: async (req, res) => {
    try {
      const user = req.body;
      user.password = await hashPassword(user.password);

      const messageAboutCreatingUser = await makeOne(user);

      res.status(201).send(messageAboutCreatingUser);

    } catch (e) {
      res.status(400).end(e.message);
    }
  },

  updateOne: async (req, res) => {
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
      res.status(400).end(e.message);
    }
  },

  deleteOne: async (req, res) => {
    try {
      const messageAboutDeletingUser = await deleteById(+req.params.id);

      res.status(200).send(messageAboutDeletingUser);

    } catch (e) {
      res.status(400).end(e.message);
    }
  },
};
