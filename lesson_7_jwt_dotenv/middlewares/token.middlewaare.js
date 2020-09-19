const jwt = require('jsonwebtoken');

const {
  CustomError,
  statusCodesEnum,
  authErrors: { UNAUTHORIZED_NOT_VALID_TOKEN }
} = require('../errors');


module.exports = {
  checkAccessToken: (req, res, next) => {
    try {
      const token = req.get('Authorization');

      if (!token) {
        return next(new CustomError(
          UNAUTHORIZED_NOT_VALID_TOKEN.message,
          statusCodesEnum.UNAUTHORIZED,
          UNAUTHORIZED_NOT_VALID_TOKEN.code)
        );
      }

      jwt.verify(token, 'secret', (err) => {
        if (err) {
          return next(new CustomError(
            UNAUTHORIZED_NOT_VALID_TOKEN.message,
            statusCodesEnum.UNAUTHORIZED,
            UNAUTHORIZED_NOT_VALID_TOKEN.code)
          );
        }
      });

      // todo is token in DB

      next();

    } catch (e) {
      next(e);
    }
  },

  checkRefreshToken: (req, res, next) => {
    try {
      const token = req.get('Authorization');

      if (!token) {
        return next(new CustomError(
          UNAUTHORIZED_NOT_VALID_TOKEN.message,
          statusCodesEnum.UNAUTHORIZED,
          UNAUTHORIZED_NOT_VALID_TOKEN.code)
        );
      }

      jwt.verify(token, 'super', (err) => {
        if (err) {
          return next(new CustomError(
            UNAUTHORIZED_NOT_VALID_TOKEN.message,
            statusCodesEnum.UNAUTHORIZED,
            UNAUTHORIZED_NOT_VALID_TOKEN.code)
          );
        }
      });

      // todo is token in DB

      next();

    } catch (e) {
      next(e);
    }
  },
}
