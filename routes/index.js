// Importar Express
import express from "express";

// Crear el enrutador
const router = express.Router();

// Variables para llevar el contador
let counter = 0;
const numbers = [];

// Ruta principal
router.get("/", (req, res) => {
  // Incrementar el contador
  counter++;

  // Guardar el número actual
  numbers.push(counter);

  // Renderizar la página principal
  res.render("index", {
    title: "Saul Estrada Mendoza",
    counter,
    numbers,
  });
});

// Exportar el enrutador
export default router;