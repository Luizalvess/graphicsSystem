const JsonServerAdapter = require("./adpter/JsonServerAdapter");

// Configuração do banco de dados
const DB_CONFIG = {
  type: process.env.DB_TYPE || "jsonserver",
  jsonserver: {
    baseURL: process.env.JSON_SERVER_URL || "http://localhost:3001",
  },
};

// Instanciar o adaptador baseado na configuração
let dbAdapter;

try {
  switch (DB_CONFIG.type) {
    case "jsonserver":
      dbAdapter = new JsonServerAdapter(DB_CONFIG.jsonserver);
      break;
    default:
      throw new Error(
        `Tipo de banco de dados não suportado: ${DB_CONFIG.type}`
      );
  }
} catch (error) {
  console.error("Erro ao instanciar adaptador de banco:", error.message);
  process.exit(1);
}

// Conectar ao banco com delay
const connect = async () => {
  try {
    console.log("Aguardando JSON Server inicializar...");
    // Aguardar 3 segundos para o JSON Server estar pronto
    await new Promise((resolve) => setTimeout(resolve, 3000));

    console.log("Tentando conectar ao JSON Server...");
    await dbAdapter.connect();
  } catch (error) {
    console.error("Falha na conexão com o banco de dados:", error.message);
    console.log(
      "Certifique-se de que o JSON Server está rodando na porta 3001"
    );
    console.log("Continuando sem conexão com o banco...");
  }
};

// Conectar de forma assíncrona
connect();

module.exports = dbAdapter;
