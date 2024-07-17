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
  origin: "https://codestockers.netlify.app",  
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",  
  preflightContinue: false,  
  optionsSuccessStatus: 204,  
  allowedHeaders: ["Content-Type", "Authorization"],  
  credentials: true,  
}));  

const PORT = process.env.PORT || 3000;  

const initApp = async () => {  
  try {  
    await connectDb(); // Conexión a la base de datos antes de iniciar la aplicación  
    app.listen(PORT, () => {  
      console.log(`Servidor puesto en marcha en el puerto ${PORT}`);  
    });  
    
    // Rutas de la aplicación  
    app.use("/api/user", require("./routes/RutasUsuarios"));  
    app.use("/api", require("./routes/RutasProductos"));  
    app.use("/protegida", comprobacionJwt, require("./routes/RutaAdmin"));  
    
  } catch (error) {  
    console.log("Error al iniciar la aplicación");  
  }  
};  

initApp();  