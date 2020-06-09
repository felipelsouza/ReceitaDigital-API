const Users = require('../models/Users')

module.exports = {
    async index(req, res){
        const users = await Users.findAll()
        return res.json(users)
    }
}