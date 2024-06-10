const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:String,
    thumbnail:String
});

const Product = mongoose.model('products', productSchema);

module.exports = Product;