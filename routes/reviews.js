const router = require('express').Router();
const ctrl = require('../controller/reviews');



router.get('/', ctrl.displayReviewPage);


router.get('/:id', ctrl.displaySingleReview);

router.get('/:id/:id/edit', ctrl.editReview);

router.post('/:id', isLoggedIn, ctrl.postReview);

router.put('/:id/:id', ctrl.updateReview);

router.delete("/:id", ctrl.destroy);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router;