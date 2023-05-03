const amIAdult = (req, res, next) => {
  if (req.params.age <= 18) res.status(500).send("No eres mayor de edad");
  else next();
};

const amIOld = (req, res, next) => {
  if (req.params.age >= 80) res.status(500).send("Eres un viejo pellejo");
  else next();
};

module.exports = { amIAdult, amIOld };
