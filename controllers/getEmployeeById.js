  //importing model
  const Employee=require('../models/empoyeeS')

const getEmployeeById=async(req, res)=>{
    try{
       const id = req.params.id;
       const  employee=await Employee.findById({_id: id})
  
       //if data is not found
       if(!employee){
        return res.status(404).json({
          success:false,
          message:'no data found with given id',
          })
          }
        res.status(200).json({
        success:true,
        data:employee,
        message:'Employee data fetched successfully'
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
  
  module.exports=getEmployeeById