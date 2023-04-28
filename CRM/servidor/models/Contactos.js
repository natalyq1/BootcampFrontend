const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Contacto = new Schema({
  nombre: String,
  fecha: String,
  estado: String,
  tipo: String,
  descripcion: String,
});

module.exports = mongoose.model("Contactos", Contacto);