const express = require('express');
const router = express.Router();

router.get('/', (_, res) => res.status(200).render('index.html'));

module.exports = router;
