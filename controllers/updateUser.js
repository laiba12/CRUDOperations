  //importing model
  const User=require('../models/userModel')

  //defining route handler
  const updateUser=async(req, res)=>{
    try{
       //another way of fetching id
       const {id} = req.params
       const {userId, email, name, phone, city} = req.body;

       const updated = await User.findOneAndUpdate(
        {userId:id}, 
        {userId, email, name, phone, city })
        res.status(200).json({
            success:true,
            data:updated,
            message: "User data updated successfully",        
        })
    
    }
    catch(err){
        console.log(err);
        res.status(500)
        .json({
            success:false,
            message:'Error creating entry',
            }
        )
        
    }
  }

 module.exports=updateUser