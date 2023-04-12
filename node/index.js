
//MODULOS----inicializacion de modulos http(servidores y responder peticiones HTTP de los usuarios) y file system(fs) para leer el archivo del sistema, lee el index.html y y luego lo pasa al usuario usando un servidor HTTP.

const http = require("http");
const fs = require("fs");

//creamos un servidor HTTP que maneje las 'peticiones' (request) del cliente, y le devuelva una 'respuesta' (response)
http.createServer(function(req, res){
//aca va todo lo necesario para devolver una respuesta al cliente
console.log('El cliente hizo una peticion al servidor');
}).listen(3000)
console.log('escuchando el puerto 3000');