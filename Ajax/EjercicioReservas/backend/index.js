//import { crearLi } from "../frontend/js/libreria.js";

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

app.post("/turnos", function (req, res) {
  //capturo datos
  let dato1 = req.body.nombre;
  let dato2 = req.body.apellido;
  let dato3 = req.body.email;
  let dato4 = req.body.profesional;
  let dato5 = req.body.date;

  let i = 0;
  let mensaje = "";

  console.log(req.body);

  datos_nombres.push(dato1);
  datos_apellidos.push(dato2);
  datos_emails.push(dato3);
  datos_profesionales.push(dato4);
  datos_dates.push(dato5);
  
  let lista = ''

for (let i = 0; i < datos_nombres.length; i++) {
  
   lista = datos_nombres[i];
   lista +='<li>' + datos_nombres[i] + '</li>'
  mensaje =
        "Bienvenido " +
        datos_nombres[i] +
        " " +
        datos_apellidos[i] +
        " y el correo: " +
        datos_emails[i] +
        ", profesional: " +
        datos_profesionales[i] +
        " a las " +
        datos_dates[i];
      
    }
    i++;
    res.send(mensaje);
  
  //enviar respuesta del servidor

  console.log(mensaje);
  res.send(lista);
});

 //Verifica que el campo no sea vacio
// if (turno === '') {
//  alert('No puede ir vacio')
//  return    
//}

// Crea el <li>
//const li = crearLi(turno);
//lista.appendChild(li);

//Servidor
app.listen(3001, function () {
  console.log("Servidor funcionando");
});
