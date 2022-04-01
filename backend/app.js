
const express = require("express");
const app = express();
const userRoutes = require('./routes/userRoutes')
const errormidleware = require('./middleware/errors')
const cors = require('cors')

// const adminRouter = require('./routes/admin/adminRoutes'





app.use(express.json());

app.use(cors({
    origin:"http://localhost:3000"
}))







app.use('/user', userRoutes)


 
// listen to particular port and server

app.use(errormidleware)
module.exports = app