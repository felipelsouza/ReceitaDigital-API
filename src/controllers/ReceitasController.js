const Receitas = require('../models/Receitas')

module.exports = {
    async store(req, res) {
        const { NOME_PACIENTE_RECEITA,
            CPF_PACIENTE_RECEITA,
            CARTAO_SUS_PACIENTE,
            MEDICAMENTO_RECEITA,
            DOSAGEM,
            DATA_RECEITA,
            OBS_RECEITA_PACIENTE } = req.body

        const receitas = await Receitas.create({
            NOME_PACIENTE_RECEITA,
            CPF_PACIENTE_RECEITA,
            CARTAO_SUS_PACIENTE,
            MEDICAMENTO_RECEITA,
            DOSAGEM,
            DATA_RECEITA,
            OBS_RECEITA_PACIENTE
        })

        return res.json(receitas)
    }
}