const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Un esquema es el modelo de datos o la forma de un documento
let modeloUsuarios = new Schema ({
    nombre: String,
    apellido: String,
    email: String,
    contrasena: String
})

//exporto el modelo que creamos
module.exports = mongoose.model('usuarios', modeloUsuarios)