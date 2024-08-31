import express from "express";
import isauthenticate from "../middleware/isauth.js";
import { applyJob,getApplicants,getAppliedJobs,updateStatus } from "../controllers.js/Application.js";
 
const approuter = express.Router();

approuter.route("/apply/:id").get( applyJob);
approuter.route("/get").get( getAppliedJobs);
approuter.route("/:id/applicants").get( getApplicants);
approuter.route("/status/:id/update").post(isauthenticate, updateStatus);
 

export default approuter;
