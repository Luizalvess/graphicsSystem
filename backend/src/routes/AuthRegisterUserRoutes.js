const { check } = require("express-validator");
const validateRequest = require("../middlewares/validateRequest");
const router = require("express").Router();
const AuthRegisterUserController = require("../controllers/AuthRegisterUserController");
const multer = require("multer");
const path = require("path");

// Configuração do multer (igual no seu código)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

// Regras de validação para o registro de usuário
const userValidationRules = [
  check("name").notEmpty().withMessage("O nome é obrigatório"),
  check("email").isEmail().withMessage("O email deve ser válido"),
  check("role").notEmpty().withMessage("Escolha o cargo"),
  check("cpf").isLength({ min: 11, max: 11 }).withMessage("CPF inválido"),
  check("rg").notEmpty({ min: 10, max: 10 }).withMessage("O RG é obrigatório"),
  check("phone").notEmpty().withMessage("O telefone é obrigatório"),
  check("mobile").notEmpty().withMessage("O celular é obrigatório"),
  check("userType").notEmpty().withMessage("Escolha o tipo de usuário"),
  check("accessLevel").notEmpty().withMessage("Defina o nível de acesso"),
  check("login").notEmpty().withMessage("Escolha um nome de usuário"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("A senha deve ter no mínimo 6 caracteres"),
  check("confirmPassword")
    .custom((value, { req }) => value === req.body.password)
    .withMessage("A confirmação da senha está diferente"),
];

router.post(
  "/auth/register/user",
  upload.single("image"),
  userValidationRules,
  validateRequest,
  AuthRegisterUserController.registerUser
);

module.exports = router;
