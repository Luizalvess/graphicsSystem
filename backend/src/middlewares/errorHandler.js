// src/middlewares/errorHandler.js

module.exports = (err, req, res, next) => {
  console.error(err.stack); // Log da pilha completa do erro

  const status = err.statusCode || 500;
  const message = err.message || "Erro inesperado no servidor";
  const details = err.details || null;

  // Logar informações relevantes para análise
  console.log(`[${status}] ${message}`);

  res.status(status).json({
    message,
    details,
  });
};
