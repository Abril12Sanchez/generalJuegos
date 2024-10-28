const gateway = require("fast-gateway");
const port = process.env.PORT || 9001;


const server = gateway({
  routes: [
    { prefix: "/juegos", target: "https://generaljuegos.onrender.com" },
    { prefix: "/reservas", target: "https://generaljuegos-reservas.onrender.com" },
    { prefix: "/pagos", target: "https://generaljuegos-pagos.onrender.com" },
  ],
});

server.start(port).then(() => {
  console.log("Gateway ejecutándose en el puerto " + port);
});
