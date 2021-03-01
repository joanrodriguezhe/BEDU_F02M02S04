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
    var mascota1 = new Mascota({ id: 1, nombre: 'Toby', categoria: 'Perro', fotos: 'FOTOS', descripcion: 'Perro chido', anunciante: 'Anunciante', ubicacion: 'ubicacion' })
    var mascota2 = new Mascota({ id: 2, nombre: 'Peluchin', categoria: 'Perro', fotos: 'FOTOS', descripcion: 'Perro chido', anunciante: 'Anunciante', ubicacion: 'ubicacion' })
    res.send([mascota1, mascota2])
}

function obtenerMascota(req, res) {
    console.log('hola')
    var mascota1 = new Mascota({ id: 1, nombre: 'Toby', categoria: 'Perro', fotos: 'FOTOS', descripcion: 'Perro chido', anunciante: 'Anunciante', ubicacion: 'ubicacion' })
    var mascota2 = new Mascota({ id: 2, nombre: 'Peluchin', categoria: 'Perro', fotos: 'FOTOS', descripcion: 'Perro chido', anunciante: 'Anunciante', ubicacion: 'ubicacion' })
    res.send([mascota1, mascota2].filter(mascota => mascota.id === +req.params.id))
}

function modificarMascota(req, res) {
    // simulando una mascota previamente existente que el cliente modifica
    var mascota1 = new Mascota({ id: 1, nombre: 'Toby', categoria: 'Perro', fotos: 'FOTOS', descripcion: 'Perro chido', anunciante: 'Anunciante', ubicacion: 'ubicacion' })
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