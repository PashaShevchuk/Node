const {Router} = require('express');
const {
  userMiddleware: {checkUserValidity, isUserInDbById, checkUpdateUserValidity}
} = require('../middlewares');
const {
  userController: {fetchAll, findOneUser, createOneUser, updateOneUser, deleteOneUser}
} = require('../controllers');

const userRouter = Router();

userRouter.get('/', fetchAll);                                                    // взяти всіх користувачів
userRouter.get('/:id', isUserInDbById, findOneUser);                              // взяти одного користувача
userRouter.post('/', checkUserValidity, createOneUser);                           // створити користувача
userRouter.patch('/:id', isUserInDbById, checkUpdateUserValidity, updateOneUser); // оновити користувача
userRouter.delete('/:id', isUserInDbById, deleteOneUser);                         // видалити користувача

module.exports = userRouter;
