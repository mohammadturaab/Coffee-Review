const router = require('express').Router();
const passport = require('passport');

const isLoggedIn = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.sendStatus(401);
    }
}

router.get("/failed", (req, res) => {
    res.send("Failed")
})
router.get("/success", isLoggedIn, (req, res) => {
    console.log(req.user);
    res.send(`Welcome ${req.user.name}`);
})

router.get('/auth/google',
    passport.authenticate('google', {
            scope:
                ['email', 'profile']
        }
    ));

router.get('/oauth2callback',
    passport.authenticate('google', {
        successRedirect: '/success',
        failureRedirect: '/failed',
    })
);

router.get("/logout", (req, res) => {
    req.logout();
    res.redirect('/');
});


module.exports = router;
