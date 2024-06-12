
const insertProduct = async(req, res)=>{
    try{
        const {} = req.body;
        res.status(200).json({message:'product inserted'});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:'internal server error'});
    }
   
};

module.exports = insertProduct;