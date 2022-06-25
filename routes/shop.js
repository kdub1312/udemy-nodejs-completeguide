const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/users', (req, res, next) => {
    console.log('/users middleware');
    res.send('<p>the middleware that handles just /users</p>');
})

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
})

module.exports = router;