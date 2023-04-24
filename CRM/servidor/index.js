// Importar los módulos necesarios
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

// Configurar la conexión a la base de datos
mongoose.connect('mongodb+srv://database:database@cluster1.5ld4yip.mongodb.net/crm?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

//modelo de datos
const Cliente = require("./models/Clientes");

//css
app.use("/css", express.static("css"));

// Configurar las rutas de Express.js
app.get('/', (req, res) => {
  // enviar el archivo HTML con la tabla
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/clientes', (req, res) => {
  Cliente.find().toArray((error, result) => {
    if (error) {
      return console.log(error);
    }
    res.json(result);
  });
});


// Iniciar el servidor
app.listen(3002, () => {
  console.log('Servidor iniciado en el puerto 3002');
});
