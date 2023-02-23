const express = require('express');
require("dotenv").config();
const cors = require('cors');
const PORT = process.env.PORT 
const app = express();
const connect = require("./src/config/db")

app.use(express.json());
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
app.use(cors())
app.get("/", (req,res) =>{
    res.send("hello")
})

app.listen(PORT, async () =>{

    try{
        await connect();
        console.log(`listening on 8080`)

    }catch(e){
        console.log(e)
    }
})