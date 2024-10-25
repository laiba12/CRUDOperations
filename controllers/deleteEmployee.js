  //importing model
  const Employee=require('../models/empoyeeS')

  //defining route handler
  const deleteEmployee=async(req, res)=>{
    try{
       const {id} = req.params
       const employee = await Employee.findByIdAndDelete({_id:id})
       if(!employee){
        return res.status(404).json(
        {
            success:false,
            message: 'Employee not found'})
       }
       res.status(200).json(
        {
            success:true,
            message: 'Employee deleted successfully'
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

 module.exports=deleteEmployee