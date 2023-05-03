const UsersRepository = require("./repositories/products");

class UsersFactory {
  constructor(connection) {
    this.users = new UsersRepository(connection);
  }

  build(repository) {
    switch (repository) {
      case "users":
        return this.users;
      default:
        return this.users;
    }
  }
}
module.exports = UsersFactory;