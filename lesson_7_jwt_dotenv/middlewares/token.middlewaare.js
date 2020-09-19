const jwt = require('jsonwebtoken');

const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = require('../config/words-for-db.config');
const {
  CustomError,
  statusCodesEnum,
  authErrors: { UNAUTHORIZED_NOT_VALID_TOKEN }
} = require('../errors');
const {
  oauthService: { getByParams }
} = require('../services');


module.exports = {
  checkAccessToken: async (req, res, next) => {
    try {
      const token = req.get('Authorization');

      if (!token) {
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
      req.user = tokenWithUser.user;

      next();

    } catch (e) {
      next(e);
    }
  },

  checkRefreshToken: async (req, res, next) => {
    try {
      const token = req.get('Authorization');

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

      const tokens = await getByParams();

      if (!tokens) {
        return next(new CustomError(
          UNAUTHORIZED_NOT_VALID_TOKEN.message,
          statusCodesEnum.UNAUTHORIZED,
          UNAUTHORIZED_NOT_VALID_TOKEN.code)
        );
      }

      req.user = tokens.user;

      next();

    } catch (e) {
      next(e);
    }
  },
}
