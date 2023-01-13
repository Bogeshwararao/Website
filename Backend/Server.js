const express =require('express')
const app= express()
const mongoose =require('mongoose')
// const dotenv = require('dotenv')
// const routesUrls =require('../Backend/routes')
// const cors = require('cors')
app.use(express.json())

// dotenv.config()

// mongoose.connect(process.env.DATA_BASE_ACCESS,()=> console.log("Database connected"))
const mongoUrl = "mongodb+srv://ACM-SIST:ACM-SIST@cluster0.glgcpzn.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoUrl,{
    
}).then(()=>{
    console.log("Connected to databse")
}).catch(err=>console.log(err))





require("../Backend/Schemacontact");
const user = mongoose.model("acmdata");

// app.post("/Contact",async(req,res)=>{
//     const {name,email,phone}.req.body;
//     try{
 
//     }
// } )
// app.use(cors())
// app.use('/api',  routesUrls )
app.listen(4000,()=>console.log("server is up and running"))