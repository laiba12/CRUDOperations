  //importing model
const Employee=require('../models/empoyeeS')

  //defining route handler
  const createEmployee=async(req, res)=>{
    try{
        //emplyee details extraction
        const {employeeID, role, name, joinedAt, reportsTo} = req.body;
        //creating a new employee
        const response = await Employee.create({employeeID, role, name, joinedAt, reportsTo})
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

 module.exports=createEmployee