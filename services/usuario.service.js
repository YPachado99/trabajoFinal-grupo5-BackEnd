const UsuarioModel = require("../models/usuario.models");


const create = (body) => UsuarioModel.create(body);

module.exports = {
    create,
};