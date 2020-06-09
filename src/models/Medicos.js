<<<<<<< HEAD
const { Model, DataTypes } = require('sequelize')

class Medicos extends Model {
    static init(sequelize) {
        super.init({
            NOME_MEDICO: DataTypes.STRING,
            CRM_MEDICO: DataTypes.STRING,
            CPF_MEDICO: DataTypes.STRING,
            UF_MEDICO: DataTypes.STRING
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.hasMany(models.Receitas, { foreignKey: 'CPF_MEDICO', as: 'RECEITAS'})
    }
}

=======
const { Model, DataTypes } = require('sequelize')

class Medicos extends Model {
    static init(sequelize) {
        super.init({
            NOME_MEDICO: DataTypes.STRING,
            CRM_MEDICO: DataTypes.STRING,
            CPF_MEDICO: DataTypes.STRING,
            UF_MEDICO: DataTypes.STRING
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.hasMany(models.Receitas, { foreignKey: 'CPF_MEDICO', as: 'RECEITAS'})
    }
}

>>>>>>> 5803e321d4870341bc3e35d2e489f71cfe345320
module.exports = Medicos