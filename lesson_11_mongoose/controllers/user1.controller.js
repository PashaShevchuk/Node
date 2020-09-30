const { user1Service } = require('../services');


class User1Controller {
  async getAll(req, res, next) {
    try {
      const users = await user1Service.getAll();

      res.json(users);
    } catch (e) {
      next(e);
    }
  }

  async createOne(req, res, next) {
    try {
      const user = req.body;

      const createdUser = await user1Service.create(user);

      res.json(createdUser);
    } catch (e) {
      next(e);
    }
  }
}


module.exports = new User1Controller();
