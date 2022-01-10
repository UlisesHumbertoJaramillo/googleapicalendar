const jwt = require("jsonwebtoken"); //sirve para generar un token, para validar la navegacion a un usuario
//const token = jwt.sign(userid,secretkey)(ejemplo para el endpoint)

const { google } = require("googleapis");
const { OAuth2 } = google.auth;
const oAuth2Client = new OAuth2(
  "864344970523-3lvgs5fgj1n2pi43tn9jl2laj2n6uego.apps.googleusercontent.com",
  "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"
);

oAuth2Client.setCredentials({
  refresh_token:
    "1//04tfNziUGXY5kCgYIARAAGAQSNwF-L9IrWdApaS4mLOf9oVH6BTl90SpgOfrKw5BuRBzfgdqDLj0w3d_4JfCRNSlOzUJXNM-pqKo",
});

const calendar = google.calendar({version: 'v3', auth:oAuth2Client});

/*
const event = {payload
  sumary: "meet with somebody",
  location: "a location",
  description: 'It´s only a meeting',
  start:{
    dateTime: eventStartTime,
    timeZone: 'america/Denver'
  },
  end:{
    dateTime: eventEndTime,
    timeZone:'america/Denver'
  }
}
{
      "resource": {
        "end": {dateTime: '2022-02-10T20:27:00-07:00'},
        "start": {dateTime: '2022-01-10T18:27:00-07:00'}
      }
    }

*/

module.exports = lista = {
  createEvent: function (req, res) {
    var payload = req.body;
    var response;
    const event={
      start:{
        dateTime: '2022-01-10T00:27:00-07:00'
      },
      end:{
        dateTime: '2022-02-10T00:27:00-07:00',
      }};
    response = calendar.events.insert({calendarId:'e1i640idohcv1deottcrb3i6a4@group.calendar.google.com',resource:event}, err => {
      if(err) return console.error('calendar event error');
      return console.log('calendar created');
    })
    res.send(response);
  },
  getEvent: function (req, res) {
    var payload = req.body;
    var id = req.params.id;
    res.send({"response":"hola mundo"+id});
  },
  updateEvent: function (req, res) {
    var id = req.params.id;
  },
  deleteEvent: function (req, res) {
    var id = req.params.id;
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
