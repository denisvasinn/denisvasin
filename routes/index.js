var express = require('express');
var router = express.Router();

router
.route('/')
.get((req, res, next) => {
    res.status(200).render('index.html');
})
.post((req, res, next) => {

});

module.exports = router;