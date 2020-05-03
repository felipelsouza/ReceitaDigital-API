const { Model, DataTypes } = require('sequelize')

class medicamentos extends Model {
    static init(sequelize){
        super.init({
            PRODUTO: DataTypes.STRING
        }, {
            sequelize
        })
        medicamentos.removeAttribute('id')
    }
}

module.exports = medicamentos