class UsersRepository {
  constructor(connection) {
    this.connection = connection;
  }

  async getAllUsers() {
    try {
      const [rows, fields] = await this.connection.query(
        "SELECT * FROM usuarios"
      );
      return rows;
    } catch (e) {
      throw e;
    }
  }

  async createUser(user) {
    try {
      const { name, password } = user;
      const result = await this.connection.execute(
        `INSERT INTO usuarios(name, password) VALUES (?, ?)`,
        [name, password]
      );
    } catch (e) {
      throw e;
    }
  }

  async getUserById(id) {
    try {
      const [results, fields] = await this.connection.execute(
        "SELECT * FROM usuarios WHERE id = ?",
        [id]
      );
      return results;
    } catch (e) {
      throw e;
    }
  }

  async deleteUser(id) {
    try {
      console.log(id);
      const results = await this.connection.execute(
        "DELETE FROM usuarios WHERE id = ?",
        [id]
      );
      return results;
    } catch (e) {
      throw e;
    }
  }

  async updateUserPassword(id, password) {
    try {
      const result = await this.connection.execute(
        `UPDATE usuarios SET password = ? WHERE id= ?`,
        [password, id]
      );
      return result;
    } catch (e) {
      throw e;
    }
  }
}

module.exports = UsersRepository;
