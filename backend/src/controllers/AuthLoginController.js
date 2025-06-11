const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = class AuthLoginController {
  // Método para login
  static async login(req, res) {
    const { login, password } = req.body;

    console.log("Dados recebidos para login:", { login, password });

    // Validar entrada de dados
    if (!login || !password) {
      return res.status(422).json({
        message: "Campos obrigatórios: login (ou email) e senha.",
      });
    }

    try {
      // Verificar se o login é um email válido
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(login);

      // Buscar usuário por email ou login
      const user = isEmail
        ? await User.findOne({ email: login })
        : await User.findOne({ login: login });

      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado!" });
      }

      // Verificar senha
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(422).json({ message: "Senha inválida" });
      }

      // Gerar token JWT
      const secret = process.env.SECRET;
      const token = jwt.sign({ id: user.id }, secret, { expiresIn: "1h" });

      // Retornar token e dados do usuário (sem senha)
      return res.status(200).json({
        message: "Autenticação realizada com sucesso",
        user: {
          id: user.id,
          name: user.name,
          cpf: user.cpf,
          rg: user.rg,
          phone: user.phone,
          mobile: user.mobile,
          email: user.email,
          login: user.login,
          role: user.role,
          accessLevel: user.accessLevel,
          image: user.image
            ? `${process.env.BASE_URL}/uploads/${user.image}`
            : null,
        },
        token,
      });
    } catch (error) {
      console.error("Erro no login:", error);
      return res.status(500).json({
        message: "Aconteceu um erro ao realizar a autenticação!",
      });
    }
  }

  // Obter todos os usuários
  static async getAllUsers(req, res) {
    try {
      const users = await User.find({});
      const usersWithoutPassword = users.map((user) => user.toJSON());
      res.status(200).json(usersWithoutPassword);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar usuários", error });
    }
  }

  // Obter um usuário por ID
  static async getUserById(req, res) {
    const id = req.params.id;

    try {
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado!" });
      }
      res.status(200).json(user.toJSON());
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar usuário", error });
    }
  }

  // Baixar imagem (exemplo)
  static async downloadImage(req, res) {
    const nameImage = req.header["image"];
    // Implementar lógica de download de imagem se necessário
    res.status(501).json({ message: "Funcionalidade não implementada" });
  }
};
