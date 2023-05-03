const { userSchema } = require("../models/user");

const validateUser = (req, res, next) => {
  const { error, value } = schema.validate(req.body);
  if (error) {
    res.status(500).send(error);
    next();
  }
};

module.exports = { validateUser };
