const Medicos = require('../models/Medicamentos')

module.exports = {
    async index(req, res) {
        const medicos = await Medicos.findAll()

        return res.json(medicos)
    }
}