const ProductsRepository = require('./repositories/products');
const UserRepository = require('./repositories/user');
class RepositoryFactory {
    constructor(connection) {
        this.products = new ProductsRepository(connection);
        this.user = new UserRepository(connection);
    }
    build(repository) {
        switch(repository) {
            case 'products':
                return this.products;
            case 'user':
                return this.user;
            default:
                return this.products;
        }
    }
}

module.exports = RepositoryFactory;