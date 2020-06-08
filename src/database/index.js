const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const Medicos = require('../models/Medicos')
const Receitas = require('../models/Receitas')
const Medicamentos = require('../models/Medicamentos')

const connection = new Sequelize(dbConfig)

Medicos.init(connection)
Receitas.init(connection)
Medicamentos.init(connection)

Medicos.associate(connection.models)
Receitas.associate(connection.models)


module.exports = connection