const Receitas = require('../models/Receitas')
const Medicos = require('../models/Medicos')

module.exports = {
    async index(req, res) {
        const { ID_MEDICOS } = req.params
        const medicos = await Medicos.findByPk(ID_MEDICOS, {
            include: {
                association: 'RECEITAS'
            }
        })

        return res.json(medicos.RECEITAS)
    },
    async store(req, res) {
        const { ID_MEDICOS } = req.params;
        const { NOME_PACIENTE_RECEITA,
            CPF_PACIENTE_RECEITA,
            CPF_MEDICO,
            CARTAO_SUS_PACIENTE,
            MEDICAMENTO_RECEITA,
            DOSAGEM,
            DATA_RECEITA,
            OBS_RECEITA_PACIENTE
        } = req.body

        const medicos = await Medicos.findByPk(ID_MEDICOS)

        if(!medicos) {
            return res.status(400).json({ error: 'Medico não encontrado'})
        }

        const receitas = await Receitas.create({
            NOME_PACIENTE_RECEITA,
            CPF_PACIENTE_RECEITA,
            CPF_MEDICO,
            CARTAO_SUS_PACIENTE,
            MEDICAMENTO_RECEITA,
            DOSAGEM,
            DATA_RECEITA,
            OBS_RECEITA_PACIENTE,
            ID_MEDICOS
        })

        return res.json(receitas)
    },

    async delete(req, res) {
        const { NOME_PACIENTE_RECEITA,
            CPF_PACIENTE_RECEITA,
            CPF_MEDICO,
            CARTAO_SUS_PACIENTE,
            MEDICAMENTO_RECEITA,
            DOSAGEM,
            DATA_RECEITA,
            OBS_RECEITA_PACIENTE
        } = req.body

        const receitas = await Receitas.findAll()

        await receitas.destroy()

        return res.json()
    }
}