const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const path = require("path"); // Importação do módulo path
const authPermissionsRoutes = require("./src/routes/AuthPermissionsRoutes");

// Carregando variáveis de ambiente
dotenv.config();

const app = express();

// Middlewares globais
app.use(express.json());
app.use(
  cors({
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(helmet());

// Registrar a rota de permissões
app.use(authPermissionsRoutes);

// Conexão ao banco de dados
require("./src/database/connection");

// Servir arquivos estáticos da pasta "uploads"
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Rotas
const AuthRegisterRoutes = require("./src/routes/AuthRegisterUserRoutes");
const LoginRoutes = require("./src/routes/AuthLoginRoutes");
app.use(AuthRegisterRoutes);
app.use(LoginRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

// Porta do servidor
const PORT = process.env.PORT || 3000;

// Inicializando o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta: ${PORT}`);
});
