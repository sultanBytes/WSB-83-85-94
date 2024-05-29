const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send('hello');
});

app.get('/home', (req,res)=>{
    res.send('home');
})

app.post('/', (req,res)=>{
    res.send('post');
})

app.post('/home', (req,res)=>{
    res.send('home post')
});

app.listen(5200, ()=>{
    console.log('server is running on port 5200');
});