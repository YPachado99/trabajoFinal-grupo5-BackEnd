const mongoose = require("mongoose");
const { Schema } = mongoose;

const productoSchema = new Schema(
  {
    img: {
      type: String,
      required: true,
      max: 30,
      min: 3,
      trim: true,
    },
    producto: {
      type: String,
      required: true,
      max: 30,
      min: 3,
      trim: true,
    },
    deposito: {
      type: String,
      required: true,
      max: 30,
      min: 1,
      trim: true,
    },
    stockMinimo: {
      type: Number,
      default: 0,
    },
    categoria: {
      type: String,
      required: true,
      max: 30,
      min: 3,
      trim: true,
    },
    stock: {
      type: Number,
      required: true,

      trim: true,
    },
    fechaControl: {
      type: String,
      required: true,

      trim: true,
    },
    precio: {
      type: Number,
    },
    nota: {
      type: String,
    },
  },
  { versionKey: false }
);

const ProductoModel = mongoose.model("productos", productoSchema); //primer parametro el nombre de la base de dato y 2do el nombre del schema creado

module.exports = ProductoModel;
