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
      const createdUser = await userService.create(req.body);

      res.json(createdUser);
    } catch (e) {
      next(e);
    }
  }

  async updateById(req, res, next) {
    try {
      const id = req.params.id;

      const updatedUser = await userService.updateById(id, req.body);

      res.json(updatedUser);
    } catch (e) {
      next(e);
    }
  }

  async deleteById(req, res, next) {
    try {
      const id = req.params.id;

      const deletedUser = await userService.deleteById(id);

      res.json(deletedUser);
    } catch (e) {
      next(e);
    }
  }
}


module.exports = new UserController();
