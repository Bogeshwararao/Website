const mongoose =require('mongoose')

const Contactschema = new mongoose.Schema({
     name:{
        type:String,
        required:true
     },
     email:{
        type:String,
        required:true
     },
     phone:{
        type:Integer,
        required:true
     },
     date:{
        type:Date,
        default:Date.now
     }
})
module.exports =mongoose.model('acmdata',Contactschema)