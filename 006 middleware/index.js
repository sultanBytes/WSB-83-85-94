const express = require('express');

const app = express();

const token = 'e5432';

const checkToken = (req, res, next) => {
    const userToken = req.params.val;

    console.log(userToken);

    if (!userToken) {
        res.status(400).json({msg:'Please add token'});
    }

    else if (userToken != token) {
    res.status(401).json({msg:"Invalid token"});
    }
    else {
        next();
    }
};

app.use(express.json());
app.use(checkToken);

app.get('/user/:val?', (req, res) => {
    res.status(200).json({msg:'Api fetched successfully'});
})

app.get('/admin/:val?', (req, res) => {
    res.status(200).json({msg:'Api fetched successfully'});
})

app.get('/client/:val?', (req, res) => {
    res.status(200).json({msg:'Api fetched successfully'});
})


app.listen(5500, () => {
    console.log('server is running on port 5500');
})