const functions = require("firebase-functions");
const express=require("express");
const cors=require("cors");
const secretKey="sk_test_51LxPodCI8b6kimS5THu9vdHNUHRejOL8lxtT41ny1vj1SaEhwNzUBBkPfGUOfvbYTOSBfOdYwfr9wdEuJjFkYLbm00OoAq9KFi"
const stripe=require('stripe')("sk_test_51LxPodCI8b6kimS5THu9vdHNUHRejOL8lxtT41ny1vj1SaEhwNzUBBkPfGUOfvbYTOSBfOdYwfr9wdEuJjFkYLbm00OoAq9KFi");
;
// API

// APP config /initilalization 
const app=express();
// Add Middlewares to the express app
app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
    origin: '*',
}));
app.use(express.json());
// API Routes
app.get('/',(request,response)=>{
    response.status(200).send("hellow world")
})
// app.get('/payments/create',(req,res)=>{
// res.status(200).send('hey its get function');
// });
// (async ()=>{
//     const paymentIntent=await stripe.paymentIntents.create({
//         amount:123, //subunits of the currency
//         currency:'usd',
//     })
// ;
// })();
    app.post('/payments/create',async (req,res) =>{
        const totalPrice=req.query.total;
        const paymentIntent=await stripe.paymentIntents.create({
            amount:req.query.total, //subunits of the currency
            currency:'usd',
        })
        ;
            
            res.status(200).send({
                    clientSecret:paymentIntent.client_secret
                })
        });
    
// listen command
exports.api=functions.https.onRequest(app);
//Example endpoint () \
// http://127.0.0.1:5001/clone-app-925c5/us-central1/api