class UserRepository {
    constructor(connection) {
        this.connection = connection;
        this.tableName = 'user'
    }

    async create(user) {
        try {
            const { name, email, password } = user;
            const result = await this.connection.execute(
                `INSERT INTO ${this.tableName}(name, password, email) VALUES(?,?,?)`,
                [name, password, email]
            );
            return result;
        } catch(e) {
            throw e;
        }
    }
    async updateUserEmail(id, email) {
        try {
            const results = await this.connection.execute(
                `UPDATE ${this.tableName} set email=? WHERE iduser=?`,
                [email, id]
            );
            return results;
        } catch(e) {
            throw e;
        }
    }
    async deleteUser(id) {
        try {
            const results = await this.connection.execute(
                `DELETE FROM ${this.tableName} WHERE iduser=?`,
                [id]
            );
            return results;
        } catch(e) {
            throw e;
        }
    }
    async getUserById(id) {
        try {
            const [results] = await this.connection.execute(
                `SELECT * FROM ${this.tableName} WHERE iduser=?`,
                [id]
            );
            return results;
        } catch(e) {
            throw e;
        }
    }
}

module.exports = UserRepository