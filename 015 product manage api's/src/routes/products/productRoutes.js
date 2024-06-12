const express = require('express');
const insertProduct = require('../../controllers/products/insertProduct');
const upload = require('../../middlewares/multer/multer');

const productRoutes = express.Router();

productRoutes.post('/insert_product', upload, insertProduct);

module.exports = productRoutes;