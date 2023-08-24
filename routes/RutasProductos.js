const express = require("express");
const router = express.Router();

const productosController = require("../controllers/productosController");

//Rutas del GET

router.get("/productos", productosController.obtenerProdutos);

router.get("/productos/:id", productosController.obtenerProductoPorId);

//Rutas del POST

router.post("/productos", productosController.addProduto);

//Rutas del PUTs
router.put("/productos/:id", productosController.updateProducto);

//Ruta del DELETE

router.delete("/productos/:id", productosController.deleteProducto);

module.exports = router;
