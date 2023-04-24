// Importar los módulos necesarios
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

// Configurar la conexión a la base de datos
mongoose.connect('mongodb+srv://database:database@cluster1.5ld4yip.mongodb.net/crm?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

// Importar el modelo de datos Cliente
const Cliente = require('./models/Clientes');

// Configurar las rutas de Express.js
app.get('/', (req, res) => {
  // enviar el archivo HTML con la tabla
  res.sendFile(path.join(__dirname, '../cliente/js/index.html'));
});

app.get('/clientes', (req, res) => {
  // Hacer una consulta a la base de datos usando el modelo de datos Cliente
  Cliente.find()
    .then(clientes => {
      // Enviar los datos de los clientes en formato JSON
      res.json(clientes);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Error al obtener los clientes');
    });
});

// Iniciar el servidor
app.listen(3002, () => {
  console.log('Servidor iniciado en el puerto 3002');
});
