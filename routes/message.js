var express = require('express');
var email = require('email');
var router = express.Router();

router
.route('/')
.post((req, res, next) => {
    email.send(req.body.message)
    .then(r => res.status(200).end())
    .catch(err => res.status(500).end(err));
});

module.exports = router;