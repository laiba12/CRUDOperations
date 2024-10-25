  //importing model
  const Employee=require('../models/empoyeeS')

  //defining route handler
  const updateEmployee=async(req, res)=>{
    try{
       //another way of fetching id
       const {id} = req.params
       const {employeeID, role, name, joinedAt, reportsTo} = req.body;

       const updated = await Employee.findByIdAndUpdate(
        {_id:id}, 
        {employeeID, role, name, joinedAt, reportsTo })
        res.status(200).json({
            success:true,
            data:updated,
            message: "Employee data updated successfully",        
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

 module.exports=updateEmployee