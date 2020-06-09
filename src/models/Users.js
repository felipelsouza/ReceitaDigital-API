const { Model, DataTypes } = require('sequelize')

class medico extends Model {
    static init(sequelize){
        super.init({
            EMAIL_MEDICO: DataTypes.STRING,
            SENHA_MEDICO: DataTypes.STRING,
            CPF_MEDICO: DataTypes.STRING,
        }, {
            sequelize
        })
        medico.removeAttribute('id')
    }
}

module.exports = medico