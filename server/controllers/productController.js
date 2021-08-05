const uuid = require('uuid');
const path = require('path');
const {Product, ProductInfo} = require('../models/models');
const ApiError = require('../error/ApiError')

class ProductController {
    async create(req, res, next) {
        try {
            let {name, price, size, materials, typeId, info} = req.body
            const {image} = req.files
            let fileName = uuid.v4() + ".jpg"
            image.mv(path.resolve(__dirname, '..', 'static', fileName))
            const product = await Product.create({name, price, size, materials, typeId, image: fileName })

            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    ProductInfo.create({
                        title: i.title,
                        description: i.description,
                        productId: product.id
                    })
                )
            }

            return res.json(product)
        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res, next) {
        let {typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let products;
        if (!typeId) products = await Product.findAndCountAll({limit, offset})
        if (typeId) products = await Product.findAndCountAll({where: {typeId}, limit, offset})
        return res.json(products)
    }

    async getOne(req, res, next) {
        const {id} = req.params;
        const product = await Product.findOne({
            where: {id},
            include: [{model: ProductInfo, as: 'info'}]
        });

        if (!id ) return next(ApiError.badRequest('Не задан ID'));
        if (product === null) return next(ApiError.special('Товар с вашим ID не найден'));

        return  res.json(product);
    }
}

module.exports = new ProductController()