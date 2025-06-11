const db = require("../database/connection");
const { isCpfValid } = require("../utils/validatrors");

class User {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.userType = data.userType;
    this.accessLevel = data.accessLevel;
    this.role = data.role;
    this.cpf = data.cpf;
    this.rg = data.rg;
    this.phone = data.phone;
    this.mobile = data.mobile;
    this.image = data.image || "";
    this.login = data.login;
    this.password = data.password;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }

  // Validações
  validate() {
    const errors = [];

    if (!this.name || this.name.trim().length === 0) {
      errors.push("O nome é obrigatório");
    }

    if (!this.email || !this._isValidEmail(this.email)) {
      errors.push("Forneça um e-mail válido");
    }

    if (!this.cpf || !isCpfValid(this.cpf)) {
      errors.push("CPF inválido");
    }

    if (!this.rg || this.rg.trim().length === 0) {
      errors.push("O RG é obrigatório");
    }

    if (!this.phone || !this._isValidPhone(this.phone)) {
      errors.push("Forneça um telefone válido");
    }

    if (!this.mobile || !this._isValidMobile(this.mobile)) {
      errors.push("Forneça um celular válido");
    }

    if (!this.userType) {
      errors.push("O tipo de usuário é obrigatório");
    }

    if (!this.accessLevel) {
      errors.push("O nível de acesso é obrigatório");
    }

    if (!this.role) {
      errors.push("O cargo é obrigatório");
    }

    if (!this.login || this.login.trim().length === 0) {
      errors.push("O nome de usuário é obrigatório");
    }

    if (!this.password || this.password.length < 6) {
      errors.push("A senha deve ter no mínimo 6 caracteres");
    }

    return errors;
  }

  _isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  _isValidPhone(phone) {
    return /^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(phone);
  }

  _isValidMobile(mobile) {
    return /^\(\d{2}\)\s\d{9}$/.test(mobile);
  }

  // Métodos estáticos para operações no banco
  static async find(query = {}) {
    const users = await db.find("users", query);
    return users.map((userData) => new User(userData));
  }

  static async findOne(query) {
    const userData = await db.findOne("users", query);
    return userData ? new User(userData) : null;
  }

  static async findById(id) {
    const userData = await db.findById("users", id);
    return userData ? new User(userData) : null;
  }

  static async create(data) {
    const user = new User(data);
    const errors = user.validate();

    if (errors.length > 0) {
      throw new Error(`Validation errors: ${errors.join(", ")}`);
    }

    const savedUser = await db.create("users", user);
    return new User(savedUser);
  }

  async save() {
    const errors = this.validate();

    if (errors.length > 0) {
      throw new Error(`Validation errors: ${errors.join(", ")}`);
    }

    if (this.id) {
      const updatedUser = await db.update("users", this.id, this);
      return new User(updatedUser);
    } else {
      const savedUser = await db.create("users", this);
      return new User(savedUser);
    }
  }

  static async update(id, data) {
    const updatedUser = await db.update("users", id, data);
    return new User(updatedUser);
  }

  static async delete(id) {
    return await db.delete("users", id);
  }

  // Método para remover senha dos dados retornados
  toJSON() {
    const { password, ...userWithoutPassword } = this;
    return userWithoutPassword;
  }
}

module.exports = User;
