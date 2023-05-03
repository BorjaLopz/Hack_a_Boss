class ProductsRepository {
  constructor(connection) {
    this.connection = connection;
  }

  async getAllProducts() {
    try {
      const [rows, fields] = await this.connection.query(
        "SELECT * FROM products"
      );
      return rows;
    } catch (e) {
      throw e;
    }
  }
}

module.exports = ProductsRepository;
