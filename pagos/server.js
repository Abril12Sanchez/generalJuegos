const express = require("express");
const app = express();

const port = 8083;

// Rutas
app.get("/", (req, res) => {
  res.send("Servicio Pagos OK");
});

// Procesar un pago
app.post("/pagar", (req, res) => {
    res.status(200).json({ message: "Pago procesado con éxito" });
});


app.listen(port, () => {
  console.log("Microservicio Pagos escuchando en localhost:" + port);
});
