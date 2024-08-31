import {User} from '../schema/user.js';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const register =async(req,res)=>{
    try{
const {fullname,email,phoneNumber,password,role,adhaarNumber ,age} =req.body;

if ( !fullname ||  !email ||!phoneNumber|| !password || !role || !adhaarNumber || !age) {
res.status(401).json({
    message:"something is missing",
    success:false
})
}

const user =await User.findOne({ email });
if(user){
    res.status(400).json({
        message:"Email already exist",
        success:false
    })
}

const hashedpassword=await bcrypt.hash(password,8);

await User.create({
    fullname,email,phoneNumber,password:hashedpassword,role,adhaarNumber,age
});


return res.status(201).json({
    message:'Account created Successfully',
    success:true
});


    }catch(error){
        console.log(error);
    }
}




export const login = async (req, res) => {
    try {
        const { email, password, role,adhaarNumber} = req.body;
        
        if (!email || !password || !role ||!adhaarNumber) {
            return res.status(400).json({
                message: "Something is missing",
                success: false
            });
        };
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "Incorrect email or password.",
                success: false,
            })
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({
                message: "Incorrect email or password.",
                success: false,
            })
        };
        // check role is correct or not
        if (role !== user.role) {
            return res.status(400).json({
                message: "Account doesn't exist with current role.",
                success: false
            })
        };

        const adhaar = User.findOne({adhaarNumber})
        if(!adhaar){
            return res.status(400).json
({
    message:'adhaar not signed in',
    success:false
})        }

        const tokenData = {
            userId: user._id
        }
        const token = await jwt.sign(tokenData,'kfjsldkfj', { expiresIn: '1d' });

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
           adhaarNumber:user.adhaarNumber,

        }

        return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpsOnly: true, sameSite: 'strict' }).json({
            message: `Welcome back ${user.fullname}`,
            user,
            success: true
        })


    } catch (error) {
        console.log(error);
    }
}
export const logout = async (req, res) => {
    try {
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: "Logged out successfully.",
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}
export const updateProfile = async (req, res) => {
    try {
        const { fullname, email, phoneNumber,age } = req.body;
        
        



       
        const userId = req.id; // middleware authentication
        let user = await User.findById(userId);

        if (!user) {
            return res.status(400).json({
                message: "User not found.",
                success: false
            })
        }
        // updating data
        if(fullname) user.fullname = fullname
        if(email) user.email = email
        if(phoneNumber)  user.phoneNumber = phoneNumber
     if (age) user.age =age,
      
        // resume comes later here...
       


        await user.save();

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            age:user.age
        }

        return res.status(200).json({
            message:"Profile updated successfully.",
            user,
            success:true
        })
    } catch (error) {
        console.log(error);
    }
}