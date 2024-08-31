import mongoose from 'mongoose';



const connectdb=async()=>{
    try{
    await mongoose.connect('mongodb://127.0.0.1:27017/FARM');
    console.log('connected successfully');
}catch(error){
    console.log('Mongo not connected');
}}

export default connectdb;