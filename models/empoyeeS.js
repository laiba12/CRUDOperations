const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema(
    {
       employeeID:{
        type:String,
        required:true,
        maxLength:50
       } ,
       role:{
        type:String,
        required:true,
        maxLength:50,
       },
       name:{
        type:String,
        required:true,
        maxLength:50,
       },
       joinedAt:{
        type:Date,
        required:true,
       },
       reportsTo:{
        type:String,
        require:true,
        maxLength:50,
        
               }
    }
)

module.exports=mongoose.model('employeeSchema',employeeSchema)