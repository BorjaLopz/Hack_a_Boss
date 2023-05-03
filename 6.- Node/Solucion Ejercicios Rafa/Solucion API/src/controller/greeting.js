const greetingController = (req, res) => {
    res.send(`Hello ${req.params.name}`)
}

module.exports = { greetingController }