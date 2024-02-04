// Configuración de la aplicación
const express = require("express");
const app = express();

// Configurar las rutas
app.use("/", require("./src/router/rest"));

// Iniciar el servidor
app.listen(3000, () => console.log("El servidor está corriendo en: http://localhost:3000"));