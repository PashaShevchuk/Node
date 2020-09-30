const { Router } = require('express');

const {
  user1Controller: { getAll, createOne }
} = require('../controllers');

const user1Router = Router();

// взяти всіх користувачів
user1Router.get('/', getAll);

// створити користувача
user1Router.post('/', createOne);


module.exports = user1Router;
