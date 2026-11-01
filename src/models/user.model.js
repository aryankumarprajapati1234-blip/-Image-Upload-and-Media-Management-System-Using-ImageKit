const mongoose=require("mongoose")

const userschema=new mongoose.Schema({
    username:{
        type:String,
        required:true,// name dena hi rahega otherwise system fails
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:["user","artist"], // hamare applicaton mai two type ke user hai, ek gaane create kar sakte hai , aur ek keval sun sakta hai, enum yaha pe ye bata rha hai ki role ki in do mai se ek value hogi
        default:"user",
    }
})

const usermodel= mongoose.model("user",userschema)

module.exports=usermodel;