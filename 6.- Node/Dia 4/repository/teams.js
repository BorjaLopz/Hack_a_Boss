class Teams {
  constructor(connection) {
    this.connection = connection;
  }

  async getAllTeams() {
    try {
      const [rows] = await this.connection.query("SELECT * FROM equipos");
      res.send(rows);
    } catch (e) {
      throw e;
    }
  }
}

module.exports = Teams;
