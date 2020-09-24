const Joi = require('joi');

const { EMAIL, PASSWORD } = require('../configs/regexp.enum');


module.exports = Joi.object().keys({
  first_name: Joi.string().trim().alphanum().min(2).max(255).required(),

  last_name: Joi.string().trim().alphanum().min(2).max(255).required(),

  email: Joi.string().trim().regex(EMAIL).max(50).required(),

  login: Joi.string().trim().alphanum().min(2).max(50).required(),

  password: Joi.string().trim().regex(PASSWORD).min(8).required(),
});
