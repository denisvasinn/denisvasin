const express = require('express');
const email = require('../providers/mail.provider');
const router = express.Router();

router.post('/', (req, res) => {
    email.send(req.body.message)
        .then(_ => res.status(200).end())
        .catch(err => res.status(500).end(err));
});

module.exports = router;
