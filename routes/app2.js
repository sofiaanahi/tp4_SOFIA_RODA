const express = require("express");
const router = express.Router();

const {obtenerRespuesta} = require("../controllers/index")

//IMPORTAN CONTROLADORES

router.get("/repuesta", obtenerRespuesta);

router.post("/respuesta", (req, res)=>{
    res.send("estas usando post");
});

router.put("/respuesta", (req, res)=>{
    res.send("estas usando put");
});

router.delete("/respuesta", (req, res)=>{
    res.send("estas usando delete");
});

//EXPORTACION
module.exports = router;
