const deleteProduct = require('./products/deleteProduct');
const insertProducts = require('./products/insertProduct');
const readProducts = require('./products/readProducts');
const updateProduct = require('./products/updateProduct');

module.exports = {
    insertProducts,
    readProducts,
    deleteProduct,
    updateProduct
};