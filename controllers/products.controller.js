const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");


router.get("/", (req,res)=>{
    return res.render("products/index.ejs");
})

router.get("/kurtis", (req,res)=>{
    return res.render("products/kurtis.ejs");
})

router.get("/cart", (req,res)=>{
    return res.render("products/cart.ejs");
})

router.get("/checkout", (req,res)=>{
    return res.render("products/checkout.ejs");
})

router.get("/finish", (req,res)=>{
    return res.render("products/finish.ejs");
})

router.get("/emptycart", (req,res)=>{
    return res.render("products/empty_cart.ejs");
})


router.get("/", async function (request, respond) {
    try
    {
        const product = await Product.find().lean().exec();
        return respond.status(201).send(product);
    }
    catch (err)
    {
        return respond.status(400).send(err.message);
    }
})

router.post("/", async function (request, respond) {
    try {
        const product = await Product.create(request.body)
        return respond.status(201).send(product);
    }
    catch (err) {
        return respond.status(400).send(err.message);
    }
});


router.get("/search/:product", async function (req, res){
    try{
      const product = await Product.find({ product_name: { $regex: req.params.product } }).lean().exec();

      return res.status(200).send(product);
    } catch (err){

        return res.status(400).send(err.message)
    }
});

module.exports = router;