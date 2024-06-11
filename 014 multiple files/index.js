const express = require('express');
// const mongoose = require('mongoose');
// const multer = require('multer');
const upload = require('./middlerwares/multer');
require('./config');

const app = express();

app.post('/insert_product', upload, (req,res)=>{
    res.status(200).json({message:'file uploaded'});
})

app.listen(5200, ()=>{
    console.log('server is running on port 5200');
});