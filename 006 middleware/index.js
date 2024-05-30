const express = require('express');

const app = express();

const checkToken = (req,res,next)=>{
    console.log('object');

    next();
};

app.get('/user', checkToken, (req,res)=>{
    res.send('data fetched successfully');
})


app.listen(5500,()=>{
    console.log('server is running on port 5500');
})