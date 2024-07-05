const mongoose = require("mongoose");

// Conectar a la base de datos

const connectDb = async () => {
  console.log("Esperando Conexion con la Base de Datos");
  try {
    await mongoose.connect("mongodb+srv://YPachado99:Malena-2024@bdcodestockers.uaqhnmp.mongodb.net/?retryWrites=true&w=majority&appName=BDcodeStockers", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conectado a MongoDB Atlas");
  } catch (error) {
    console.log("Error al Conectar a MongoDB Atlas", error);
  }
};

module.exports = connectDb;
