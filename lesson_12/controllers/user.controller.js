const { userService } = require('../services');


class UserController {
  async getAll(req, res, next) {
    try {
      const users = await userService.getAll();

      res.json(users);
    } catch (e) {
      next(e);
    }
  }

  async createOne(req, res, next) {
    try {
      const user = req.body;

      const createdUser = await userService.create(user);

      res.json(createdUser);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new UserController();
