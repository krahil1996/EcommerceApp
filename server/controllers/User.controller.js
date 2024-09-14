const bcrypt=require('bcrypt');
const UserData=require('../models/userModel');



const getAllUser=async(req,res)=>{

    try{
        const users=await UserData.find();
        res.send(users);
    }catch (error){
        res.send({message : "error occured",error})
    }
  
}


const getById =async (req,res)=>{
    const id =req.params.id;

    try {
        const user=await UserData.findOne ({_id:id});
        res.send(user);
    } catch (error) {
        res.send({message : "error occur", error})
    }
}


const deleteById =async (req ,res)=>{
    const id =req.params.id;
    try {
        const del =await UserData.findByIdAndDelete({_id:id});
        if(!del){
            return res.send({message : "Unable  to Delete User"})

        }
        res.send ("User Deleted Successfully")
    }catch (error){
        res.send ({message : "error occurred",error})
    }
}

const updateById =async (req ,res)=>{
    const id=req.params.id;

    const {name,password}=req.body;

    try {
        const update =await UserData.findByIdAndUpdate(id,req.body);
        if(!update){
            return res.send({message : "Unable to Update User"})

        }
        res.send("User updated Successfully")
    } catch (error) {
        res.send ({message :"error occured",error})
    }
}

module.exports ={
    getAllUser,
    getById,
    deleteById,
    updateById
}