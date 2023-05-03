const toUpperCaseMiddleware = (req, res, next) => {
    const { name } = req.params;
    const captilizeFirstletter = name.charAt(0).toUpperCase();
    const lowerCaseEndName = name.slice(1).toLowerCase()
    req.params.name = `${captilizeFirstletter}${lowerCaseEndName}`
    next();
}

module.exports = { toUpperCaseMiddleware };