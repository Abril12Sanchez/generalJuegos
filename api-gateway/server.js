const gateway = require("fast-gateway");
const port = 9001;

const server = gateway({
  routes: [
    {
      prefix: "/juegos",
      target: "https://generaljuegos.onrender.com", // Redirige al servicio de juegos
      hooks: {},
    },
    {
      prefix: "/reservas",
      target: "https://generaljuegos-reservas.onrender.com", // Redirige al servicio de reservas
      hooks: {},
    },
    {
      prefix: "/pagos",
      target: "https://generaljuegos-pagos.onrender.com", // Redirige al servicio de pagos
      hooks: {},
    },
  ],
});

server.start(port).then(() => {
  console.log("Gateway ejecutándose en el puerto " + port);
});
