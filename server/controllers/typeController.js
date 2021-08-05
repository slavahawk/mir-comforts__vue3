const {Type} = require('../models/models');
const ApiError = require('../error/ApiError');

class TypeController {
    async create(req, res) {
        const {name} = req.body
        const type = await Type.create({name})
        return res.json(type)
    }

    async getAll(req, res, next) {
        const type = await Type.findAll()
        if (!type) {
            return next(ApiError.badRequest('Ошибка на backend'))
        }
        return res.json(type)
    }
}

module.exports = new TypeController()