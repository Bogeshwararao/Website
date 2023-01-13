const mongoose =require('mongoose')

const Contactschema = new mongoose.Schema(
    {
      name:String,
      email:String,
      phone:String,
    },
    {
      collection:"acmdata"
    }
)
module.exports =mongoose.model('acmdata',Contactschema)