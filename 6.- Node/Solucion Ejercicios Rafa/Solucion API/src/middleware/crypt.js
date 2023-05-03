const reversePassword = (req, res, next) => {
    const { password } = req.body
    req.body.password = password.split('').reverse().join('');
    next();
}

module.exports = { reversePassword }