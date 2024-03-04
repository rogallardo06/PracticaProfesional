// Configuración de la aplicación
const express = require("express");
const app = express();
const aspirantRouter = require("./routers/api/aspirant");
const professionRouter = require("./routers/api/profession");
const historyRouter = require("./routers/api/history");
const profileRouter = require("./routers/api/profile");
const cors = require("cors");
const methodOverride = require("method-override");
const bodyParser = require('body-parser');

app.use(cors({  origin: 'http://localhost:5173',
optionsSuccessStatus: 200 }));

const db = require("../database/models");

// Requerimos el puerto
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: "false"}));

app.use(bodyParser.json());

app.use(methodOverride("_method"))

// Configurar las rutas
app.use("/api/aspirants", aspirantRouter);
app.use("/api/professions", professionRouter);
app.use("/api/histories", historyRouter);
app.use("/api/profiles", profileRouter);


db.sequelize.sync();

// Iniciar el servidor
app.listen(PORT, () => console.log(`El servidor está corriendo en: http://localhost:${PORT}`));