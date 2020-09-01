const {Router} = require('express');
const carRouter = Router();
const {carMiddleware} = require('../middlewares');
const {carController} = require('../controllers');


carRouter.get('/', carController.fetchAll);                                // взяти всі машинки
// carRouter.get('/:id', carController.fetchAll);                                // взяти одину машинку
carRouter.post('/', carMiddleware.checkCarValidity, carController.create); // створити машинку

// carRouter.get('/:id', carController.getCarById);                                  // взяти одину машинку
// carRouter.patch('/:id', carMiddleware.checkCarValidity, carController.updateCar); // оновити машинку
// carRouter.delete('/:id', carController.deleteCar);                                // видалити машинку

module.exports = carRouter;
