const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Configurar CORS
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});

server.use(middlewares);
server.use(router);

// Função para encontrar uma porta disponível
const findAvailablePort = (startPort) => {
  return new Promise((resolve, reject) => {
    const net = require("net");
    const testServer = net.createServer();

    testServer.listen(startPort, (err) => {
      if (err) {
        testServer.close();
        findAvailablePort(startPort + 1)
          .then(resolve)
          .catch(reject);
      } else {
        const port = testServer.address().port;
        testServer.close();
        resolve(port);
      }
    });

    testServer.on("error", (err) => {
      if (err.code === "EADDRINUSE") {
        findAvailablePort(startPort + 1)
          .then(resolve)
          .catch(reject);
      } else {
        reject(err);
      }
    });
  });
};

// Iniciar servidor na primeira porta disponível a partir de 3001
findAvailablePort(3001)
  .then((port) => {
    server.listen(port, () => {
      console.log(`🚀 JSON Server está rodando na porta ${port}`);
      console.log(`📊 Database: http://localhost:${port}/db`);
      console.log(`👥 Users: http://localhost:${port}/users`);
      console.log(`🔐 Permissions: http://localhost:${port}/userPermissions`);
    });
  })
  .catch((err) => {
    console.error("Erro ao iniciar o servidor:", err);
  });
