const express = require("express")
const ReceitasController = require('./controllers/ReceitasController')
const MedicamentosController = require('./controllers/MedicamentosController')
const UsersController = require('./controllers/UsersController')
const MedicosController = require('./controllers/MedicosController')

const routes = express.Router()

routes.get('/medicamentos', MedicamentosController.index)

routes.get('/receitas', ReceitasController.index)
routes.post('/receitas', ReceitasController.store)
routes.delete('/receitas', ReceitasController.delete)

routes.get('/users', UsersController.index)

routes.get('/medicos', MedicamentosController.index)
routes.get('/medicos/:CPF_MEDICO/receitas', ReceitasController.index)
routes.post('/medicos/:CPF_MEDICO/receitas', ReceitasController.store)

module.exports = routes