const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Un esquema es el modelo de datos o la forma de un documento
let Cliente = new Schema({
  nombre: String,
  propietario: String,
  email: String,
  fecha: String,
  sintomas: String,
});

//exporto el modelo que creamos
module.exports = mongoose.model("clientes", Cliente);
