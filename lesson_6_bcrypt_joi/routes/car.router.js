const {Router} = require('express');
const {
  carMiddleware: {checkCarValidity, isCarInDB, checkUpdateCarValidity}
} = require('../middlewares');

const {
  carController: {fetchAll, findOneCar, createOneCar, updateOneCar, deleteOneCar}
} = require('../controllers');
const carRouter = Router();


carRouter.get('/', fetchAll);                                       // взяти всі машинки
carRouter.get('/:id', isCarInDB, findOneCar);                       // взяти одину машинку
carRouter.post('/', checkCarValidity, createOneCar);                // створити машинку
carRouter.patch('/:id', isCarInDB, checkUpdateCarValidity, updateOneCar); // оновити машинку
carRouter.delete('/:id', isCarInDB, deleteOneCar);                  // видалити машинку

module.exports = carRouter;
