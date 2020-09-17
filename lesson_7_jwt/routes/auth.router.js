const {Router} = require('express');
const authRouter = Router();

const {authController} = require('../controllers');
const {
  userMiddleware: {checkIsUserPresent, checkHashUserPassword}
} = require('../middlewares');

authRouter.post('/', checkIsUserPresent, checkHashUserPassword, authController.login);

module.exports = authRouter;
