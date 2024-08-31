import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema({
    contract:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Contract',
        required:true
    },
    applicant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    status:{
        type:String,
        enum:['pending', 'accepted', 'rejected'],
        default:'pending'
    }
},{timestamps:true});
export const Application  = mongoose.model("Application", ApplicationSchema);