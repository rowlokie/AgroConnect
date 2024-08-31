import mongoose from 'mongoose'

const Contractschema =new mongoose.Schema({

organisationname:{
    type:String,
    required:true
},

Contractname:{
    type:String,
    required:true
},
Contractmodel:{
    type:String,
enum:['Centralized','Nucleus-estate','Multipartite','Informal','Intermediary'],
required :true
},


crop:{
    type:String,
    required:true
},
quantity:{
    type:String,
    required:true,
}
,
price:{
    type:String,
    required:false
},
date:{
    type:String,
    
}
})

export const Contract = new mongoose.model('Contract',Contractschema)