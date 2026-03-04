'use strict'

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

mongoose.connect(process.env.MONGO_URI);

const Product = require('./models/product')

const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;