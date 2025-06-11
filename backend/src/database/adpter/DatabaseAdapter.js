class DatabaseAdapter {
  constructor(type, config) {
    this.type = type;
    this.config = config;
  }

  async connect() {
    throw new Error("Method connect must be implemented");
  }

  async find(collection, query = {}) {
    throw new Error("Method find must be implemented");
  }

  async findOne(collection, query) {
    throw new Error("Method findOne must be implemented");
  }

  async findById(collection, id) {
    throw new Error("Method findById must be implemented");
  }

  async create(collection, data) {
    throw new Error("Method create must be implemented");
  }

  async update(collection, id, data) {
    throw new Error("Method update must be implemented");
  }

  async delete(collection, id) {
    throw new Error("Method delete must be implemented");
  }

  async findOneAndUpdate(collection, query, data, options = {}) {
    throw new Error("Method findOneAndUpdate must be implemented");
  }
}

module.exports = DatabaseAdapter;
