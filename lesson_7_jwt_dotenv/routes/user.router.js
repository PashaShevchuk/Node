const { Router } = require('express');

const {
  userMiddleware: { checkUserValidity, isUserInDbById, checkUpdateUserValidity }
} = require('../middlewares');
const {
  userController: { fetchAll, findOne, createOne, updateOne, deleteOne }
} = require('../controllers');

const userRouter = Router();


userRouter.get('/', fetchAll);                                                // взяти всіх користувачів
userRouter.get('/:id', isUserInDbById, findOne);                              // взяти одного користувача
userRouter.post('/', checkUserValidity, createOne);                           // створити користувача
userRouter.patch('/:id', isUserInDbById, checkUpdateUserValidity, updateOne); // оновити користувача
userRouter.delete('/:id', isUserInDbById, deleteOne);                         // видалити користувача

module.exports = userRouter;
