  //importing model
  const User=require('../models/userModel')

  //defining route handler
  const deleteUser=async(req, res)=>{
    try{
       const {id} = req.params
       const user = await User.findOneAndDelete({userId:id})
       if(!user){
        return res.status(404).json(
        {
            success:false,
            message: 'User not found'})
       }
       res.status(200).json(
        {
            success:true,
            message: 'User deleted successfully'
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

 module.exports=deleteUser