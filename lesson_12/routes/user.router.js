const { Router } = require('express');

const {
  userController: {getAll, createOne}
} = require('../controllers');

const userRouter = Router();


// взяти всіх користувачів
userRouter.get('/', getAll);

// створити користувача
userRouter.post('/', createOne);


module.exports = userRouter;
