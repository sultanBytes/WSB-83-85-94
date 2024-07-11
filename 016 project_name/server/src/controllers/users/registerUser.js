const User = require("../../models/user/user");
const otpSave = require("../../support/otpdata/otpMap");

const registerUser = async (req,res)=>{
    try{
        console.log(req.body);

        const sentOtp = otpSave.get(req.body.email);

        if(!req.body.otp) return res.status(401).json({message: 'please provoide a otp'});
        if( Number( req.body.otp) !== sentOtp) return res.status(401).json({message: 'please provoide a valid otp'});

        const userdata = new User({
            email:req.body.email,
            password:req.body.password
        });

        const response = await userdata.save();

        const {password ,...filteredResponse} = response._doc


        res.status(200).json({message: 'user register seccessfully', data: filteredResponse});  

        otpSave.delete(req.body.email);
    }
    catch(error)
    {
        console.log(error);

        if(error.code === 11000) return res.status(400).json({message: 'user already exists'});
        res.status(500).json({message: 'internal server error'});
    }
};

module.exports = registerUser;