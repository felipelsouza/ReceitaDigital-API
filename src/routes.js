const express = require("express")
const ReceitasController = require('./controllers/ReceitasController')
const MedicamentosController = require('./controllers/MedicamentosController')
const MedicosController = require('./controllers/MedicosController')

const routes = express.Router()

routes.get('/medicos', MedicosController.index)
routes.get('/medicamentos', MedicamentosController.index)

routes.get('/medicos/:CPF_MEDICO/receitas', ReceitasController.index)
routes.post('/medicos/:CPF_MEDICO/receitas', ReceitasController.store)
routes.delete('/receitas', ReceitasController.delete)

module.exports = routes