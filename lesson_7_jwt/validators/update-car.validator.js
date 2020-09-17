const Joi = require('joi');

const currentYear = new Date().getFullYear();

module.exports = Joi.object().keys({
  model: Joi.string().trim().alphanum().min(2).max(255),
  price: Joi.number().positive().integer(),
  year: Joi.number().integer().min(1885).max(currentYear)
});
