  //importing model
  const User=require('../models/userModel')

const getUserById=async(req, res)=>{
    try{
       const {id} = req.params;
       const  user=await User.findOne({userID: id})
  
       //if data is not found
       if(!user){
        return res.status(404).json({
          success:false,
          message:'no data found with given id',
          })
          }
        res.status(200).json({
        success:true,
        data:user,
        message:'User data fetched successfully'
        })
  
       }
    catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:'Error creating entry',
            }
        )
       }
  } 
  
  module.exports=getUserById