//Paquetes
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

//Configuración
app.use(bodyParser.urlencoded({ extended: true }));
//carpeta estatica
//app.use('/', express.static('js'))
app.use("/js", express.static(path.resolve("../frontend/js")));

//Rutas
app.get("/", function (req, res) {
res.sendFile(path.resolve("../frontend/index.html"));
});

app.get("/inicio", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post("/ejemplo_ajax", function (req, res) {
  //capturo datos
  let dato1 = req.body.nombre;
  let dato2 = req.body.color;
  let mensaje = "Hola " + dato1 + " y el color " + dato2;
  //enviar respuesta del servidor
  res.send(mensaje);
});

//Servidor
app.listen(3000, function () {
  console.log("Servidor funcionando");
});
