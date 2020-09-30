const { Router } = require('express');

const {
  userService: {getAll, create, deleteById}
} = require('../services');

const userRouter = Router();


// взяти всіх користувачів
userRouter.get('/', getAll);

// створити користувача
userRouter.post('/', create);


module.exports = userRouter;
