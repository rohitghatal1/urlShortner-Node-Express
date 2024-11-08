const express = require('express');
const {generateShortURL} = require('../controllers/url')

const router = express.Router();

router.post('/', generateShortURL)

module.exports = router;