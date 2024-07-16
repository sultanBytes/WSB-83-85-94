require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const reqPayment = async(req,res)=>{
    try{
        console.log(req.body);

        const lineItems = req.body.data.map((cart_item)=>({
            price_data: {
                currency: 'inr',
                product_data: {
                    name: cart_item.coursename,
                
                    // description: cart_item.description,
                    // images: [cart_item.image],
                    // image: cart_item.image
            },
            unit_amount:cart_item.courseprice * 100,
            quantity: 1
        }}));


        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/cancel'
        })
        res.status(200).json({message:'done', session:session.id});

        console.log(session);
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:' interenal server error'});
    }
};

module.exports = reqPayment;