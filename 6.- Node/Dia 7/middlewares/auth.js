const jwt = require("jsonwebtoken");
const crypt = require("bcrypt");

/* MIDDLEWARE PARA HASHEAR LA CONTRASEÑA */
const hashPassword = async (req, res, next) => {
  req.body.password = await crypt.hash(
    req.body.password,
    parseInt(process.env.SALT_ROUNDS)
  );
  next();
};

/* MIDDLEWARE PARA SECURALIZAR */
const secure = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    req.userData = decodedData;
    next();
  } catch (e) {
    res.status(403).send("Token not valid");
  }
};

module.exports = { hashPassword, secure };
