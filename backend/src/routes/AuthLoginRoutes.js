const { check } = require("express-validator");
const validateRequest = require("../middlewares/validateRequest");
const AuthLoginController = require("../controllers/AuthLoginController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = require("express").Router();

const loginValidationRules = [
  check("email").optional().isEmail().withMessage("O email deve ser válido"),
  check("login")
    .optional()
    .notEmpty()
    .withMessage("O login não pode estar vazio"),
  check("password").notEmpty().withMessage("A senha é obrigatória"),
];

// Rota para obter o usuário pelo ID (sem a senha)
router.get("/users/:id", authMiddleware, AuthLoginController.getUserById);

router.post(
  "/auth/login",
  loginValidationRules,
  validateRequest,
  AuthLoginController.login
);

module.exports = router;
