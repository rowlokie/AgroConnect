import { Application } from "../schema/apply.js";
import { Contract } from "../schema/contract.js";

export const applyJob = async (req, res) => {
    try {
     
        const userId ="66c95de3dc2c1ede7681b416" ;
        console.log(userId);
        const ContractId = req.params.id;
        if (!ContractId ) {
            return res.status(400).json({
                message: "Contract id is required.",
                success: false
            })
        };
        // check if the user has already applied for the job
        const existingApplication = await Application.findOne({ contract: ContractId, applicant: userId });

        if (existingApplication) {
            return res.status(400).json({
                message: "You have already applied for this Contract",
                success: false
            });
        }

        // check if the jobs exists
        const contract= await Contract.findById(ContractId);
        if (!contract) {
            return res.status(404).json({
                message: "Contract not found",
                success: false
            })
        }
        // create a new application
        const newApplication = await Application.create({
           contract:ContractId,
            applicant:userId,
        });

        contract.applications.push(newApplication._id);
        await contract.save();
        return res.status(201).json({
            message:"Contract applied successfully.",
            success:true
        })
    } catch (error) {
        console.log(error);
    }
};

export const getAppliedJobs = async (req,res) => {
    try {
        const userId = req.id;
        const application = await Application.find({applicant:userId}).sort({createdAt:-1}).populate({
            path:'contract',
            options:{sort:{createdAt:-1}},
            populate:{
                path:'shop',
                options:{sort:{createdAt:-1}},
            }
        });
        if(!application){
            return res.status(404).json({
                message:"No Applications",
                success:false
            })
        };
        return res.status(200).json({
            application,
            success:true
        })
    } catch (error) {
        console.log(error);
    }
}
// admin dekhega kitna user ne apply kiya hai
export const getApplicants = async (req,res) => {
    try {
        const contractId = req.params.id;
        const contract = await Contract.findById(contractId).populate({
            path:'applications',
            options:{sort:{createdAt:-1}},
            populate:{
                path:'applicant'
            }
        });
        if(!contract){
            return res.status(404).json({
                message:'Contract not found.',
                success:false
            })
        };
        return res.status(200).json({
           contract, 
            succees:true
        });
    } catch (error) {
        console.log(error);
    }
}
export const updateStatus = async (req,res) => {
    try {
        const {status} = req.body;
        const applicationId = req.params.id;
        if(!status){
            return res.status(400).json({
                message:'status is required',
                success:false
            })
        };

        // find the application by applicantion id
        const application = await Application.findOne({_id:applicationId});
        if(!application){
            return res.status(404).json({
                message:"Application not found.",
                success:false
            })
        };

        // update the status
        application.status = status.toLowerCase();
        await application.save();

        return res.status(200).json({
            message:"Status updated successfully.",
            success:true
        });

    } catch (error) {
        console.log(error);
    }
}