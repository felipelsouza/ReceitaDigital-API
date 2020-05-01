const express = require("express")
const ReceitasController = require('./controllers/ReceitasController')

const routes = express.Router()

routes.post('/receitas', ReceitasController.store)

module.exports = routes