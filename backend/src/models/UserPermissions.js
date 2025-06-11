const db = require("../database/connection");

class UserPermissions {
  constructor(data) {
    this.id = data.id;
    this.userId = data.userId;
    this.userType = data.userType;
    this.accessLevel = data.accessLevel;
    this.role = data.role;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }

  // Validações
  validate() {
    const errors = [];

    if (!this.userId) {
      errors.push("O ID do usuário é obrigatório");
    }

    const validUserTypes = ["Visitante", "Administrador", "Usuario"];
    if (!this.userType || !validUserTypes.includes(this.userType)) {
      errors.push("Tipo de usuário inválido");
    }

    const validAccessLevels = [1, 2, 3, 4];
    if (
      !this.accessLevel ||
      !validAccessLevels.includes(Number(this.accessLevel))
    ) {
      errors.push("Nível de acesso inválido");
    }

    const validRoles = [
      "Visitante",
      "Admin",
      "Gerente",
      "Laser",
      "Acabamento",
      "Financeiro",
      "Vendedor(a)",
      "Diretor(a) Comercial",
      "Diretor(a) Financeiro",
    ];
    if (!this.role || !validRoles.includes(this.role)) {
      errors.push("Cargo inválido");
    }

    return errors;
  }

  // Métodos estáticos para operações no banco
  static async find(query = {}) {
    const permissions = await db.find("userPermissions", query);
    return permissions.map(
      (permissionData) => new UserPermissions(permissionData)
    );
  }

  static async findOne(query) {
    const permissionData = await db.findOne("userPermissions", query);
    return permissionData ? new UserPermissions(permissionData) : null;
  }

  static async findById(id) {
    const permissionData = await db.findById("userPermissions", id);
    return permissionData ? new UserPermissions(permissionData) : null;
  }

  static async create(data) {
    const permission = new UserPermissions(data);
    const errors = permission.validate();

    if (errors.length > 0) {
      throw new Error(`Validation errors: ${errors.join(", ")}`);
    }

    const savedPermission = await db.create("userPermissions", permission);
    return new UserPermissions(savedPermission);
  }

  async save() {
    const errors = this.validate();

    if (errors.length > 0) {
      throw new Error(`Validation errors: ${errors.join(", ")}`);
    }

    if (this.id) {
      const updatedPermission = await db.update(
        "userPermissions",
        this.id,
        this
      );
      return new UserPermissions(updatedPermission);
    } else {
      const savedPermission = await db.create("userPermissions", this);
      return new UserPermissions(savedPermission);
    }
  }

  static async update(id, data) {
    const updatedPermission = await db.update("userPermissions", id, data);
    return new UserPermissions(updatedPermission);
  }

  static async delete(id) {
    return await db.delete("userPermissions", id);
  }

  static async findOneAndUpdate(query, data, options = {}) {
    const updatedPermission = await db.findOneAndUpdate(
      "userPermissions",
      query,
      data,
      options
    );
    return updatedPermission ? new UserPermissions(updatedPermission) : null;
  }
}

module.exports = UserPermissions;
