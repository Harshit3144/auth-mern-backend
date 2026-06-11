const ensureAuthenticated = require('../Middlewares/Auth');


const router = require ('express').Router();



router.get('/',ensureAuthenticated,(req,res)=>{
    console.log('---logged in user details---',req.user);
    res.status(200).json([
        {
            name:"Mobile",
            price:10000
        },
        {
            name:"Bike",
            price:150000
        },
        {
            name:"Car",
            price:500000
        },
        {
            name:"Laptop",
            price:35000
        },
        {
            name:"TV",
            price:"30000"
        }
    ])
});


module.exports = router;