let cars = [
    {id: 1, producer: "subaru", model: "wrx", year: 2010},
    {id: 2, producer: "porsche", model: "911", year: 2020},
    {id: 3, producer: "bmw", model: "315", year: 2014},
    {id: 4, producer: "audi", model: "a4", year: 2016},
    {id: 5, producer: "mercedes", model: "e63", year: 2017},
    {id: 6, producer: "lada", model: "2101", year: 1989},
];
//______________________________________________________________________________________________________________________

module.exports = {
    getAll: () => cars,

    getById: (id) => {
        const car = cars.find(car => car.id === id);
        if (!car) {
            return {err: 'Car not found'};
        }
        return car;
    },

    create: (data) => {
        const newId = cars[cars.length - 1].id + 1;
        const createdCar = {id: newId, producer: data.producer, model: data.model, year: data.year};
        cars.push(createdCar);
        return createdCar;
    },

    update: (id, data) => {
        const index = cars.findIndex(car => car.id === id);
        if (index === -1) {
            return {err: 'Unable to update car, because it was not found'};
        }
        const updatedCar = {id: id, producer: data.producer, model: data.model, year: data.year};
        cars.splice(index, 1, updatedCar);
        return cars;
    },

    delete: (id) => {
        const index = cars.findIndex(car => car.id === id);
        if (index === -1) {
            return {err: 'Unable to delete car, because it was not found'};
        }
        cars.splice(index, 1);
        return cars;
    },
};
