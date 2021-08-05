const Router = require('express');
const router = new Router();

const productRouter = require('./productRouter');
const basketRouter = require('./basketRouter');
const typeRouter = require('./typeRouter');
const userRouter = require('./userRouter');
const mainRouter = require('./mainRouter');

router.use('/', mainRouter)
router.use('/type', typeRouter)
router.use('/product', productRouter)
router.use('/basket', basketRouter)
router.use('/user', userRouter)

module.exports = router
