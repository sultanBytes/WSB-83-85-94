const nodemailer = require('nodemailer');
require('dotenv').config();
// const otpSaver = require('./../../support/otpdata/otpMap');


const tranporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.ADMIN_MAIL,
        pass: process.env.ADMIN_APP_PASSWORD
    }
});

const otpGenrator = async(req, res)=>{
    try{
        const {email} = req.body;

        const otp = Math.floor(Math.random() * 1000000);

        // otpSaver(email, otp.toString());

        console.log(otp, email);

        const options = {
            from: process.env.ADMIN_MAIL,
            to: email,
            subject: 'OTP for password reset',
            text: `your otp is ${otp}`
        }

        tranporter.sendMail(options, (error, seccess)=>{
            if(error) return res.status(501).json({message: 'something went wrong'});

            console.log(seccess);
            res.status(200).json({message: 'otp sent to your mail'})
        });
       
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: 'internal server error'});
    }
};

module.exports = otpGenrator;