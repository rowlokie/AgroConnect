import { Contract } from "../schema/contract.js";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";



export const createContract =async(req,res)=>{
    try{
const {organisationname, Contractmodel, Contractname,crop,quantity,price}=req.body;
if(!organisationname || ! Contractmodel ||!crop || !Contractname ||! quantity || !price){
    res.status(400).json({
        message:"Something is missing",
        success:false
    })
  }
    const contract = await Contract.findOne({Contractname});
    if(contract){
      res.status(400).json({
        message:"Contract already exist",
      })
    }
   else{
  await Contract.create({
    organisationname:  organisationname, Contractmodel:Contractmodel,Contractname:Contractname,crop:crop,quantity:quantity,price:price
  });
}
  return res.status(201).json({
    message:"Contract created successfully",
    success:true,
    Contract
  })
    }catch(error){
        console.log("contract not created",error);
    }
}

export const getContract= async (req, res) => {
  try {
      const userId = req.id; 
     // logged in user id
      const contract = await Contract.find({ userId });
      if (!contract) {
          return res.status(404).json({
              message: "Contract not found.",
              success: false
          })
      }
      return res.status(200).json({
          contract,
          success:true
      })
  } catch (error) {
      console.log(error);
  }
}
// get company by id
export const getContractById = async (req, res) => {
  try {
      const contractId = req.params.id;
      const contract = await Contract.findById(contractId);
      if (!contract) {
          return res.status(404).json({
              message: "Contract not found.",
              success: false
          })
      }
      return res.status(200).json({
          contract,
          success: true
      })
  } catch (error) {
      console.log(error);
  }
}
export const updateShop = async (req, res) => {
  try {
      const { shopname,ownername,phoneNumber,password,organisation,location } = req.body;

      const file = req.file;
     
  
      const updateData = { shopname,ownername,phoneNumber,organisation,password,location};

      const shop = await Shop.findByIdAndUpdate(req.params.id, updateData, { new: true });

      if (!shop) {
          return res.status(404).json({
              message: "Shop not found.",
              success: false
          })
      }
      return res.status(200).json({
          message:"Shop information updated.",
          success:true,
          shop
      })

  } catch (error) {
      console.log(error);
  }
}

