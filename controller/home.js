const Product = require('../model/products');

function index(req, res){
    Product.find({}, (err, product) => {
        if (err) res.send(err);
        res.render('home',{
            product,
            products: req.product,
        } );

    })
}

module.exports = {
    index
};