const gateway = require("fast-gateway");
const port = 9001;

const server = gateway({
  routes: [
    {
      prefix: "/juegos",
      target: "http://localhost:8081/", // Redirige al servicio de juegos
      hooks: {},
    },
    {
      prefix: "/reservas",
      target: "http://localhost:8082/", // Redirige al servicio de reservas
      hooks: {},
    },
    {
      prefix: "/pagos",
      target: "http://localhost:8083/", // Redirige al servicio de pagos
      hooks: {},
    },
  ],
});

server.start(port).then(() => {
  console.log("Gateway ejecutándose en el puerto " + port);
});
