const uuid = require('uuid').v4();
const fs = require('fs-extra').promises;
const path = require('path');

const {
  emailService,
  userService: { getAll, findById, makeOne, updateById, deleteById }
} = require('../services');
const { hashPassword } = require('../helpers');
const { WELCOME } = require('../configs/email-action.enum');


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

      let newUser = await makeOne(user);

      if (req.photos) {
        const avatar = req.photos[0];
        const photoDir = `/users/${ newUser.id }/photos`;
        const fileExtension = avatar.name.split('.').pop();
        const photoName = `${ uuid }.${ fileExtension }`;

        await fs.mkdir(path.join(process.cwd(), 'public', photoDir), { recursive: true });
        await avatar.mv(path.join(process.cwd(), 'public', photoDir, photoName));
        newUser = await updateById(newUser.id, { avatar: `${ photoDir }/${ photoName }` })
      }

      await emailService.sendMail(user.email, WELCOME, { userName: user.email });

      res.status(201).json(newUser);

    } catch (e) {
      next(e);
    }
  },

  updateOne: async (req, res, next) => {
    try {
      const user = req.user;

      if (!user.password) {
        const userToUpdate = { ...user, ...req.body };

        const updatedUser = await updateById(+req.params.id, userToUpdate);

        res.json(updatedUser);

      } else {
        user.password = await hashPassword(user.password);

        const userToUpdate = { ...user, ...req.body };

        const updatedUser = await updateById(+req.params.id, userToUpdate);

        res.json(updatedUser);
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