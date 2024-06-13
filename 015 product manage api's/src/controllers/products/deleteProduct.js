const Product = require("../../models/product/Product");
const fs = require('fs');
const path = require('path');

const deleteProduct = async(req, res)=>{
    try{
        const response = await Product.findOneAndDelete(req.params);

        if(response === null) return res.status(402).json({message:'product id does not exists'});



        if(fs.existsSync(path.join('src', 'uploads', response.thumbnail))){
            fs.unlinkSync(path.join('src', 'uploads', response.thumbnail))
        };

        response.images.forEach((img)=>{
            if(fs.existsSync(path.join('src', 'uploads',img))){
                fs.unlinkSync(path.join('src', 'uploads',img))
            };
        })

        res.status(200).json({message:'data deleted successfully'});
    }
    catch(error)
    {
        console.log(error);
        if(error.reason) return res.status(400).json({meassage:'invalid product id'});
        res.status(500).json({meassage:'internal server error'});
    }
};

module.exports = deleteProduct;