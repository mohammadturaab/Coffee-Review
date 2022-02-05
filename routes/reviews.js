const router = require('express').Router();
const ctrl = require('../controller/reviews');

router.get('/', (req, res) => {
    res.render('products/reviews');
});

router.get('/:id', ctrl.displaySingleReview);


module.exports = router;