const Joi = require("joi");
const userSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
  name: Joi.string().required(),
  age: number().required()
});

module.exports = { userSchema };
