/*  Archivo controllers/mascotas.js
 *  Simulando la respuesta de objetos Mascota
 *  en un futuro aquí se utilizarán los modelos
 */

// importamos el modelo de mascota
const Mascota = require('../models/mascota');

function crearMascota(req, res) {
    // Instanciaremos una nueva mascota utilizando la clase mascota
    var mascota = new Mascota(req.body);
    res.status(201).send(mascota);
}

function obtenerMascotas(req, res) {
    // Simulando dos mascotas y respondiendolas
    var mascota1 = new Mascota(1, 'Toby', 'Perro','FOTOS', 'Perro chido', 'blablabla')
    var mascota2 = new Mascota(2, 'Peluchin', 'Perro','FOTOS', 'Perro chido', 'blablabla')
    res.send([mascota1, mascota2])
}

function obtenerMascota(req, res) {
    var mascota1 = new Mascota(1, 'Toby', 'Perro','FOTOS', 'Perro chido', 'blablabla')
    var mascota2 = new Mascota(2, 'Peluchin', 'Perro','FOTOS', 'Perro chido', 'blablabla')
    res.send([mascota1, mascota2].filter(id => id === +req.params.id))
}

function modificarMascota(req, res) {
    // simulando una mascota previamente existente que el cliente modifica
    var mascota1 = new Mascota(req.params.id, 'Toby','FOTOS', 'Perro', 'Perro chido', 'blablabla')
    var modificaciones = req.body
    mascota1 = { ...mascota1, ...modificaciones }
    res.send(mascota1)
}

function eliminarMascota(req, res) {
    // se simula una eliminación de mascota, regresando un 200
    res.status(200).send(`Mascota ${req.params.id} eliminada`);
}

// exportamos las funciones definidas
module.exports = {
    crearMascota,
    obtenerMascotas,
    obtenerMascota,
    modificarMascota,
    eliminarMascota
}