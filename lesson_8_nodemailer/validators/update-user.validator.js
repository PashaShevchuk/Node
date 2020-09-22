const Joi = require('joi');

const { EMAIL } = require('../config/regexp.enum');


module.exports = Joi.object().keys({
  first_name: Joi.string().trim().alphanum().min(2).max(255),

  last_name: Joi.string().trim().alphanum().min(2).max(255),

  email: Joi.string().trim().regex(EMAIL).max(50),

  login: Joi.string().trim().alphanum().min(2).max(50),

  password: Joi.string().trim().min(8),
});
