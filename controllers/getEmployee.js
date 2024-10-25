
  //importing model
  const Employee=require('../models/empoyeeS')

  const getEmployee=async(req, res)=>{
    try{
       //fetching all employess from DB
       const  employees=await Employee.find()
       //response
       res.status(200)
       res.json(
        {
            success:true,
            data:employees,
            message:"All Employees fetched successfully"
        } ) }
    catch(err){
       
        
    }
  }

 module.exports=getEmployee