const ProductsRepository = require('./repositories/products')

class RepositoryFactory {
    constructor(connection) {
        this.products = new ProductsRepository(connection)
    }
    build(repository) {
        switch(repository) {
            case 'products':
                return this.products;
            default:
                return this.products;
        }
    }
}

module.exports = RepositoryFactory;