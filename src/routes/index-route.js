'use strict'

const express = require('express');
const router = express.Router();

const route = router.get('/', (req, res) => {
    res.status(200).send({
        title: 'Node API',
        version: '0.0.3'
    });
});

module.exports = router;