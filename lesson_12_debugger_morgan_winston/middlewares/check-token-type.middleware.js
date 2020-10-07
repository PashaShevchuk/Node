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


module.exports = (tokenType) => async (req, res, next) => {
  try {
    let secretWord = '';
    let keyName = '';

    switch (tokenType) {
      case 'access':
        secretWord = ACCESS_TOKEN_SECRET;
        keyName = 'access_token';
        break;

      case 'refresh':
        secretWord = REFRESH_TOKEN_SECRET;
        keyName = 'refresh_token';
        break;

      default:
        return next(new CustomError(
          UNAUTHORIZED_NOT_VALID_TOKEN.message,
          statusCodesEnum.UNAUTHORIZED,
          UNAUTHORIZED_NOT_VALID_TOKEN.code)
        );
    }

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

    jwt.verify(token, secretWord, (err) => {
      if (err) {
        return next(new CustomError(
          UNAUTHORIZED_NOT_VALID_TOKEN.message,
          statusCodesEnum.UNAUTHORIZED,
          UNAUTHORIZED_NOT_VALID_TOKEN.code)
        );
      }
    });

    const tokenWithUser = await getByParams({ [keyName]: token });

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
}
