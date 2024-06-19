const express = require('express');

const adminRoutes = express.Router();


adminRoutes.get('/check', (req,res)=>{
    res.send('hello');
});

adminRoutes.post('/getData', (req, res)=>{

    const data = req.body;
    console.log(data);
    res.send('hello');
});

module.exports = adminRoutes;