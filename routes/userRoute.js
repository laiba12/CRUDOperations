const express = require('express')
const router = express.Router()


//import controller
const createUser = require('../controllers/createUser')
const getUserById = require('../controllers/getUserById')
const getUser = require('../controllers/getUser')
const updateUser = require('../controllers/updateUser')
const deleteUser = require('../controllers/deleteUser')

//define API routes
router.post('/createUser',createUser)
router.get('/getUser', getUser)
router.get('/getUser/:id',  getUserById)
router.put('/updateUser/:id', updateUser)
router.delete('/deleteUser/:id', deleteUser)


module.exports=router
  
