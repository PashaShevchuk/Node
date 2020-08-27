const {carService} = require('../services');

module.exports = {
    getAllCars: (req, res) => {
        const cars = carService.getAll();
        res.json(cars);
    },
    getCarById: (req, res) => {
        const car = carService.getById(+req.params.id);
        res.json(car);
    },
    createCar: (req, res) => {
        const createdCar = carService.create(req.body);
        res.json(createdCar);
    },
    updateCar: (req, res) => {
        const updatedCar = carService.update(+req.params.id, req.body);
        res.json(updatedCar);
    },
    deleteCar: (req, res) => {
        const cars = carService.delete(+req.params.id);
        res.json(cars);
    },
};
