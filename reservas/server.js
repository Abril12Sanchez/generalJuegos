const express = require("express");
const app = express();

const port = 8082;

// Rutas
app.get("/", (req, res) => {
  res.send("Servicio Reservas OK");
});

// Reservar un juego
app.post("/reservar", (req, res) => {
    res.status(200).json({ message: "Reserva realizada con éxito" });
});


app.listen(port, () => {
  console.log("Microservicio Reservas escuchando en localhost:" + port);
});
