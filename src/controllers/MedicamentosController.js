const Medicamentos = require('../models/Medicamentos')

module.exports = {
    async index(req, res){
        const medicamentos = await Medicamentos.findAll()
        return res.json(medicamentos)
    }
}