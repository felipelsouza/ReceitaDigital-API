const { Model, DataTypes } = require('sequelize')

class Receitas extends Model {
    static init(sequelize) {
        super.init({
            NOME_PACIENTE_RECEITA: DataTypes.STRING,
            CPF_PACIENTE_RECEITA: DataTypes.STRING,
            CPF_MEDICO: DataTypes.STRING,
            CARTAO_SUS_PACIENTE: DataTypes.STRING,
            MEDICAMENTO_RECEITA: DataTypes.STRING,
            DOSAGEM: DataTypes.STRING,
            DATA_RECEITA: DataTypes.DATE,
            OBS_RECEITA_PACIENTE: DataTypes.STRING
        }, {
            sequelize
        })
        //receitas.removeAttribute('id')
    }
    static associate(models) {
        this.belongsTo(models.Medicos, { foreignKey: 'ID_MEDICOS', as: 'MEDICO' })
    }
}

module.exports = Receitas