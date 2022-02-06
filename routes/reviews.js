const router = require('express').Router();
const ctrl = require('../controller/reviews');

router.get('/', isLoggedIn, ctrl.displayReviewPage);

router.get('/:id', isLoggedIn, ctrl.displaySingleReview);

router.post('/:id', isLoggedIn, ctrl.postReview);

router.delete("/:id", isLoggedIn, ctrl.destroy);


module.exports = router;