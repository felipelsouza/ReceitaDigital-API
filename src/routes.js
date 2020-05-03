const express = require("express")
const ReceitasController = require('./controllers/ReceitasController')
const MedicamentosController = require('./controllers/MedicamentosController')

const routes = express.Router()

routes.get('/medicamentos', MedicamentosController.index)

routes.get('/receitas', ReceitasController.index)
routes.post('/receitas', ReceitasController.store)
routes.delete('/receitas', ReceitasController.delete)

module.exports = routes