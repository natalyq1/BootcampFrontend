const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

mongoose
  .connect(
    "mongodb+srv://database:database@cluster1.5ld4yip.mongodb.net/crm?retryWrites=true&w=majority"
  )
  .then(function (db) {
    console.log("conectado a la Base de Datos");
  })
  .catch(function (err) {
    console.log(err);
  });

//Configuraciones
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", express.static(path.resolve("../cliente/")));

const Cliente = require("./models/Clientes");
const Contacto = require("./models/Contactos");

app.use("/css", express.static("css/"));
//Rutas
app.get("/", function (req, res) {
  res.sendFile(path.resolve("../cliente/index.html"));
});

app.get("/clientes", function (req, res) {
  res.sendFile(path.resolve("../cliente/clientes.html"));
});

app.get("/contact", function (req, res) {
  res.sendFile(path.resolve("../cliente/contact.html"));
});

//Ruta -Obtener clientes de la BD
app.get("/obteinClients", async function (req, res) {
  let docs = await Cliente.find();
  res.send(docs);
});

//Ruta -Obtener contactos de la BD
app.get("/obteinContacts", async function (req, res) {
  let docs = await Contacto.find();
  res.send(docs);
});

//Capturo datos de registro de un nuevo cliente
app.post("/new-costumer", async function (req, res) {
  let datos_enviados = req.body;
  let nuevo_registro = new Cliente(datos_enviados);
  await nuevo_registro.save();
  res.send("Se registro el cliente");
});

//Capturo datos de registro de un nuevo contacto
app.post("/new-contact", async function (req, res) {
  let datos_enviados = req.body;
  let nuevo_registro = new Contacto(datos_enviados);
  await nuevo_registro.save();
  res.send("Se registro el contacto");
});

app.listen(3000, function () {
  console.log("Servidor funcionando");
});
