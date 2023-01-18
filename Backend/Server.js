const express=require('express');
const app = express()
const mongoose = require('mongoose');
const dotenv =require("dotenv");
app.use(express.json());
dotenv.config({path:'./config.env'});


const mongoourl = process.env.DATABASEACCESS;
const PORT = process.env.PORT



mongoose.connect(mongoourl,{
    useNewUrlParser:true,
    // useCreateIndex:true,
    // userUnifiedTopology:true,
    // useFindAndmodify:false
}).then(()=>{
    console.log("connected to database");
}).catch((err) => { console.log(err);
})







require("./Schemacontact");

const user = mongoose.model("acmdata");


app.post("/Contact",async(req,res)=>{
    const{username,useremail,userphone}= req.body;
    try{
        await user.create({
            username,
            useremail,
            userphoneno,
        });
        res.send({status:"ok"})
    }catch(error){
        res.send({status:"error"})
    }
})


app.listen(PORT,()=>{
    console.log("server started");
})






















