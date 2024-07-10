const nodemailer = require('nodemailer');
const otpSave = require('../../support/otpdata/otpMap');
require('dotenv').config();


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

        otpSave.set(email, otp);

        

        const options = {
            from: process.env.ADMIN_MAIL,
            to: email,
            subject: 'OTP for password reset',
            html:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            list-style: none;
        }
        .container{
            max-width: 800px;
            margin: auto;
            background-color: red;
            padding: 20px;
        }
        span{
            font-weight: 800;
            font-size: 22px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to GAGAN WORLD</h1>
        <p>
            Thank you so much
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat dolores quisquam sapiente cupiditate. Magni, temporibus quia ipsam distinctio quod, quae labore quam reiciendis vel omnis repellendus natus architecto error autem.
        </p>
        <p>
            Your one time password is <span>${otp}</span>
        </p>

        <p>
            Don't share your otp with anyone
        </p>
    </div>
</body>
</html>`
        }

        tranporter.sendMail(options, (error, seccess)=>{
            if(error) return res.status(501).json({message: 'something went wrong'});

            // console.log(seccess);
            res.status(200).json({message: 'otp sent to your mail'})
        });

        // console.log(otpSave.get(email));
       
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: 'internal server error'});
    }

    
};

module.exports = otpGenrator;