const express = require('express')
const app = express()

//load .env
require('dotenv').config()
const PORT = process.env.PORT || 4000

//middleware to parse/fetch json data from the request body
app.use(express.json())

console.log('hey');

//importing routes
const employeeRoutes= require('./routes/employee')

//optional
app.use('/api/v1', employeeRoutes)

app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);    
})

//db connection
const dbConnect=require('./config/database');
dbConnect();


//default route
app.get('/', (req, res) => {
res.send(`<h1> This is HomePage <h1>`)
})

