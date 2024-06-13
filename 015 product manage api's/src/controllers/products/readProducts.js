const Product = require("../../models/product/Product");

const readProducts = async(req,res)=>{
    try{
        const response = await Product.find();

        const filePath = `${req.protocol}://${req.get('host')}/uploads`;

        res.status(200).json({mesage:'data fetched successfully', data: response, filepath:filePath});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:'internal server error'});
    }
};

module.exports = readProducts;