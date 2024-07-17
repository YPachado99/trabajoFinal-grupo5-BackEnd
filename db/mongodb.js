const mongoose = require("mongoose");
require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_CLUSTER, DB_NAME } = process.env;

// Conectar a la base de datos

const connectDb = async () => {
  console.log("Esperando Conexion con la Base de Datos");
  try {
    await mongoose.connect("mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}/?retryWrites=true&w=majority&appName=BDcodeStockers", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conectado a MongoDB Atlas");
  } catch (error) {
    console.log("Error al Conectar a MongoDB Atlas", error);
  }
};

module.exports = connectDb;
