const express = require('express')
const router = express.Router()


//import controller
const createEmployee = require('../controllers/createEmployee')
const getEmployeeById = require('../controllers/getEmployeeById')
const getEmployees = require('../controllers/getEmployee')
const updateEmployee = require('../controllers/updateEmployee')
const deleteEmployee = require('../controllers/deleteEmployee')
const reportsTo = require('../controllers/getEmployeesByManager')

//define API routes
router.post('/createEmployee',createEmployee)
router.get('/getEmployees', getEmployees)
router.get('/manager/:reportsTo',reportsTo)
router.get('/getEmployee/:id',  getEmployeeById)
router.put('/updateEmployee/:id', updateEmployee)
router.delete('/deleteEmployee/:id', deleteEmployee)


module.exports=router
  
