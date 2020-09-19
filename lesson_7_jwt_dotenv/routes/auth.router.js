const { Router } = require('express');
const { authController } = require('../controllers');
const {
  userMiddleware: { checkIsUserPresent, checkHashUserPassword }
} = require('../middlewares');

const authRouter = Router();


authRouter.post('/', checkIsUserPresent, checkHashUserPassword, authController.login);

module.exports = authRouter;
