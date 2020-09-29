const { Router } = require('express');

const {
  userMiddleware: { checkUserValidity, isUserInDbById, checkUpdateUserValidity, checkIsUserCreatedInDb },
  fileMiddleware: { checkFileValidity, checkUserPhotoCount }
} = require('../middlewares');
const {
  userController: { fetchAll, findOne, createOne, updateOne, deleteOne }
} = require('../controllers');

const userRouter = Router();


// взяти всіх користувачів
userRouter.get('/', fetchAll);

// взяти одного користувача
userRouter.get('/:id', isUserInDbById, findOne);

// створити користувача
userRouter.post('/', checkUserValidity, checkFileValidity, checkUserPhotoCount, checkIsUserCreatedInDb, createOne);

// оновити користувача
userRouter.patch('/:id', isUserInDbById, checkUpdateUserValidity, checkFileValidity, checkUserPhotoCount, updateOne);

// видалити користувача
userRouter.delete('/:id', isUserInDbById, deleteOne);


module.exports = userRouter;
