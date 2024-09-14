const express=require("express");
const app=express()
const dotenv=require('dotenv');
dotenv.config();
const mongoose=require('mongoose');


const cors=require('cors')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth',require('./routes/Auth.routes'))
app.use('/api/user',require('./routes/user.routes'));




mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log("Connected"))
.catch((error)=>console.log(error,'connection failed'))


const Port=8080;
app.listen(Port,()=>{
console.log(`Server Started at port ${Port}`)
})
