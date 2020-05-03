const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const Receitas = require('../models/Receitas')
const Medicamentos = require('../models/Medicamentos')

const connection = new Sequelize(dbConfig)

Receitas.init(connection)
Medicamentos.init(connection)

module.exports= connection