const bcrypt = require('bcrypt');
const UserModel = require('../dataBase/models/user.model');
const { userService } = require('../services');
const { newUserValidator, updateUserValidator } = require('../validators');
const {
  CustomError,
  statusCodesEnum,
  usersErrors: { BAD_REQUEST_NOT_VALID_USER, NOT_FOUND_USER }
} = require('../errors');


module.exports = {
  checkUserValidity: (req, res, next) => {
    try {
      const user = req.body;
      const { error } = newUserValidator.validate(user);

      if (error) {
        return next(new CustomError(   // or  // return next(new CustomError(
          error.details[0].message,           //   BAD_REQUEST_NOT_VALID_USER.message,
          statusCodesEnum.BAD_REQUEST,        //   statusCodesEnum.BAD_REQUEST,
          BAD_REQUEST_NOT_VALID_USER.code)    //   BAD_REQUEST_NOT_VALID_USER.code)
        );
      }

      next();

    } catch (e) {
      next(e);
    }
  },

  isUserInDbById: async (req, res, next) => {
    try {
      const id = +req.params.id;
      const user = await UserModel.findOne({ where: { id } });

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

  checkUpdateUserValidity: (req, res, next) => {
    try {
      const user = req.body;
      const dataToUpdateUser = Object.keys(user).length !== 0;

      if (!dataToUpdateUser) {
        return next(new CustomError(
          BAD_REQUEST_NOT_VALID_USER.message,
          statusCodesEnum.BAD_REQUEST,
          BAD_REQUEST_NOT_VALID_USER.code)
        );
      }

      const { error } = updateUserValidator.validate(user);

      if (error) {
        return next(new CustomError(
          error.details[0].message,
          statusCodesEnum.BAD_REQUEST,
          BAD_REQUEST_NOT_VALID_USER.code)
        );
      }

      req.user = user;
      next();

    } catch (e) {
      next(e);
    }
  },

  checkIsUserPresent: async (req, res, next) => {
    try {
      const { login } = req.body;
      const user = await userService.findOneByParams({ login });

      if (!user) {
        return next(new CustomError(
          NOT_FOUND_USER.message,
          statusCodesEnum.NOT_FOUND,
          NOT_FOUND_USER.code)
        );
      }

      req.user = user;
      next();

    } catch (e) {
      next(e);
    }
  },

  checkHashUserPassword: async (req, res, next) => {
    try {
      const user = req.user;
      const { password } = req.body;
      const isPasswordsEquals = await bcrypt.compare(password, user.password);

      if (!isPasswordsEquals) {
        return next(new CustomError(NOT_FOUND_USER.message, statusCodesEnum.NOT_FOUND, NOT_FOUND_USER.code));
      }

      req.authMessage = 'Authorization successful'
      next();

    } catch (e) {
      next(e);
    }
  },
};
