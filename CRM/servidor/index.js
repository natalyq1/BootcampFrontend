// Importar los módulos necesarios
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

// Configurar la conexión a la base de datos
mongoose.connect('mongodb+srv://database:database@cluster1.5ld4yip.mongodb.net/crm?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

// Configurar el middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use("../css", express.static("css"));
// Importar el modelo de datos Cliente
const Cliente = require('./models/Clientes');

// Configurar las rutas de Express.js
app.get('/', (req, res) => {
  // enviar el archivo HTML con la tabla
  res.sendFile(path.join(__dirname, '../public/index.html'));
});


app.get('/clientes', (req, res) => {
  Cliente.find((error, result) => {
    if (error) {
      return console.log(error);
    }
    res.send(result);
  });
});


// Iniciar el servidor
app.listen(3002, () => {
  console.log('Servidor iniciado en el puerto 3002');
});
