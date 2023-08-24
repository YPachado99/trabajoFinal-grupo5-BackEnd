const UsuarioModel = require("../models/usuario.models");
const Usuarios = require("../models/usuario.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");




const register = async (req, res) => {
  try {
    const { nombre, apellido, role, mail, contraseña,telefono,url,usuarioAdm, } = req.body;
    const hash = await bcrypt.hash(contraseña, 10);

    const usuario = new Usuarios({
      nombre,
      apellido,
      role,
      mail,
      contraseña: hash,
      telefono,
      url,
      usuarioAdm,
      
    });
    await usuario.save();
    res.status(201).json("Usuario creado");
  } catch (error) {
    res.status(400).json( "usuario no Creado");
  }
};


const loginUsuario = async (req, res) => {
  const user = await Usuarios.findOne({ mail: req.body.mail });

  if (!user) {
    return res.status(400).json("Usuario y/o contraseña incorrecto");
  }

  const match = await bcrypt.compare(req.body.contraseña, user.contraseña);

  if (!match) {
    return res.status(400).json("Usuario y/o contraseña incorrecto");
  }
   // generar el token

   const token = jwt.sign(
    {
      id: user._id,
      nombre: user.nombre,
      apellido: user.apellido,
      role: user.role,
      mail: user.mail,
      telefono: user.telefono,
      url: user.url,
      usuarioAdm: user.usuarioAdm,
    },
    process.env.SECRET_KEY,
    { expiresIn: "1d" }
  );

  res.header("auth-token", token).json({
    error: null,
    data: { token },
  });
};

const getAllUsers = async (req, res) => {
  try {
    const usuarios = await Usuarios.find();
    res.json(usuarios);
  } catch (error) {
    res.status(400).json("Usuarios no encontrados");
  }
};


//Borrar una usuario

const deleteUsuario = async (req, res) => {
  try {
    const id = req.params.id;
    const usuario = await UsuarioModel.findById(id);
    if (usuario) {
      await UsuarioModel.deleteOne({ _id: id });
      res.status(200).json("usuario eliminado");
    } else {
      res.status(404).json("usuario no encontrado");
    }
  } catch (error) {
    res.status(400).json("usuario no eliminado");
  }
};


//Actualizar una usuario

const updateUsuario = async (req, res) => {
    try {
      const id = req.params.id;
      const usuario = await UsuarioModel.findById(id);
      if (usuario) {
        usuario.nombre = req.body.nombre;
        usuario.apellido = req.body.apellido;
        usuario.role = req.body.role;
        usuario.mail = req.body.mail;
        usuario.contraseña = req.body.contraseña;
        usuario.telefono = req.body.telefono;
        usuario.url = req.body.url;
        usuario.usuarioAdm = req.body.usuarioAdm;

        const usuarioActualizado = await usuario.save();
        res.status(200).json("usuario actualizada");
        res.json(usuarioActualizado);
      } else {
        res.status(404).json("usuario no encontrada");
      }
    } catch (error) {
      res.status(400).json("usuarios no actualizada");
    }
  };


module.exports = {
  register,
  loginUsuario,
  getAllUsers,
  deleteUsuario
};




/*




//GET
const obtenerUsuarios= async (req, res)=> {
    try {
        const usuarios =await UsuarioModel.find();
        res.json(usuarios);
    } catch (error) {
        res.status(400).json("Usuarios no encontrados");
        res.status(500).json("Error en el servidor");
    }
}

const obtenerUsuarioPorId= async (req, res)=> {
    try {
        const id =req.params.id;
        const usuario = await UsuarioModel.findById(id)
        if (usuario) {
            res.json(usuario);
          } else {
            res.status(404).json("Usuario no encontrado");
          }
        } catch (error) {
          res.status(400).json("Usuario no encontrado");
          res.status(500).json("Error en el servidor");
        }
      };

//creacion de usuario 

const addUsuario = async (req, res) => {
    try {
        
        const usuario = new UsuarioModel( req.body);
        await usuario.save();
        res.status(201).json(usuario);
        
    } catch (error) {
        res.status(400).json("usuario no Creado");
    }
};

//Actualizar una cancha

const updateUsuario = async (req, res) => {
    try {
      const id = req.params.id;
      const usuario = await UsuarioModel.findById(id);
      if (usuario) {
        usuario.nombre = req.body.nombre;
        usuario.apellido = req.body.apellido;
        usuario.role = req.body.role;
        usuario.mail = req.body.mail;
        usuario.contraseña = req.body.contraseña;
        usuario.telefono = req.body.telefono;
        usuario.url = req.body.url;
        usuario.usuarioAdm = req.body.usuarioAdm;

        const usuarioActualizado = await usuario.save();
        res.status(200).json("usuario actualizada");
        res.json(usuarioActualizado);
      } else {
        res.status(404).json("usuario no encontrada");
      }
    } catch (error) {
      res.status(400).json("usuarios no actualizada");
    }
  };


//Borrar una usuario

const deleteUsuario = async (req, res) => {
    try {
      const id = req.params.id;
      const usuario = await UsuarioModel.findById(id);
      if (usuario) {
        await UsuarioModel.deleteOne({ _id: id });
        res.status(200).json("usuario eliminado");
      } else {
        res.status(404).json("usuario no encontrado");
      }
    } catch (error) {
      res.status(400).json("usuario no eliminado");
    }
  };


module.exports = {
    obtenerUsuarios,
    obtenerUsuarioPorId,
    addUsuario,
    updateUsuario,
    deleteUsuario
};










/* nombre: {type : String, require: true},
            apellido: {type : String, require: true},
            role: {type : String, require: true},
            mail: {type : String, require: true},
            contraseña: {type : String, require: true},
            telefono: {type : String, require: true},
            url: {type : String, require: true},
            usuarioAdm: {type : String, require: true}*/

