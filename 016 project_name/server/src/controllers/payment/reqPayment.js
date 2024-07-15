
const reqPayment = async(req,res)=>{
    try{
        console.log(req.body);
        res.status(200).json({message:'done'});
    }
    catch(error){
        res.status(500).json({message:' interenal server error'});
    }
};

module.exports = reqPayment;