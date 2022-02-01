const router = require('express'). Router();
const productsCtrl = require('../controller/products');

router.get('/products', productsCtrl.index);

module.exports = router;