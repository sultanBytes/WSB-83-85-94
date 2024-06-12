const mongoose = require('mongoose');
const { type } = require('os');
const { boolean } = require('webidl-conversions');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    mrp:{
        type:Number,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    images:{
        type:Object,
        required:true
    },
    status:{
        type:boolean,
        default:true
    },
    created_at:{
        type:Object,
        default: Date()
    },
    updated_at:{
        type:Object
    }
});

const Product = mongoose.model('products', productSchema);

module.exports = Product;