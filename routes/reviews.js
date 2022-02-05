const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('products/reviews');
});

module.exports = router;