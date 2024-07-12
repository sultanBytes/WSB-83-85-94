const JWT = require('jsonwebtoken');
require('dotenv').config();


const verifyJWT = (req,res,next)=>{
    const auth = req.headers.authorization;
    const token = auth.split(' ')[1];

    if(!token) return res.status(400).json({message: 'please log in'})

    JWT.verify(token, process.env.JWT_KEY, (error, decode)=>{
        if(error) return  res.status(400).json({message: 'invalid token'});

        next();
    });
};

module.exports = verifyJWT;