const { body, validationResult } = require("express-validator");

const validateUser = [
  body("name").notEmpty().withMessage("O nome é obrigatório"),
  body("email").isEmail().withMessage("Forneça um e-mail válido"),
  body("cpf")
    .matches(/^\d{11}$/)
    .withMessage("CPF deve conter 11 dígitos numéricos"),
  body("rg").notEmpty().withMessage("O RG é obrigatório"),
  body("phone")
    .isMobilePhone("pt-BR")
    .withMessage("Forneça um telefone válido"),
  body("mobile")
    .isMobilePhone("pt-BR")
    .withMessage("Forneça um celular válido"),
  body("userType").notEmpty().withMessage("Escolha o tipo de usuário"),
  body("accessLevel").notEmpty().withMessage("Defina o nível de acesso"),
  body("role").notEmpty().withMessage("Escolha o cargo"),
  body("login").notEmpty().withMessage("Escolha um nome de usuário"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("A senha deve ter no mínimo 6 caracteres"),
  body("confirmPassword").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("A confirmação da senha não coincide com a senha");
    }
    return true;
  }),

  // Middleware para verificar os resultados
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validateUser;
