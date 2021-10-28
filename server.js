const express = require("express");
//const fs = require('fs');

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


app.use("/prod", productController);

let listener = app.listen(9703, async ()=>{
    await connect();
    console.log("Listening on Port 9703");
})
