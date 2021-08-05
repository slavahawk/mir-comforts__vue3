const {Type, Product} = require('../models/models');
const ApiError = require('../error/ApiError');

class TypeController {
    async get(req, res, next) {
        const type = await Type.findAll()
        const products = await Product.findAll()
        if (!type && !products) {
            return next(ApiError.badRequest('Ошибка на backend'))
        }
        return res.json({
            type: type,
            products: products
        })
    }
}

module.exports = new TypeController()
