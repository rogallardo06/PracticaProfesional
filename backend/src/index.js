// Configuración de la aplicación
const express = require("express");
const app = express();
const router = require("./routers/index");

const db = require("../database/models")

// Requerimos el puerto
const PORT = process.env.PORT || 3000

// Configurar las rutas
app.use("/", router);

//console.log(process.env);

db.sequelize.sync();

// Iniciar el servidor
app.listen(PORT, () => console.log(`El servidor está corriendo en: http://localhost:${PORT}`));