const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
       userId:{
        type:String,
       } ,
       email:{
        type:String,
     
       },
       name:{
        type:String,
     
       },
       phone:{
        type:Number,
       },
       city:{
        type:String,      
        }
        
    }
)

module.exports=mongoose.model('userSchema',userSchema)