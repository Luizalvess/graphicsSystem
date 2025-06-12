const db = require("../database/connection");
const { isCpfValid } = require("../utils/validators");

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

  // Validações CORRIGIDAS
  validate() {
    const errors = [];

    if (!this.name || this.name.trim().length === 0) {
      errors.push("O nome é obrigatório");
    }

    if (!this.email || !this._isValidEmail(this.email)) {
      errors.push("Forneça um e-mail válido");
    }

    // VALIDAÇÃO DE CPF CORRIGIDA
    if (!this.cpf) {
      errors.push("O CPF é obrigatório");
    } else {
      // Remover formatação antes de validar
      const cleanCpf = this.cpf.replace(/\D/g, "");
      if (!isCpfValid(cleanCpf)) {
        errors.push("CPF inválido");
      }
    }

    if (!this.rg || this.rg.trim().length === 0) {
      errors.push("O RG é obrigatório");
    }

    // VALIDAÇÃO DE TELEFONE MAIS FLEXÍVEL
    if (!this.phone) {
      errors.push("O telefone é obrigatório");
    } else if (!this._isValidPhone(this.phone)) {
      console.log("Telefone recebido:", this.phone);
      // Não bloquear por enquanto, apenas avisar
      console.warn("Formato de telefone não padrão:", this.phone);
    }

    // VALIDAÇÃO DE CELULAR MAIS FLEXÍVEL
    if (!this.mobile) {
      errors.push("O celular é obrigatório");
    } else if (!this._isValidMobile(this.mobile)) {
      console.log("Celular recebido:", this.mobile);
      // Não bloquear por enquanto, apenas avisar
      console.warn("Formato de celular não padrão:", this.mobile);
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

  // VALIDAÇÃO DE TELEFONE MAIS FLEXÍVEL
  _isValidPhone(phone) {
    // Aceitar vários formatos:
    // (11) 1234-5678
    // (11) 12345-6789
    // 11 1234-5678
    // 1112345678
    const phoneRegex = /^(\(?\d{2}\)?\s?)?\d{4,5}-?\d{4}$/;
    return phoneRegex.test(phone);
  }

  // VALIDAÇÃO DE CELULAR MAIS FLEXÍVEL
  _isValidMobile(mobile) {
    // Aceitar vários formatos:
    // (11) 987654321
    // (11) 98765-4321
    // 11987654321
    // 11 98765-4321
    const mobileRegex = /^(\(?\d{2}\)?\s?)?\d{4,5}-?\d{4}$/;
    return mobileRegex.test(mobile);
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
    console.log("=== DADOS RECEBIDOS PARA VALIDAÇÃO ===");
    console.log("CPF:", data.cpf);
    console.log("Mobile:", data.mobile);
    console.log("Phone:", data.phone);

    const user = new User(data);
    const errors = user.validate();

    if (errors.length > 0) {
      console.log("=== ERROS DE VALIDAÇÃO ===");
      console.log("Erros:", errors);
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
