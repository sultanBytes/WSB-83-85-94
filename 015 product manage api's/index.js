const express = require('express');
const allRoutes = require('./src/app');
require('dotenv').config();
const path = require('path');

const app = express();

app.use(express.json());
app.use('/uploads', express.static(path.join('src', 'uploads')));

app.use(allRoutes);

app.listen(process.env.PORT, ()=>{
    console.log(`server is running on port ${process.env.PORT}`);
});