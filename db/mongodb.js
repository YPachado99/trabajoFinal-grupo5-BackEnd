const mongoose = require("mongoose");

// Conectar a la base de datos

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/CodeStocker", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("conectado a la base de dato")
  } catch (error) {
    console.log("Error al conectar ", error);
  }
};

module.exports = connectDb;