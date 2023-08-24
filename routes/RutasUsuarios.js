const express = require("express");
const router = express.Router();

const usuariosController = require("../controllers/usuariosController");

router.post("/register", usuariosController.register);

router.post("/login", usuariosController.loginUsuario);

router.get("/usuarios", usuariosController.getAllUsers);

router.put("/usuarios/:id", usuariosController.updateUsuario);

router.delete("/usuarios/:id", usuariosController.deleteUsuario);



module.exports = router; 
