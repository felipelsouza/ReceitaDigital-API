const express = require("express")
const ReceitasController = require('./controllers/ReceitasController')
const MedicamentosController = require('./controllers/MedicamentosController')
<<<<<<< HEAD
const UsersController = require('./controllers/UsersController')
=======
>>>>>>> 5803e321d4870341bc3e35d2e489f71cfe345320
const MedicosController = require('./controllers/MedicosController')

const routes = express.Router()

routes.get('/medicos', MedicosController.index)
routes.get('/medicamentos', MedicamentosController.index)

routes.get('/medicos/:CPF_MEDICO/receitas', ReceitasController.index)
routes.post('/medicos/:CPF_MEDICO/receitas', ReceitasController.store)
routes.delete('/receitas', ReceitasController.delete)

routes.get('/users', UsersController.index)

routes.get('/medicos', MedicamentosController.index)
routes.get('/medicos/:CPF_MEDICO/receitas', ReceitasController.index)
routes.post('/medicos/:CPF_MEDICO/receitas', ReceitasController.store)

module.exports = routes