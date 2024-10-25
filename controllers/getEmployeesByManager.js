const Employee=require('../models/empoyeeS')

const getEmployeesByManager=async(req, res)=>{
    try{
      const {reportsTo} = req.params;
      const employee=await Employee.findOne({reportsTo: reportsTo})
  
      //if data is not found
      if(!employee){
       return res.status(404).json({
         success:false,
         message:'no data found',
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
  
  module.exports=getEmployeesByManager