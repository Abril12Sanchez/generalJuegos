// const gateway = require("fast-gateway");
// const port = process.env.PORT || 9001;


// const server = gateway({
//   routes: [
//     { prefix: "/juegos", target: "https://generaljuegos.onrender.com" },
//     { prefix: "/reservas", target: "https://generaljuegos-reservas.onrender.com" },
//     { prefix: "/pagos", target: "https://generaljuegos-pagos.onrender.com" },
//   ],
// });

// server.start(port).then(() => {
//   console.log("Gateway ejecutándose en el puerto " + port);
// });


const gateway = require("fast-gateway");
const express = require("express");
const path = require("path");

const port = process.env.PORT || 9001;

// Crear una aplicación Express para servir archivos estáticos
const app = express();
app.use('/frontend', express.static(path.join(__dirname, 'frontend')));

// Configuración del gateway
const server = gateway({
  routes: [
    { prefix: "/juegos", target: "https://generaljuegos.onrender.com" },
    { prefix: "/reservas", target: "https://generaljuegos-reservas.onrender.com" },
    { prefix: "/pagos", target: "https://generaljuegos-pagos.onrender.com" },
    // Manejar la ruta para archivos estáticos
    { prefix: '/frontend', handler: app }
  ],
});

// Inicia el servidor del gateway
server.start(port).then(() => {
  console.log("Gateway ejecutándose en el puerto " + port);
});
