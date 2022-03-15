const router = require('express').Router();
const productsCtrl = require('../controller/products');


router.get('/', (productsCtrl.index));

module.exports = router;