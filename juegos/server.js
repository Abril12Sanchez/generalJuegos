const express = require("express");
const app = express();

const port = 8081;

// Datos de ejemplo de juegos
const juegosData = [
  { id: 1, name: "Juego 1", description: "Descripción del juego 1" },
  { id: 2, name: "Juego 2", description: "Descripción del juego 2" },
];

app.get("/", (req, res) => {
  res.send("Servicio Juegos OK");
});

// Listar juegos
app.get("/lista-juegos", (req, res) => {
  res.status(200).json({ juegos: juegosData });
});

app.listen(port, () => {
  console.log("Microservicio Juegos escuchando en localhost:" + port);
});
