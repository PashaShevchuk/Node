//______________________________________________________________________________________________________________________
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
    getById: 'car by id',
    create: 'create',
    update: 'update',
    delete: 'delete',
};


