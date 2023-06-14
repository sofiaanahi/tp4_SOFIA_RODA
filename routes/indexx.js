const express = require("express");
const router = express.Router();

// IMPORTACION DE LOS CONTROLADORES

const obtenerRespuesta = require("../controllers/index");

router.get("/", obtenerRespuesta.get);

router.put("/", obtenerRespuesta.put);

router.post("/", obtenerRespuesta.post);

router.delete("/", obtenerRespuesta.delete);

//EXPORTACIONES

module.exports = router;
