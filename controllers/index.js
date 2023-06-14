respuesta = {};

// GET

respuesta.get = (req, res) => {
  res.send("respuesta GET");
};

// PUT

respuesta.put = (req, res) => {
  res.send("respuesta PUT");
};

//POST
respuesta.post = (req, res) => {
  res.send("respuesta POST");
};

// DELETE
respuesta.delete = (req, res) => {
  res.send("respuesta DELETE");
};

//EXPORTACION

module.exports = respuesta;
