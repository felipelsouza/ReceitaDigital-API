const { Model, DataTypes } = require('sequelize')

class receitas extends Model {
    static init(sequelize){
        super.init({
            NOME_PACIENTE_RECEITA: DataTypes.STRING,
            CPF_PACIENTE_RECEITA: DataTypes.STRING,
            CPF_MEDICO: DataTypes.STRING,
            CARTAO_SUS_PACIENTE: DataTypes.INTEGER,
            MEDICAMENTO_RECEITA: DataTypes.STRING,
            DOSAGEM: DataTypes.STRING,
            DATA_RECEITA: DataTypes.DATE,
            OBS_RECEITA_PACIENTE: DataTypes.STRING
        }, {
            sequelize
        })
        receitas.removeAttribute('id')
    }
}

module.exports = receitas