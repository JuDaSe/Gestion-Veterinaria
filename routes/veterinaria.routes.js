
const express = require('express')
const router = express.Router()
const tipoMascotas    = require('../services/tipoMascotas.service')
const razas           = require('../services/razas.service')
const Mascotas        = require('../services/mascotas.services')


// Crea el tipo de mascota
router.post('/tipo', async (req, res) => {
    const tipomascotas  = req.body
    const respuesta = await tipoMascotas.nuevo(tipomascotas)
    res.send(respuesta)
})

// Crea la mascota
router.post('/mascotas', async (req, res) => {
    const mascotas  = req.body
    const respuesta = await Mascotas.nuevo(mascotas)
    res.send(respuesta)
})

// Crea una nueva Raza
router.post('/raza', async (req, res) => {
    const raza  = req.body
    const respuesta = await razas.nuevo(raza)
    res.send(respuesta)
})


// Eliminar tipo de mascota por ID
router.delete('/tipo/:id', async (req, res) => {
    const id  = req.params.id
    const respuesta = await tipoMascotas.eliminar(id)
    res.send(respuesta)
})

// Eliminar Raza por ID
router.delete('/raza/:id', async (req, res) => {
    const id  = req.params.id
    const respuesta = await razas.eliminar(id)
    res.send(respuesta)
})

// Eliminar Mascota por ID
router.delete('/mascota/:id', async (req, res) => {
    const id  = req.params.id
    const respuesta = await Mascotas.eliminar(id)
    res.send(respuesta)
})

router.get('/mascotas', async (req, res) => {
    const mascotas = await Mascotas.todos()
    res.send(mascotas)
})

// Actualiza en la lista la mascota ya agregada
router.put('/mascotas', async (req, res) => {
    const mascota  = req.body
    const respuesta = await Mascotas.actualizar(mascota)
    res.send(respuesta)
})

// router.get('/mascotas', async (req, res) => {
//     const id  = req.params.id
//     const mascotas = await Mascotas.obtenerId(id)
//     res.send(mascotas)
// })

module.exports = router