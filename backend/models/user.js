import mongoose from "mongoose";
const userSchema = new mongoose.Schema 
({
    email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true,
    },
    password : {
        type : String,
        required : true,
        minlength : 6,
    },
    role : {
        type : String,
        enum : ['admin','user'],
        default : 'user',
    },
    confirmpassword : {
        type : String,
        required : true,
        minlength : 6,
    },
    name : {
        type : String,
        required : true,
        trim : true,
    },
    phone : {
        type : String,
        required : true,
        trim : true,
    },
        

})