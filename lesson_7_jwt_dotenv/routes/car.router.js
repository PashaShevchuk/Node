const { Router } = require('express');

const {
  carMiddleware: { checkCarValidity, isCarInDB, checkUpdateCarValidity },
  tokenMiddleware: { checkAccessToken }
} = require('../middlewares');
const {
  carController: { fetchAll, findOne, createOne, updateOne, deleteOne }
} = require('../controllers');

const carRouter = Router();


carRouter.get('/', fetchAll);                                                            // взяти всі машинки
carRouter.get('/:id', isCarInDB, findOne);                                               // взяти одину машинку
carRouter.post('/', checkAccessToken, checkCarValidity, createOne);                      // створити машинку
carRouter.patch('/:id', checkAccessToken, isCarInDB, checkUpdateCarValidity, updateOne); // оновити машинку
carRouter.delete('/:id', checkAccessToken, isCarInDB, deleteOne);                        // видалити машинку

module.exports = carRouter;
