const express = require("express"); 
const app = express(); 
const connectDb = require("./db/mongodb");
const cors = require("cors");
const comprobacionJwt = require("./middleware/comprobacionJwt");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
require("dotenv").config();
const PORT = process.env.PORT || 3000;

const initApp = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Servidor puesto en marcha en el puerto ${PORT}`);
    });
    await connectDb();
  } catch (error) {
    console.log("Error al iniciar la aplicacion ");
  }
};

initApp();

//creo una ruta en express

app.use("/api/user", require("./routes/RutasUsuarios"));
app.use("/api", require("./routes/RutasProductos"));

app.use("/protegida", comprobacionJwt, require("./routes/RutaAdmin"));
