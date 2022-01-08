

const jwt = require("jsonwebtoken"); //sirve para generar un token, para validar la navegacion a un usuario
//const token = jwt.sign(userid,secretkey)(ejemplo para el endpoint)

module.exports = lista = {
  createEvent: function (req, res) {
    
  },
  getEvent: function (req, res) {
    
    var datos = req.body;

    
  },
  updateEvent: function (req, res) {
    var id = req.params.id;

    
  },
  deleteEvent: function (req, res) {
    var id = req.params.id;
    var datos = req.body;
    
  },
  funcionTest: function (req, res) {
    //funcion para registrar un usuario de la aplicacion
    var datos = req.body;
    res.send({
      tarea1: "descripcion de tarea 1",
      tarea2: "descripcion de tarea 2",
    });
  },
};

/*
TAMBIEN SE PUEDEN ORGANIZAR DE LA SIGUIENTE MANERA

const funciones = {};

funciones.funcion1 = (req,res) => {}
funciones.funcion2 = (req,res) => {}
funciones.funcion3 = (req,res) => {}
funciones.funcion4 = (req,res) => {}

module.exports = funciones;
*/
