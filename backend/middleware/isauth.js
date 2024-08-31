import jwt from 'jsonwebtoken';
const isauthenticate =async(req,res,next)=>{
    try{

const token =req.cookies.token;
console.log(token);
if(!token){
    return res.status(401).json({
        message:"User not authenticate",
        success:false,
    })
}
const decode =await jwt.verify(token,'kfjsldkfj')
if(!decode){
    return res.status(400).json({
        message:'Invalid token ',
        success:false
    })
};

req.id =decode.userId;
next();
    }catch(error){
        console.log('auth error');
    }
}

export default isauthenticate;