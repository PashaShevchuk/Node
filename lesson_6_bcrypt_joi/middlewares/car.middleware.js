const CarModel = require('../dataBase/models/car.model');
const {
  CustomError,
  statusCodesEnum,
  carsErrors: {
    BAD_REQUEST_NOT_VALID_CAR,
    BAD_REQUEST_NOT_VALID_CAR_YEAR,
    BAD_REQUEST_NOT_VALID_CAR_MODEL_NAME,
    BAD_REQUEST_NOT_VALID_CAR_PRICE,
    NOT_FOUND_CAR
  }
} = require('../errors');

module.exports = {
  checkCarValidity: (req, res, next) => {
    try {
      const car = req.body;

      if (!car.model || !car.price || !car.year) {
        return next(new CustomError(
          BAD_REQUEST_NOT_VALID_CAR.message,
          statusCodesEnum.BAD_REQUEST,
          BAD_REQUEST_NOT_VALID_CAR.code)
        );
      }

      if (+car.year < 1885 || +car.year > new Date().getFullYear()) {
        return next(new CustomError(
          BAD_REQUEST_NOT_VALID_CAR_YEAR.message,
          statusCodesEnum.BAD_REQUEST,
          BAD_REQUEST_NOT_VALID_CAR_YEAR.code)
        );
      }

      if (car.model.length > 50) {
        return next(new CustomError(
          BAD_REQUEST_NOT_VALID_CAR_MODEL_NAME.message,
          statusCodesEnum.BAD_REQUEST,
          BAD_REQUEST_NOT_VALID_CAR_MODEL_NAME.code)
        );
      }

      if (car.price <= 0) {
        return next(new CustomError(
          BAD_REQUEST_NOT_VALID_CAR_PRICE.message,
          statusCodesEnum.BAD_REQUEST,
          BAD_REQUEST_NOT_VALID_CAR_PRICE.code)
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
};
