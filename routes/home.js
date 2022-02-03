const router = require('express').Router();
const homeCtrl = require('../controller/home')


router.get('/', homeCtrl.index);

module.exports = router;