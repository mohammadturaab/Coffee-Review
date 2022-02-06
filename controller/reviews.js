const Product = require('../model/products');
const User = require('../model/index');
const Review = require('../model/reviews');

function displayReviewPage(req, res){
    //Find all products and reviews
    Product.find({}, (err, product) => {
        if(err) res.send(err);
        Review.find({}, (err, reviewFound) => {
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

function postReview(req, res){
    //Create reviews and reference them to product.
    Product.findById(req.params.id, (err, product) => {
        if (err) res.send(err);
        const newReview = new Review({
            text: req.body.reviewInput,
            rating: req.body.rating,
            product: req.params.id,
        });
        newReview.save();
        product.reviews.push(newReview._id);
        product.save((err) => {
            res.redirect(`/reviews/${product._id}`);
        });
    });
}

function updateReview(req, res){
        Review.findByIdAndUpdate(req.params.id, 
            {
                $set: {
                    text: req.body.reviewInput,
                    rating: req.body.rating
                }
            }, 
            {new: true}, 
            (err, reviewFound) => {
            if(err) res.send(err);
            res.redirect(`/reviews/${reviewFound.product}`);
        });
}

function editReview(req, res){
        Review.findById(req.params.id, (err, reviewFound) => {
            if(err) res.send(err);
            res.render('products/updateReviews', {
                user: req.user,
                reviewFound
            });
        });
function destroy(req, res) {
    Review.findByIdAndRemove(req.params.id, (err, deleteReview) => {
        if (err) res.send(err);
        res.redirect(`/reviews/`);
    })
}

module.exports = {
    displayReviewPage,
    displaySingleReview,
    postReview,
    editReview,
    updateReview
    destroy
}