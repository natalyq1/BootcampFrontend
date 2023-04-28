const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Cliente = new Schema({
  nombre: String,
  pais: String,
  correo: String,
  fecha: String,
  telefono: String,
});

module.exports = mongoose.model("Clientes", Cliente);