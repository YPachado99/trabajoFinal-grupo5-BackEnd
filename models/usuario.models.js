const mongoose = require("mongoose");
const { Schema } = mongoose;

const usuarioSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      max: 30,
      min: 3,
      trim: true, //elimina los espacion
    },
    apellido: {
      type: String,
      required: true,
      max: 30,
      min: 3,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      max: 30,
      min: 3,
      trim: true,
    },
    mail: {
      type: String,
      required: true,
      unique: true, //para que sea unico
      max: 30,
      min: 7,
      trim: true,
    },
    contraseña: {
      type: String,
      required: true,
      max: 30,
      min: 3,
      trim: true,
    },
    telefono: {
      type: Number,
      required: true,

      trim: true,
    },
    url: {
      type: String,
      max: 100,
      min: 3,
      trim: true,
    },
    usuarioAdm: {
      type: String,
      required: true,
      max: 10,
      min: 2,
      trim: true,
    },
  },
  { versionKey: false }
);

const UsuarioModel = mongoose.model("usuarios", usuarioSchema); //primer parametro el nombre de la base de dato y 2do el nombre del schema creado

module.exports = UsuarioModel;
