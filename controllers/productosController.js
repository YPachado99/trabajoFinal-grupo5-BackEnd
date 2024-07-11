const { request } = require("http");
const ProductoModel = require("../models/producto.models");
const Producto = require("../models/producto.models");

//GET

const obtenerProdutos = async (req, res) => {
  try {
    const productos = await ProductoModel.find();
    res.json(productos);
  } catch (error) {
    res.status(400).json(error);
  }
};

const obtenerProductoPorId = async (req, res) => {
  try {
    const id = req.params.id;
    const producto = await ProductoModel.findById(id);
    if (producto) {
      res.json(producto);
    } else {
      res.status(404).json("Producto no encontrado");
    }
  } catch (error) {
    res.status(400).json("Producto no encontrado");
    res.status(500).json("Error en el servidor");
  }
};

//creacion de prodcuto

const addProduto = async (req, res) => {
  try {
    const producto = new ProductoModel(req.body);

    await producto.save();
    res.status(201).json(producto);
  } catch (error) {
    res.status(400).json(error);
  }
};

//Actualizar unaproducto

const updateProducto = async (req, res) => {
  try {
    const id = req.params.id;
    //console.log(req.body);

    //const productoActualizado = await producto.findById();
    const productoActualizado = await ProductoModel.findByIdAndUpdate(
      { _id: id },
      req.body,

      { new: true }
    );

    res.status(200).json(productoActualizado);
  } catch (error) {
    res.status(400).json("Producto no actualizada");
  }
};

//Borrar una usuario

const deleteProducto = async (req, res) => {
  try {
    const id = req.params.id;
    const producto = await ProductoModel.findById(id);
    if (producto) {
      await ProductoModel.deleteOne({ _id: id });
      res.status(200).json("producto eliminado");
    } else {
      res.status(404).json("producto no encontrado");
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  obtenerProdutos,
  obtenerProductoPorId,
  addProduto,
  updateProducto,
  deleteProducto,
};
