<<<<<<< HEAD
const Medicos = require('../models/Medicamentos')

module.exports = {
    async index(req, res) {
        const medicos = await Medicos.findAll()

        return res.json(medicos)
    }
=======
const Medicos = require('../models/Medicamentos')

module.exports = {
    async index(req, res) {
        const medicos = await Medicos.findAll()

        return res.json(medicos)
    }
>>>>>>> 5803e321d4870341bc3e35d2e489f71cfe345320
}