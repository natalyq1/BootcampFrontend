//Paquetes
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

var datos_nombres = [];
var datos_apellidos = [];
var datos_emails = [];
var datos_profesionales = [];
var datos_dates = [];

//Configuración
app.use(bodyParser.urlencoded({ extended: true }));
//carpeta estatica
app.use("/js", express.static("../frontend/js"));
//Rutas
app.get("/", function (req, res) {
  res.sendFile(path.resolve("../frontend/index.html"));
});

app.get("/turnos", function (req, res) {
  res.sendFile(path.resolve("../frontend/turnos.html"));
});
app.post("/guardarTurnos", function (req, res) {
  //capturo datos
  let dato1 = req.body.nombre;
  let dato2 = req.body.apellido;
  let dato3 = req.body.email;
  let dato4 = req.body.profesional;
  let dato5 = req.body.date;

  console.log(req.body);

  datos_nombres.push(dato1);
  datos_apellidos.push(dato2);
  datos_emails.push(dato3);
  datos_profesionales.push(dato4);
  datos_dates.push(dato5);

  res.send("los datos se enviaron");
});

app.post("/turnosListado", function (req, res) {
  let lista = "";

  //ruta distinta
  for (let i = 0; i < datos_nombres.length; i++) {
    //lista = datos_nombres[i];
    lista +=
      "<li>" +
      "Paciente:" +
      datos_nombres[i] +
      " " +
      datos_apellidos[i] +
      ", correo: " +
      datos_emails[i] +
      ", con el profesional: " +
      datos_profesionales[i] +
      " el dia " +
      datos_dates[i];
    +"</li>";
  }
  //enviar respuesta del servidor
  res.send(lista);
});

//Servidor
app.listen(3001, function () {
  console.log("Servidor funcionando");
});
