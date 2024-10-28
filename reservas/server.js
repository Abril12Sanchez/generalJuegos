const express = require("express");
const app = express();

const port = 8082;

// Rutas
app.get("/", (req, res) => {
  res.send("Servicio Reservas OK");
});

// Reservar un juego
app.post("/reservar", (req, res) => {
  // Aquí puedes agregar lógica para reservar un juego
  res.status(200).json({ message: "Juego reservado con éxito" });
});

app.listen(port, () => {
  console.log("Microservicio Reservas escuchando en localhost:" + port);
});
