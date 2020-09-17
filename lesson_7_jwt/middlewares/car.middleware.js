const CarModel = require('../dataBase/models/car.model');
const {newCarValidator, updateCarValidator} = require('../validators');
const {
  CustomError,
  statusCodesEnum,
  carsErrors: {BAD_REQUEST_NOT_VALID_CAR, NOT_FOUND_CAR}
} = require('../errors');

module.exports = {
  checkCarValidity: (req, res, next) => {
    try {
      const car = req.body;
      const {error} = newCarValidator.validate(car);

      if (error) {
        return next(new CustomError(error.details[0].message,
          statusCodesEnum.BAD_REQUEST,
          BAD_REQUEST_NOT_VALID_CAR.code)
        );
      }
      next();

    } catch (e) {
      next(e);
    }
  },

  isCarInDB: async (req, res, next) => {
    try {
      const id = +req.params.id;
      const car = await CarModel.findOne({where: {id}});

      if (!car) {
        return next(new CustomError(
          NOT_FOUND_CAR.message,
          statusCodesEnum.NOT_FOUND,
          NOT_FOUND_CAR.code)
        );
      }
      next();

    } catch (e) {
      next(e);
    }
  },

  checkUpdateCarValidity: (req, res, next) => {
    try {
      const car = req.body;

      const dataToUpdateCar = Object.keys(car).length !== 0;
      if (!dataToUpdateCar) {
        return next(new CustomError(
          BAD_REQUEST_NOT_VALID_CAR.message,
          statusCodesEnum.BAD_REQUEST,
          BAD_REQUEST_NOT_VALID_CAR.code)
        );
      }

      const {error} = updateCarValidator.validate(car);
      if (error) {
        return next(new CustomError(
          error.details[0].message,
          statusCodesEnum.BAD_REQUEST,
          BAD_REQUEST_NOT_VALID_CAR.code)
        );
      }

      req.car = car;
      next();

    } catch (e) {
      next(e);
    }
  },
};
