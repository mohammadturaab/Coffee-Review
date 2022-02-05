const Product = require('../model/products');
const User = require('../model/index');


function displaySingleReview (req, res){

    Product.findById(req.params.id, (err, product) => {
        if (err) res.send(err);
        console.log(product);
        res.render('products/singleReview',{
            product,
            products: req.product,
            user: req.user
        });
    });
}

module.exports = {
    displaySingleReview
}