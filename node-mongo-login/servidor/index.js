//paquetes y modulos
//Servidor creado con EXPRESS
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

mongoose
  .connect(
    "mongodb+srv://database:database@cluster1.5ld4yip.mongodb.net/usuarios?retryWrites=true&w=majority"
  )
  .then(function (db) {
    console.log("conectado a bd");
  })
  .catch(function (err) {
    console.log(err);
  });

  

//Configuraciones-- el bodyParser para utilizarlo
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", express.static(path.resolve("../cliente/")));

//modelo de datos
const Usuario = require("./models/Usuarios");

/* ------ READ ------ */
//Sitio web principal (index)
app.get("/", function (req, res) {
  res.sendFile(path.resolve("../cliente/index.html"));
});

// Buscar en la base de datos los documentos de Tareaas
app.get("/usuarios", async function (req, res) {
  let documentos = await Usuario.find();

  console.log(documentos);

  res.send(documentos);
});

//petición para buscar información en la BD, sobre una tarea específica
app.post("/tarea/:id/:nombre_tarea", async function (req, res) {
  let id_tarea = req.params.id;
  let nom_tarea = req.params.nombre_tarea;
  let documento = await Tarea.findById(id_tarea); //consultamos la BD
  res.send(documento);
});


//puerto del servidor
app.listen(3000, function () {
  console.log("Servidor OK!!!");
});