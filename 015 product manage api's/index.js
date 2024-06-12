const express = require('express');
const allRoutes = require('./src/app');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use(allRoutes);

app.listen(process.env.PORT, ()=>{
    console.log(`server is running on port ${process.env.PORT}`);
});