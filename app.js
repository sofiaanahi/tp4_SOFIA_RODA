// IMPORTACIONES
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan"); 
const cors = require("cors");

// INICIALIZAR LA LIBRERIA EXPRESS

const app = express();
const port = process.env.PORT || 3000;

// MIDDLEWARES

app.use(helmet());
app.use(cors());
app.use(morgan ("dev"));

//EJECUCION

app.listen(port, ()=> {
    console.log(` mi primer servidor es http:/localhost:${port}`);
});
