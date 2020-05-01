const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const Receitas = require('../models/Receitas')

const connection = new Sequelize(dbConfig)

Receitas.init(connection)

module.exports= connection