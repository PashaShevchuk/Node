const { Router } = require('express');

const userRouter = Router();

// взяти всіх користувачів
userRouter.get('/', getAll);

// створити користувача
userRouter.post('/', createOne);


module.exports = userRouter;
