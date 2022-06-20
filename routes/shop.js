const path = require('path');
const express = require('express');

const router = express.Router();

// router.use('/', (req, res, next) => {
//     console.log('this will always run!');
//     next();
// })

router.get('/users', (req, res, next) => {
    console.log('/users middleware');
    res.send('<p>the middleware that handles just /users</p>');
})

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
})

module.exports = router;