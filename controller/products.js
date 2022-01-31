const Products = require('../models/students/products');

function index (req, res) {
    Products.find({}, function(err, products){
        res.render('products/index',{
            products
        })
    });
}