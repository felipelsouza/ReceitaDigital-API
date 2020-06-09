const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const Medicos = require('../models/Medicos')
const Receitas = require('../models/Receitas')
const Medicamentos = require('../models/Medicamentos')
const Users = require('../models/Users')

const connection = new Sequelize(dbConfig)

Medicos.init(connection)
Receitas.init(connection)
Medicamentos.init(connection)
Users.init(connection)

Medicos.associate(connection.models)
Receitas.associate(connection.models)

Medicos.associate(connection.models)
Receitas.associate(connection.models)


module.exports = connection