const router = require('express').Router();
const ctrl = require('../controller/reviews');

router.get('/', ctrl.displayReviewPage);

router.get('/:id', ctrl.displaySingleReview);

router.post('/:id', ctrl.postReview);


module.exports = router;