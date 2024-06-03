const express = require('express');

const router1 = express.Router();

const router2 = express.Router();
const app = express();

const m1 = (req,res,next)=>{
    console.log('m1 called');

    next();
}

const m2 = (req,res,next)=>{
    console.log('m2 called');
    next();
}

router1.use(m1);
router2.use(m2);

app.get('/', (req,res)=>{
    res.send('Hello World');
});

app.get('/hellouser', (req,res)=>{
    res.send('user direct')
})

router1.get('/user', (req,res)=>{
    res.send('r1-user-get')
});

router1.get('/',(req,res)=>{
    res.send('home router 1')
})


router1.post('/user', (req,res)=>{
    res.send('r1-user-post')
})

router2.get('/user', (req,res)=>{
    res.send('r1-user-get')
});


router2.post('/user', (req,res)=>{
    res.send('r1-user-post')
})


router2.put('/hello', (req,res)=>{
    res.send('r2done')
});

app.use('/route1', router1);
app.use('/route2', router2);


app.listen(5000, ()=>{
    console.log(`server is running on port 5000`);
})