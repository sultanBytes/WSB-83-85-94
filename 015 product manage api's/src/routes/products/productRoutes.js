const express = require('express');
const upload = require('../../middlewares/multer/multer');
const { insertProducts,
    readProducts,
    deleteProduct,
    updateProduct
} = require('../../controllers/controllers');

const productRoutes = express.Router();

productRoutes.post('/insert_product', upload, insertProducts);
productRoutes.get('/read_products', readProducts);
productRoutes.delete('/delete_product/:_id', deleteProduct);
productRoutes.put('/update_product/:_id',upload, updateProduct);

module.exports = productRoutes;