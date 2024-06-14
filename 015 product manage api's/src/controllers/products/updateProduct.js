const Product = require("../../models/product/Product");
const fs = require('fs');
const path = require('path');

const updateProduct = async(req,res)=>{
    try{

        const ifExists = await Product.findOne(req.params);

        if(!ifExists) return res.status(404).json({message:'no data found'});
        const { name, description, price, mrp} = req.body;

        const data = {
            name,
            description,
            price,
            mrp
        }
    
        if(req.files.thumbnail !== undefined){
            data.thumbnail = req.files.thumbnail[0].filename;

            if(fs.existsSync(path.join('src', 'uploads', ifExists.thumbnail))){
                fs.unlinkSync(path.join('src', 'uploads', ifExists.thumbnail))
            };


        }

        if(req.files.images !== undefined){

            const images = req.files.images.map((imgData)=>{
                return imgData.filename;
            });

            data.images = images;

            ifExists.images.forEach((img)=>{
                if(fs.existsSync(path.join('src', 'uploads',img))){
                    fs.unlinkSync(path.join('src', 'uploads',img))
                };
            })
        };


        const response = await Product.updateOne(req.params, {$set : data});

        console.log(response);
        res.status(200).json({message:'data updated', data:response});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:'internal server error'});
    }
};

module.exports = updateProduct;