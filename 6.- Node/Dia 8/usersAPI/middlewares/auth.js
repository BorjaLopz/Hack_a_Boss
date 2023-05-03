const crypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const hashPassword = async (req, res, next) => {
    req.body.password = await crypt.hash(req.body.password, parseInt(process.env.SALT_ROUNDS));
    next();
}

const secure = async(req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedData = jwt.verify(token, process.env.JWT_SECRET)
        req.userData = decodedData;
        next();
    } catch(e) {
        res.status(403).send({error: e.message})
    }
}

module.exports = { hashPassword, secure }