const router = require('express').Router();

router.get('/', (req,res) => {
    res.render('index', {
        title: "Home Page"
    })
})

router.get('/sign' ,(req,res) => {
    res.render('signup', {
        title: "Sign Up Page"
    })
})

module.exports = router;
