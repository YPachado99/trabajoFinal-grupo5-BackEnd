const express = require("express");
const router = express.Router();
//const usuarios= require("../usuarios");//importo el modulo usuarios
const usuariosController = require("../controllers/usuariosController");

router.post('/register', usuariosController.register);

router.post('/login', usuariosController.loginUsuario);

router.get('/usuarios', usuariosController.getAllUsers);

//router.put("/usuarios/:id", usuariosController.updateUsuario);

router.delete("/usuarios/:id", usuariosController.deleteUsuario);

/*
//Rutas del GET

router.get("/usuarios" , usuariosController.obtenerUsuarios);

router.get("/usuarios/:id" , usuariosController.obtenerUsuarioPorId);

//Rutas del POST

router.post("/usuarios", usuariosController.addUsuario);


//Rutas del PUTs
router.put("/usuarios/:id", usuariosController.updateUsuario);

//Ruta del DELETE

router.delete("/usuarios/:id", usuariosController.deleteUsuario);
/*
//rutas get para canchas
router.get("/usuarios",(req,res)=>{
    res.send(JSON.stringify(usuarios));
});

router.get("/usuarios/:id",(req,res)=>{
    let id= req.params.id ;
    let usuario= usuarios.find((usuario) => usuario.id == id);
    if (usuario){
        res.send(usuario);
    }
    else{
        res.status(404).send ("usuadio no encontrado");
    }
});

router.post("/usuarios") , (req,res) => {
    let usuarioNuevo = {
        id : usuarios.length + 1 ,
        nombre: req.body.nombre,
        capacidad: req.body.capacidad,
        club:req.body.club,
    };
    usuarios.push(usuarioNuevo);
    res.send(usuarios);
}

router.delete("/usuarios/:id", (req, res)=>{
    let id =parseInt(req.params.id);
    let usuario = usuarios.find((usuario) => usuario.id==id);
    if(usuario){
        usuarios=usuarios.filtar((usuario)=>usuario.id !=id);
        res.send(usuarios);
    }else {
        res.status(404).send("cancha no encontrada")
    }
});


*/


module.exports= router;//exporto todas las funciones q utilicen router
