const Product = require("../../models/product/Product");

const insertProduct = async(req, res)=>{
    try{
        const { name, description, price, mrp} = req.body;

        const thumbnail = req.files.thumbnail[0].filename;

        const images = req.files.images.map((imgData)=>{
            return imgData.filename;
        });

        console.log(thumbnail);
        console.log(images);

        const dataToInsert = new Product({
            name,
            description,
            price,
            mrp,
            thumbnail,
            images
        });

        const response = await dataToInsert.save();

        res.status(200).json({message:'product inserted', data:response});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:'internal server error'});
    }
   
};

module.exports = insertProduct;