const Product = require('../model/products');


function index(req, res){
    Product.find({}, function(err, product){
        if (err) res.send(err);

        const context = { product: product}
        res.render('products/index');
    })
}

module.exports = {
    index
};
