class UserRepository {
  constructor(connection) {
    this.connection = connection;
  }

  async createUser(user) {
    try {
      const { email, password, name, age } = user;
      const createUserResult = await this.connection.execute(
        "INSERT INTO users(email, password, name, age) VALUES(?, ?, ? ,?)",
        [email, password, name, age]
      );
      return createUserResult;
    } catch (e) {
      throw e;
    }
  }

  async getUserByEmail(email) {
    try {
      const [rows] = await this.connection.execute(
        "SELECT * FROM users WHERE email=?",
        [email]
      );
      const [user] = rows;
      return user;
    } catch (e) {
      throw e;
    }
  }

  async createProfile(profile) {
    try {
      const createUserResult = await this.connection.execute(
        "INSERT INTO PROFILE (image, bank_account, user_id) VALUES (?, ?, ?)",
        [image.path, bankAccount, userId]
      );
      return createUserResult;
    } catch (e) {
      throw e;
    }
  }
}

module.exports = UserRepository;
