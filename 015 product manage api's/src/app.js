const express = require('express');
require('./db/config');
const productRoutes = require('./routes/products/productRoutes');

const allRoutes = express.Router();

allRoutes.use('/product', productRoutes);

module.exports = allRoutes;