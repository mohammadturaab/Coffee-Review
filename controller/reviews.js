const Product = require('../model/products');
const User = require('../model/index');
const Review = require('../model/reviews');

function displayReviewPage(req, res){
    //Find all products and reviews
    Product.find({}, (err, product) => {
        if(err) res.send(err);
        Review.find({}, (err, reviewFound) => {
            console.log(reviewFound);
            if(err) res.send(err);
            res.render('products/reviews', {
                product,
                products: req.product,
                user: req.user,
                reviewFound
            });     
        })
    });
}

function displaySingleReview (req, res){
    //Search product, then pull in all of its reviews.
    Product.findById(req.params.id, (err, product) => {
        if (err) res.send(err);
        Review.find({product: product._id}, (err, reviewFound) => {
            if(err) res.send(err);
            res.render('products/singleReview',{
                product,
                products: req.product,
                user: req.user,
                reviewFound
            });
        });
    });
}


module.exports = {
    displayReviewPage,
    displaySingleReview,
}