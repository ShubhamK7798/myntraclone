import { Schema,model,models } from "mongoose";


const UserSchema = new Schema({
    username:{type:String},
    email:{
        type:String,
        required:true,
        unique:true },
    password:{
        type:String,
        required:true,
         },
    confirmpassword:{
        type:String,
        required:true,
        },
    role:{
        type:String,
        default:'user',
        },
    avatar:{
        type:String,
        default:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",
    },
    admin:{
        type:Boolean,
        default:false
    }
})


// const User = models.User || model('User',UserSchema)

export default models.User || model('User',UserSchema)