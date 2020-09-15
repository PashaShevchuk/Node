const UserModel = require('../dataBase/models/user.model')
const {
  constants: {emailRegexp}
} = require('../constants');
const {
  CustomError,
  statusCodesEnum,
  usersErrors: {
    BAD_REQUEST_NOT_VALID_USER,
    BAD_REQUEST_NOT_VALID_EMAIL,
    NOT_FOUND_USER
  }
} = require('../errors');

module.exports = {
  checkUserValidity: (req, res, next) => {
    try {
      const user = req.body;
      const email = user.email;

      if (!user.first_name || !user.last_name || !user.email) {
        return next(new CustomError(
          BAD_REQUEST_NOT_VALID_USER.message,
          statusCodesEnum.BAD_REQUEST,
          BAD_REQUEST_NOT_VALID_USER.code)
        );
      }

      if (!emailRegexp.test(email)) {
        return next(new CustomError(
          BAD_REQUEST_NOT_VALID_EMAIL.message,
          statusCodesEnum.BAD_REQUEST,
          BAD_REQUEST_NOT_VALID_EMAIL.code)
        );
      }

      next();

    } catch (e) {
      next(e);
    }
  },

  isUserInDB: async (req, res, next) => {
    try {
      const id = +req.params.id;
      const user = await UserModel.findOne({where: {id}});

      if (!user) {
        return next(new CustomError(
          NOT_FOUND_USER.message,
          statusCodesEnum.NOT_FOUND,
          NOT_FOUND_USER.code)
        );
      }

      next();

    } catch (e) {
      next(e);
    }
  },
};
