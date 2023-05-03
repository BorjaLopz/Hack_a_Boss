const Teams = require("../repository/teams")
const repositoryFactory = (req, res, next) => {
  const teams = new Teams(connection);
  req.repositories.teams = teams;
  next();
};

module.exports = { repositoryFactory };
