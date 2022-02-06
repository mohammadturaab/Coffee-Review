const router = require('express').Router();
const ctrl = require('../controller/reviews');



router.get('/', ctrl.displayReviewPage);


router.get('/:id', ctrl.displaySingleReview);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

router.post('/:id', isLoggedIn, ctrl.postReview);

router.delete("/:id", isLoggedIn, ctrl.destroy);


module.exports = router;