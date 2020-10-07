const jwt = require('jsonwebtoken');

const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = require('../configs/config');
const {
  CustomError,
  statusCodesEnum,
  authErrors: { UNAUTHORIZED_NOT_VALID_TOKEN }
} = require('../errors');
const {
  oauthService: { getByParams }
} = require('../services');
const { AUTHORIZATION } = require('../configs/constants');
const winston = require('../logger/winston');

const logger = winston('CHECK-TOKEN');


module.exports = {
  checkAccessToken: async (req, res, next) => {
    try {
      const token = req.get(AUTHORIZATION);

      if (!token) {
        // logger.info(new CustomError(
        //   UNAUTHORIZED_NOT_VALID_TOKEN.message,
        //   statusCodesEnum.UNAUTHORIZED,
        //   UNAUTHORIZED_NOT_VALID_TOKEN.code));
        logger.info({ message: 'Token is not valid!' });

        return next(new CustomError(
          UNAUTHORIZED_NOT_VALID_TOKEN.message,
          statusCodesEnum.UNAUTHORIZED,
          UNAUTHORIZED_NOT_VALID_TOKEN.code)
        );
      }

      jwt.verify(token, ACCESS_TOKEN_SECRET, (err) => {
        if (err) {
          return next(new CustomError(
            UNAUTHORIZED_NOT_VALID_TOKEN.message,
            statusCodesEnum.UNAUTHORIZED,
            UNAUTHORIZED_NOT_VALID_TOKEN.code)
          );
        }
      });

      const tokenWithUser = await getByParams({ access_token: token });

      if (!tokenWithUser) {
        return next(new CustomError(
          UNAUTHORIZED_NOT_VALID_TOKEN.message,
          statusCodesEnum.UNAUTHORIZED,
          UNAUTHORIZED_NOT_VALID_TOKEN.code)
        );
      }

      req.user = tokenWithUser.user;
      next();

    } catch (e) {
      next(e);
    }
  },

  checkRefreshToken: async (req, res, next) => {
    try {
      const token = req.get(AUTHORIZATION);

      if (!token) {
        return next(new CustomError(
          UNAUTHORIZED_NOT_VALID_TOKEN.message,
          statusCodesEnum.UNAUTHORIZED,
          UNAUTHORIZED_NOT_VALID_TOKEN.code)
        );
      }

      jwt.verify(token, REFRESH_TOKEN_SECRET, (err) => {
        if (err) {
          return next(new CustomError(
            UNAUTHORIZED_NOT_VALID_TOKEN.message,
            statusCodesEnum.UNAUTHORIZED,
            UNAUTHORIZED_NOT_VALID_TOKEN.code)
          );
        }
      });

      const tokenWithUser = await getByParams({ refresh_token: token });

      if (!tokenWithUser) {
        return next(new CustomError(
          UNAUTHORIZED_NOT_VALID_TOKEN.message,
          statusCodesEnum.UNAUTHORIZED,
          UNAUTHORIZED_NOT_VALID_TOKEN.code)
        );
      }

      req.user = tokenWithUser.user;
      next();

    } catch (e) {
      next(e);
    }
  },
}
