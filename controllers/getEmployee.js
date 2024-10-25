
  //importing model
  const Employee=require('../models/empoyeeS')

  const getEmployees=async(req, res)=>{
    try{
       //fetching all employess from DB
       const employees=await Employee.find()
       //response
       res.status(200)
       .json(
        {
            success:true,
            data:employees,
            message:"All Employees fetched successfully"
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

 module.exports=getEmployees

 //in case of huge data, we can fetch or get the single data on the basis or single id
 //or if we want to fetch data of a particular entity, we can do se by sending the id parameter in the get request and by using findById method

