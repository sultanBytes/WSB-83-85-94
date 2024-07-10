const otpSave = require("../../support/otpdata/otpMap");

const registerUser = async (req,res)=>{
    try{
        console.log(req.body);

        const sentOtp = otpSave.get(req.body.email);

        console.log(sentOtp, Number( req.body.otp));

        if(!req.body.otp) return res.status(401).json({message: 'please provoide a otp'});
        if( Number( req.body.otp) !== sentOtp) return res.status(401).json({message: 'please provoide a valid otp'});

        res.status(200).json({message: 'user register seccessfully'});

        otpSave.delete(req.body.email);
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({message: 'internal server error'});
    }
};

module.exports = registerUser;