const mongoose =require('mongoose')

const Contactschema = new mongoose.Schema(
    {
      username:String,
      useremail:String,
      userphoneno:String,
    },
    {
      collection:"acmdata"
    }
)
module.exports =mongoose.model("acmdata",Contactschema)