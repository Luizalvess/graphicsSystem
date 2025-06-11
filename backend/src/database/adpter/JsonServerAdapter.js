const DatabaseAdapter = require("./DatabaseAdapter");

class JsonServerAdapter extends DatabaseAdapter {
  constructor(config) {
    super("jsonserver", config);
    this.baseURL = config.baseURL || "http://localhost:3001";
    this.isConnected = false;

    // Importar axios
    try {
      const axios = require("axios");
      this.client = axios.create({
        baseURL: this.baseURL,
        timeout: 5000,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("Erro ao importar axios:", error.message);
      throw new Error("Axios não está instalado. Execute: npm install axios");
    }
  }

  async connect(retries = 5, delay = 2000) {
    for (let i = 0; i < retries; i++) {
      try {
        const response = await this.client.get("/db");
        console.log("✅ Conectado ao JSON Server com sucesso!");
        this.isConnected = true;
        return true;
      } catch (error) {
        if (i === retries - 1) {
          // Última tentativa
          if (error.code === "ECONNREFUSED") {
            throw new Error(
              "JSON Server não está rodando. Inicie com: cd mydatabase && npm run dev"
            );
          }
          throw error;
        }

        console.log(
          `⏳ Tentativa ${i + 1}/${retries} - Aguardando JSON Server...`
        );
        await this._sleep(delay);
      }
    }
  }

  async _ensureConnection() {
    if (!this.isConnected) {
      try {
        await this.connect(3, 1000);
      } catch (error) {
        console.warn("⚠️ Operação realizada sem conexão com o banco");
        throw error;
      }
    }
  }

  _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async find(collection, query = {}) {
    try {
      await this._ensureConnection();
      const params = this._buildQueryParams(query);
      const response = await this.client.get(`/${collection}`, { params });
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return [];
      }
      throw new Error(`Erro ao buscar ${collection}: ${error.message}`);
    }
  }

  async findOne(collection, query) {
    try {
      await this._ensureConnection();
      const params = this._buildQueryParams(query);
      const response = await this.client.get(`/${collection}`, { params });
      return response.data[0] || null;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return null;
      }
      throw new Error(`Erro ao buscar um ${collection}: ${error.message}`);
    }
  }

  async findById(collection, id) {
    try {
      await this._ensureConnection();
      const response = await this.client.get(`/${collection}/${id}`);
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return null;
      }
      throw new Error(`Erro ao buscar ${collection} por ID: ${error.message}`);
    }
  }

  async create(collection, data) {
    try {
      await this._ensureConnection();
      if (!data.id) {
        data.id = this._generateId();
      }
      data.createdAt = new Date().toISOString();
      data.updatedAt = new Date().toISOString();

      const response = await this.client.post(`/${collection}`, data);
      return response.data;
    } catch (error) {
      throw new Error(`Erro ao criar ${collection}: ${error.message}`);
    }
  }

  async update(collection, id, data) {
    try {
      await this._ensureConnection();
      data.updatedAt = new Date().toISOString();
      const response = await this.client.patch(`/${collection}/${id}`, data);
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        throw new Error(`${collection} com ID ${id} não encontrado`);
      }
      throw new Error(`Erro ao atualizar ${collection}: ${error.message}`);
    }
  }

  async delete(collection, id) {
    try {
      await this._ensureConnection();
      await this.client.delete(`/${collection}/${id}`);
      return { id, deleted: true };
    } catch (error) {
      if (error.response && error.response.status === 404) {
        throw new Error(`${collection} com ID ${id} não encontrado`);
      }
      throw new Error(`Erro ao deletar ${collection}: ${error.message}`);
    }
  }

  async findOneAndUpdate(collection, query, data, options = {}) {
    try {
      await this._ensureConnection();
      const existing = await this.findOne(collection, query);
      if (!existing) {
        if (options.upsert) {
          const newData = { ...query, ...data };
          return await this.create(collection, newData);
        }
        return null;
      }

      const updatedData = { ...data };
      return await this.update(collection, existing.id, updatedData);
    } catch (error) {
      throw new Error(
        `Erro ao encontrar e atualizar ${collection}: ${error.message}`
      );
    }
  }

  _buildQueryParams(query) {
    const params = {};

    Object.keys(query).forEach((key) => {
      if (query[key] !== undefined && query[key] !== null) {
        params[key] = query[key];
      }
    });

    return params;
  }

  _generateId() {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
  }
}

module.exports = JsonServerAdapter;
