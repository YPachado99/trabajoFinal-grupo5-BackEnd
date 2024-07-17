const express = require("express"); 
const app = express(); 
const connectDb = require("./db/mongodb");
const cors = require("cors");
const comprobacionJwt = require("./middleware/comprobacionJwt");
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: "https://codestockers.netlify.app", // permite solicitudes desde este origen
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // métodos HTTP permitidos
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: ["Content-Type", "Authorization"], // cabeceras permitidas
  credentials: true, // habilita el intercambio de cookies entre dominios
}));


dotenv.config();
const PORT = process.env.PORT || 3000;
connectDb();
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
