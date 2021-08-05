const Router = require('express');
const router = new Router();
const basketController = require('../controllers/basketController');

router.get('/', basketController.getAll)
router.delete('/', basketController.delete)

module.exports = router