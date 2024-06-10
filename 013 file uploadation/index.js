const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const Product = require('./models/Product');

mongoose.connect('mongodb+srv://sultanwscube:WkNaz41L6gxs0UXB@sultan.f3yzdsd.mongodb.net/file_upload_tmp?retryWrites=true&w=majority&appName=sultan')
.then(()=>{
    console.log('database connected');
})
.catch((err)=>{
    console.log(err);
});

const app = express();

const multerStorage = multer.diskStorage({
    destination:function(req,file,next){
        next(null, 'uploads');
    },
    filename:function(req,file,next){
        const splitArr = file.originalname.split('.');
        const fileExtenstion = splitArr[splitArr.length - 1];
        // console.log(fileExtenstion);
        next(null, Date.now() + '.' + fileExtenstion);
    }
});

const upload = multer({storage:multerStorage}).single('thumbnail');

app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.post('/insert_single_file',upload, async(req,res)=>{
    try{
        const { name } = req.body;

        // console.log(req.file.filename);

        const productData = new Product({
            name,
            thumbnail:req.file.filename
        });

        const response = await productData.save();
        res.status(200).json({message:'data inserted successfully', data:response});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:'internal server error'});
    }
});

app.get('/read_filedata', async(req,res)=>{
    const response = await Product.find();

    const dataWithPath = response.map((data)=>{
        data.thumbnail = `${req.protocol}://${req.get('host')}/uploads/${data.thumbnail}`;

        return data;
    });

    console.log(dataWithPath);

    res.status(200).json({message:'data fetched successfully', data: dataWithPath});

    console.log(`${req.protocol}://${req.get('host')}/uploads`);
});

app.listen(5400, ()=>{
    console.log("server is running on port 5400");
});

// http://localhost:5400/uploads/1718022697966.jpg