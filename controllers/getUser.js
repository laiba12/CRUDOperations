
  //importing model
  const User=require('../models/userModel')

  const getUser=async(req, res)=>{
    try{
       //fetching all employess from DB
       const user=await User.find()
       //response
       res.status(200)
       .json(
        {
            success:true,
            data:user,
            message:"All user fetched successfully"
        } ) }
    catch(err){
      console.log(err);
      res.status(500)
      .json({
          success:false,
          data:"internal server error",
          message:'Error creating entry',
          }
      )
        
    }
  } 

 module.exports=getUser


