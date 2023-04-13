//MODULOS----inicializacion de modulos http(servidores y responder peticiones HTTP de los usuarios) y file system(fs) para leer el archivo del sistema, lee el index.html y y luego lo pasa al usuario usando un servidor HTTP.

//creamos un servidor HTTP que maneje las 'peticiones' (request) del cliente, y le devuelva una 'respuesta' (response)

/*
//Servidor creado con NODE (puro)
 const http = require("http");
const fs = require("fs");
//creamos un servidor HTTP que maneje las "peticiones" (request) del cliente,
//y le devuelva una "respuesta" (response)
http
  .createServer(function (req, res) {
    //aca va todo lo necesario para devolver una respuesta al cliente
    console.log("Gracias, se comunicó con el SERVIDOR");
    //Creando la CABECERA/HEAD de la respuesta
    res.writeHead(200, {
      "Content-Type": "text/html",
      "Access-Control-Allow-Origin": "*",
    });
    //acceder al archivo que quiero enviarle al cliente
    let leerArchivo = fs.createReadStream(__dirname + "/index.html");
    leerArchivo.pipe(res);
  })
  .listen(3000, function () {
    //localhost:3000
    console.log("Servidor LISTO, y escuchando el puerto 3000 (localhost:3000)");
  });
*/

//Servidor creado con EXPRESS
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//Configurar el bodyParser para utilizarlo
app.use(bodyParser.urlencoded({ extended: true }));

//usar un archivo estatico
app.use("/css", express.static("css"));

//creamos la URL + Metodo = Request o Peticion del cliente

//cuando el CLIENTE ingrese por GET a la URL = http://localhost:3000/home
app.get("/home", function (req, res) {
  console.log("El CLIENTE ingreso por GET a http://localhost:3000/home");

  //respuesta del servidor
  res.sendFile(__dirname + "/index.html");
});

//Ruta para GET /registro
app.get("/registro", function (req, res) {
  res.sendFile(__dirname + "/registro.html");
});

// Ruta para GET /login
app.get("/login", function (req, res) {
  res.sendFile(__dirname + "/login.html");
});

//Ruta para manejar la peticion POST /formulario
app.post("/formulario_login", function (req, res) {
  console.log(req.body);
  console.log("email: " + req.body.dato1);
  console.log("contraseña: " + req.body.dato2);
  /*
  { dato1: 'juan1@com', dato2: 'juan1' }
email: juan1@com
contraseña: juan1
  */
});

app.post("/sumado", function (req, res) {
  console.log(req.body);
  console.log("numero 1: " + req.body.num1);
  console.log("numero 2: " + req.body.num2);
  console.log(parseInt(req.body.num1) + parseInt(req.body.num2));
  /*
    { num1: '2', num2: '3' }
numero 1: 2
numero 2: 3
5
    */
  /*
    { dato1: 'juan1@com', dato2: 'juan1' }
  email: juan1@com
  contraseña: juan1
    */
});

app.listen(3000, function () {
  console.log("Servidor listo y preparado en el puerto 3000");
});
