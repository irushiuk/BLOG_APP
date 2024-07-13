const mongoose = require('mongoose')

const Userschema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },

    description:{
        type:String,
        unique:true,
        required:true
    },

    photo:{
        type:String,
        required:false,
    },
    username:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    }



},{timestamps:true})

module.exports=mongoose.model("post",Userschema)
