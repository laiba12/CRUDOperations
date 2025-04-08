  //importing model
const User=require('../models/userModel')

  //defining route handler
  const createUser=async(req, res)=>{
    try{
        //emplyee details extraction
        const {userId, email, name, phone, city} = req.body;
        //creating a new employee
        const response = await User.create({userId, email, name, phone, city})
        //returning response
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry created successfully'                
            }            
        )
        // res.send(res)
    
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

 module.exports=createUser