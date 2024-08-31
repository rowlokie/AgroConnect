import mongoose from 'mongoose';

const Userschema=new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
  phoneNumber:{
        type:String,
        required:true
    },
   password:{
        type:String,
        required:true
    },
   role:{
        type:String,
      enum:['Farmer','Shopkeer'],
      required:true
    },
  adhaarNumber:{
    type:String,
    required:true
  },
  age:{
    type:String,
    required:true,
  }
 
    }
,{timestamps:true});

export const User =new mongoose.model('User',Userschema);