const {Router} = require('express');
const {carMiddleware} = require('../middlewares');
const {carController} = require('../controllers');
const carRouter = Router();


carRouter.get('/', carController.fetchAll);                                    // взяти всі машинки
carRouter.get('/:id', carController.findCar);                                  // взяти одину машинку
carRouter.post('/', carMiddleware.checkCarValidity, carController.create);     // створити машинку
carRouter.patch('/:id', carMiddleware.checkCarValidity, carController.update); // оновити машинку
carRouter.delete('/:id', carController.delete);                                // видалити машинку

module.exports = carRouter;
