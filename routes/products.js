const router = require('express').Router();
const productsCtrl = require('../controller/products');


router.get('/', (productsCtrl.index));
// router.get('/', (req, res) => {
//     res.send("Hello World");
// });

module.exports = router;