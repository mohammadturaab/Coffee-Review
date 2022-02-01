const Product = require('../model/index');

module.exports = {
    index,
};

function index (req, res) {
    Product.find({}, function(err, products){
        res.render('products/index',{
            products
        })
    });
}

