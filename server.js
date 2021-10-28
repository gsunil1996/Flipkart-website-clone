const express = require("express");
//const fs = require('fs');

require("dotenv").config();


const path = require("path");
const connect = require("./configs/db");
const productController = require("./controllers/products.controller");
const app = express();
app.use(express.json());
//const ejs = require("ejs");

app.use(express.urlencoded({ extended: false }));

app.use("/static", express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");


app.use("/", productController);

const port = process.env.PORT || 9703;

let listener = app.listen(port, async ()=>{
    await connect();
    console.log("Listening on Port 9703");
})
