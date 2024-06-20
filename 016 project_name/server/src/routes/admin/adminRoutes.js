const express = require('express');
const { adminLogin } = require('../../controllers/controllers');

const adminRoutes = express.Router();


adminRoutes.post('/login', adminLogin);

// adminRoutes.get('/check', (req,res)=>{
//     res.send('hello');
// });

// adminRoutes.post('/getData', (req, res)=>{

//     const data = req.body;
//     console.log(data);
//     res.send('hello');
// });

module.exports = adminRoutes;