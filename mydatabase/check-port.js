const net = require("net");

const checkPort = (port) => {
  return new Promise((resolve) => {
    const server = net.createServer();

    server.listen(port, () => {
      server.close();
      resolve(true); // Porta disponível
    });

    server.on("error", () => {
      resolve(false); // Porta em uso
    });
  });
};

const findAvailablePorts = async () => {
  console.log("Verificando portas...\n");

  const ports = [3000, 3001, 3002, 3003, 3004, 3005];

  for (const port of ports) {
    const available = await checkPort(port);
    console.log(`Porta ${port}: ${available ? "✅ Disponível" : "❌ Em uso"}`);
  }
};

findAvailablePorts();
