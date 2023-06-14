// IMPORTACIONES
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const ruta = require("./routes/indexx");

require("dotenv").config();

// INICIALIZAR LA LIBRERIA EXPRESS

const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

// MIDDLEWARES

app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//RUTAS
app.use("/", ruta);

//EJECUCION

app.listen(port, () => {
  console.log("mi primer servidor es :", port);
});
