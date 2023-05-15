class CandyRepository {
  constructor(connection) {
    this.connection = connection;
  }

  async createCandy(candy) {
    try {
      const { name, filename } = candy;
      console.log(name);
      console.log(filename);
      const createCandyResult = await this.connection.execute(
        "INSERT INTO candy(name, image) VALUES(?, ?)",
        [name, filename]
      );
      return createCandyResult;
    } catch (e) {
      throw e;
    }
  }

  async getCandy(id) {
    try {
      const [[candies]] = await this.connection.execute(
        "SELECT * FROM candy WHERE ID= ?",
        [id]
      );
      return candies;
    } catch (e) {
      throw e;
    }
  }
}

module.exports = CandyRepository;
