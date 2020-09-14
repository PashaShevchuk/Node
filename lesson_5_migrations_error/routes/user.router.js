const {Router} = require('express');
const {
  userMiddleware: {checkUserValidity, isUserInDB}
} = require('../middlewares');
const {
  userController: {fetchAll, findOneUser, createOneUser, updateOneUser, deleteOneUser}
} = require('../controllers');

const userRouter = Router();

userRouter.get('/', fetchAll);                                          // взяти всіх користувачів
userRouter.get('/:id', isUserInDB, findOneUser);                        // взяти одного користувача
userRouter.post('/', checkUserValidity, createOneUser);                 // створити користувача
userRouter.patch('/:id', isUserInDB, checkUserValidity, updateOneUser); // оновити користувача
userRouter.delete('/:id', isUserInDB, deleteOneUser);                   // видалити користувача

module.exports = userRouter;
