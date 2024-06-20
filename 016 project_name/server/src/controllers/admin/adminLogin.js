const Admin = require("../../models/admin/admin");

const adminLogin = async (req, res) => {
    try {
        // const {email,password} = req.body;

        const ifMail = await Admin.find({ mail: req.body.mail });

        console.log(ifMail);
        if (!ifMail) return res.status(404).json({message:'invalid mail'});

        if(ifMail[0].password !== req.body.password) return res.status(402).json({message:'invalid password'});

        res.status(200).json({message:'admin logged in successfull', data: ifMail});
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error' });
    }
};

module.exports = adminLogin;