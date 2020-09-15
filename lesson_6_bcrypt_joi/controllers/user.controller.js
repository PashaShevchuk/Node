const {
  userService: {findAllUsers, findById, createUser, updateUserById, deleteUserById}
} = require('../services');
const {hashPassword} = require('../helpers');

module.exports = {
  fetchAll: async (req, res) => {
    try {
      const users = await findAllUsers();
      res.json(users);

    } catch (e) {
      res.status(400).end(e.message);
    }
  },

  findOneUser: async (req, res) => {
    try {
      const user = await findById(+req.params.id);
      res.json(user);

    } catch (e) {
      res.status(400).end(e.message);
    }
  },

  createOneUser: async (req, res) => {
    try {
      const user = req.body;
      user.password = await hashPassword(user.password);
      const createdUser = await createUser(user);

      res.status(201).json(createdUser);

    } catch (e) {
      res.status(400).end(e.message);
    }
  },

  updateOneUser: async (req, res) => {
    try {
      const messageAboutUpdatingUser = await updateUserById(+req.params.id, req.body);
      res.json(messageAboutUpdatingUser);

    } catch (e) {
      res.status(400).end(e.message);
    }
  },

  deleteOneUser: async (req, res) => {
    try {
      const messageAboutDeletingUser = await deleteUserById(+req.params.id);
      res.status(200).send(messageAboutDeletingUser);

    } catch (e) {
      res.status(400).end(e.message);
    }
  },
};
