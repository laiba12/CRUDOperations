const express = require('express')
const router = express.Router()


//import controller
const createEmployee=require('../controllers/createEmployee')
const getEmployee = require('../controllers/getEmployee')
const getEmployeeById = require('../controllers/getEmployee')
const updateEmployee = require('../controllers/updateEmployee')
const deleteEmployee= require('../controllers/deleteEmployee')

//define API routes
router.post('/createEmployee',createEmployee)
router.get('/getEmployee', getEmployee)
router.get('/getEmployee/:id',  getEmployeeById)
router.put('/updateEmployee/:id', updateEmployee)
router.delete('/deleteEmployee/:id', deleteEmployee)


module.exports=router
  
