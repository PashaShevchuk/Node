const {CarModel} = require('../models');

module.exports = {
  checkCarValidity: (req, res, next) => {
    try {
      const car = req.body;

      if (!car.model || !car.price || !car.year) throw new Error('Please enter all required details');
      if (+car.year < 1885 || +car.year > new Date().getFullYear()) throw new Error('Please enter the correct year');
      if (car.model.length > 50) throw new Error('Model name must be less than 50 characters');
      if (car.price < 0) throw new Error('The price must be greater than 0');

      next();

    } catch (e) {
      return res.status(400).end(e.message);
    }
  },

  isCarInDB: async (req, res, next) => {
    try {
      const id = +req.params.id;
      const car = await CarModel.findOne({where: {id: id}});
      if (!car) {
        return res.status(400).end('Car not found');
      }

      next();

    } catch (e) {
      return res.status(400).end(e.message);
    }
  },
};
