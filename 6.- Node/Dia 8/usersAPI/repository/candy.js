class CandyRepository {
  constructor(connection) {
    this.connection = connection;
  }

  async createCandy(user) {
    try {
      const { name, image} = user;
      console.log(name)
      const createCandyResult = await this.connection.execute(
        "INSERT INTO candy (name, filename) VALUES(?, ?)",
        [name, image]
      );
      return createCandyResult;
    } catch (e) {
      throw e;
    }
  }
}

module.exports = CandyRepository;
