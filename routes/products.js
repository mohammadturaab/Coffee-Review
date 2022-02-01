const router = require('express'). Router();
const productsCtrl = require('../controller/products');

router.get('/', (req,res)=>{
    
    res.send("Products Number:");
});
// router.get('/', productsCtrl.index);

module.exports = router;