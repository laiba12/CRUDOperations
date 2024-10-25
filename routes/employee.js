const express = require('express')
const router = express.Router()


//import controller
const createEmployee=require('../controllers/createEmployee')
const getEmployee = require('../controllers/getEmployee')

//define API routes
router.post('/createEmployee',createEmployee)
router.get('/getEmployee', getEmployee)

module.exports=router
  
