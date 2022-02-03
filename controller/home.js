const Product = require('../model/products');

function index(req, res){
    Product.find({}, (err, product) => {
        if (err) res.send(err);
        res.render('home',{
            product,
            products: req.product,
            user: req.user
        } );

    })
}

module.exports = {
    index
};