const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const BasketProduct = sequelize.define('basket_product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    product_id: {type: DataTypes.INTEGER, primaryKey: true},
    name: {type: DataTypes.STRING, allowNull: false},
    image: {type: DataTypes.STRING, allowNull: false},
    count: {type: DataTypes.INTEGER, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false}
})

const Product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    image: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false}
})

const ProductLinens = sequelize.define('product_linens', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    product_id: {type: DataTypes.INTEGER, primaryKey: true},
    size: {type: DataTypes.STRING, allowNull: false},
    materials: {type: DataTypes.STRING, allowNull: false},
    colors: {type: DataTypes.STRING, allowNull: false}
})

const ProductBlankets = sequelize.define('product_blankets', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    product_id: {type: DataTypes.INTEGER, primaryKey: true},
    size: {type: DataTypes.STRING, allowNull: false},
    materials: {type: DataTypes.STRING, allowNull: false}
})

const ProductPillows = sequelize.define('product_pillows', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    product_id: {type: DataTypes.INTEGER, primaryKey: true},
    size: {type: DataTypes.STRING, allowNull: false},
    materials: {type: DataTypes.STRING, allowNull: false},
})

const ProductAccessories = sequelize.define('product_accessories', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    product_id: {type: DataTypes.INTEGER, primaryKey: true},
    aroma: {type: DataTypes.STRING, allowNull: false},
    materials: {type: DataTypes.STRING, allowNull: false},
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})


User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketProduct)
BasketProduct.belongsTo(Basket)

Product.hasMany(ProductLinens, {as: 'linens'})
ProductLinens.belongsTo(Product)

Product.hasMany(ProductBlankets, {as: 'blankets'})
ProductBlankets.belongsTo(Product)

Product.hasMany(ProductPillows, {as: 'pillows'})
ProductPillows.belongsTo(Product)

Product.hasMany(ProductAccessories, {as: 'accessories'})
ProductAccessories.belongsTo(Product)

Product.hasOne(BasketProduct)
BasketProduct.hasOne(Product)

Type.hasMany(Product)
Product.belongsTo(Type)


module.exports = {
    Type, Product, BasketProduct, User, Basket, ProductLinens, ProductBlankets, ProductPillows, ProductAccessories
}
