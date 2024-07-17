const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config()

const { DB_USER, DB_PASSWORD,DB_NAME } = process.env;

// Conectar a la base de datos
const connectDb = async () => {
  console.log("Esperando Conexion con la Base de Datos");
  try {
    const dbUrl = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@bdcodestockers.uaqhnmp.mongodb.net/?retryWrites=true&w=majority&appName=${DB_NAME}`;
    await mongoose.connect( dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conectado a MongoDB Atlas");
  } catch (error) {
    console.log("Error al Conectar a MongoDB Atlas", error);
  }
};

module.exports = connectDb;
