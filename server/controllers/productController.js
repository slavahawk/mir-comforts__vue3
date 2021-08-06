const uuid = require('uuid');
const path = require('path');
const {Product, ProductLinens, ProductBlankets, ProductPillows, ProductAccessories} = require('../models/models');
const ApiError = require('../error/ApiError')

class ProductController {
    async create(req, res, next) {
        try {
            let {name, price, description, typeId, linens, blankets, pillows, accessories} = req.body
            const {image} = req.files
            let fileName = uuid.v4() + ".jpg"
            image.mv(path.resolve(__dirname, '..', 'static', fileName))
            const product = await Product.create({name, price, description, linens, typeId, image: ''})

            if (linens) {
              await  ProductLinens.create({
                    product_id: product.id,
                    size: '435',
                    materials: '5456',
                    colors: '5465'
                })
            }

            if (blankets) {
                blankets = JSON.parse(blankets)
                blankets.forEach(i =>
                    ProductBlankets.create({
                        product_id: product.id,
                        size: i.size,
                        materials: i.materials,
                    })
                )
            }

            if (pillows) {
                pillows = JSON.parse(pillows)
                pillows.forEach(i =>
                    ProductPillows.create({
                        product_id: product.id,
                        size: i.size,
                        materials: i.materials,
                    })
                )
            }

            if (accessories) {
                accessories = JSON.parse(accessories)
                accessories.forEach(i =>
                    ProductAccessories.create({
                        product_id: product.id,
                        size: i.size,
                        materials: i.materials,
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

        const checkType = () => {
            if (typeId == 1) return [{model: ProductLinens, as: 'linens'}]
            if (typeId == 2) return [{model: ProductBlankets, as: 'blankets'}]
            if (typeId == 3) return [{model: ProductPillows, as: 'pillows'}]
            if (typeId == 4) return [{model: ProductAccessories, as: 'accessories'}]
        }

        if (!typeId) products = await Product.findAndCountAll({limit, offset})
        if (typeId) products = await Product.findAndCountAll({where: {typeId}, limit, offset, include: checkType()})
        return res.json(products)
    }

    async getOne(req, res, next) {
        const {id} = req.params;
        const checkType = () => {
            if (typeId == 1) return [{model: ProductLinens, as: 'linens'}]
            if (typeId == 2) return [{model: ProductBlankets, as: 'blankets'}]
            if (typeId == 3) return [{model: ProductPillows, as: 'pillows'}]
            if (typeId == 4) return [{model: ProductAccessories, as: 'accessories'}]
        }
        const product = await Product.findOne({where: {id}, include: checkType()});

        if (!id) return next(ApiError.badRequest('Не задан ID'));
        if (product === null) return next(ApiError.special('Товар с вашим ID не найден'));

        return res.json(product);
    }
}

function setTypeItemsForInfo() {

}

module.exports = new ProductController()
