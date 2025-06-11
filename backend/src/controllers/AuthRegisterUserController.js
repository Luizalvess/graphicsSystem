const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = class AuthRegisterUserController {
  static async init(req, res) {
    res.send({ message: "Bem-vindo à nossa API!" });
  }

  static async registerUser(req, res) {
    const {
      name,
      email,
      userType,
      accessLevel,
      role,
      cpf,
      rg,
      phone,
      mobile,
      login,
      password,
      confirmPassword,
    } = req.body;

    let image = "";
    if (req.file) {
      image = req.file.filename;
    }

    // Validação dos campos
    if (!name) {
      return res.status(422).json({ message: "O nome é obrigatório" });
    }
    if (!email) {
      return res.status(422).json({ message: "O email é obrigatório" });
    }
    if (!role) {
      return res.status(422).json({ message: "Escolha o cargo" });
    }
    if (!cpf) {
      return res.status(422).json({ message: "O CPF é obrigatório" });
    }
    if (!rg) {
      return res.status(422).json({ message: "O RG é obrigatório" });
    }
    if (!phone) {
      return res.status(422).json({ message: "O telefone é obrigatório" });
    }
    if (!mobile) {
      return res.status(422).json({ message: "O celular é obrigatório" });
    }
    if (!userType) {
      return res.status(422).json({ message: "Escolha o tipo de usuário" });
    }
    if (!accessLevel) {
      return res.status(422).json({ message: "Defina o nível de Acesso" });
    }
    if (!login) {
      return res.status(422).json({ message: "Escolha nome de usuário" });
    }
    if (!password) {
      return res.status(422).json({ message: "Digite uma senha" });
    }
    if (password !== confirmPassword) {
      return res
        .status(422)
        .json({ message: "A senha digitada está diferente" });
    }

    try {
      // Verifica se já existe um usuário com email, login, cpf, rg, phone ou mobile
      const existingUsers = await User.find({});
      const userExist = existingUsers.find(
        (user) =>
          user.email === email ||
          user.login === login ||
          user.cpf === cpf ||
          user.rg === rg ||
          user.phone === phone ||
          user.mobile === mobile
      );

      if (userExist) {
        return res.status(422).json({ message: "Usuário já cadastrado!" });
      }

      const hash = await bcrypt.genSalt(20);
      const passwordHash = await bcrypt.hash(password, hash);

      const userData = {
        name,
        email,
        userType,
        accessLevel,
        role,
        cpf,
        rg,
        phone,
        mobile,
        image,
        login,
        password: passwordHash,
      };

      const user = await User.create(userData);

      res.status(201).json({
        message: "Usuário cadastrado com sucesso!",
        user: user.toJSON(), // Remove a senha da resposta
      });
    } catch (error) {
      console.error("Erro ao salvar o usuário:", error);
      res.status(500).json({
        message:
          "Ocorreu um erro ao tentar cadastrar o usuário, tente mais tarde!",
        error: error.message || error,
      });
    }
  }
};
