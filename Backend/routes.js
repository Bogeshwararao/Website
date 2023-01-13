const { request, response } = require('express')
const express =require('express')
const router =express.Router()
const Contactschema =require('../Backend/Schemacontact')


router.post('/Contact',(request,response)=>{
   const signedUpuser = new Contactschema({
            name:request.body.name,
            email:request.body.email,
            phone:request.body.phone
   })
   signedUpuser.save()
   .then(data=>{
    response.json(data)
   })
   .catch(error =>{
     response.json(error)
   })
})




module.exports = router;